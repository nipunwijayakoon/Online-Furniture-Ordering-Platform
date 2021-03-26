using ProjectBackEnd.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectBackend.Services.JWTService
{
    public interface IJWTService
    {
        public string GenerateJWTtoken(Login user);
    }
}
