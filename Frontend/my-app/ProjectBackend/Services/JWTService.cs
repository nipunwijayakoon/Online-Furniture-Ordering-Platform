using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using ProjectBackEnd.Models;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace ProjectBackend.Services.JWTService
{
    public class JWTService : IJWTService
    {
        private readonly IConfiguration _config;
        private readonly FurnituresDBContext _db;
        public JWTService(IConfiguration config, FurnituresDBContext db)
        {
            _config = config;
            _db = db;
        }

        public string GenerateJWTtoken(Login user)
        {
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:SecretKey"]));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

            // Find User role
            var isAdmin = _db.Admins.FirstOrDefault(m => m.AdEmail.ToLower() == user.Email.ToLower());
            var isCustomer = _db.Customers.FirstOrDefault(m => m.CustomerEmail.ToLower() == user.Email.ToLower());

            var currentUserRole = new object();
            var currentUserId = new object();

            if (isAdmin != null)
            {
                currentUserRole = isAdmin.UserRole;
                currentUserId = isAdmin.AdminId;
            }
            else
            {
                currentUserRole = isCustomer.UserRole;
                currentUserId = isCustomer.CustomerID;
            }

            var claims = new[]
            {
                new Claim(JwtRegisteredClaimNames.Sub, user.Email),
                new Claim("id", currentUserId.ToString()),
                new Claim("role", currentUserRole.ToString()),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
            };

            var token = new JwtSecurityToken(
            issuer: _config["Jwt:Issuer"],
            audience: _config["Jwt:Audience"],
            claims: claims,
            expires: DateTime.Now.AddMinutes(30),
            signingCredentials: credentials
            );

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}
