﻿using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using ProjectBackend.Models;
using ProjectBackend.Services.JWTService;
using ProjectBackEnd.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MailKit.Net.Smtp;
using MimeKit;

namespace ProjectBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserloginController : ControllerBase
    {
        public readonly FurnituresDBContext _data;
        private readonly IConfiguration _config;
        private IJWTService _jwtService;

        public UserloginController(IConfiguration config, IJWTService jwtservice, FurnituresDBContext data)
        {
            _config = config;
            _data = data;
            _jwtService = jwtservice;
        }







        [HttpGet]
        public List<Customer> getall()
        {
            return _data.Customers.ToList();
        }






        [HttpPost("signup/customer")]
        public async Task<IActionResult> CustomerPost([FromBody] Customer newcustomer)
        {

            

                var customerWithSameEmail =  _data.Customers.FirstOrDefault(m => m.CustomerEmail.ToLower() == newcustomer.CustomerEmail.ToLower()); //check email already exit or not


                if (customerWithSameEmail == null)
                {

                    _data.Customers.Add(newcustomer);
                    _data.SaveChanges();

                var message = new MimeMessage();
                message.From.Add(new MailboxAddress("LANKA FURNITURE MAKERS", "lankafurniture123@gmail.com"));
                message.To.Add(new MailboxAddress(newcustomer.CustomerFirstName, newcustomer.CustomerEmail));
                message.Subject = "Registration Success";
                message.Body = new TextPart("plain")
                {
                    Text = "Thank you for register in our company"
                };
                using (var client = new SmtpClient())
                {
                    client.Connect("smtp.gmail.com", 587, false);
                    client.Authenticate("lankafurniture123@gmail.com", "Lanka@123");

                    client.Send(message);

                    client.Disconnect(true);
                }



                Login user = new Login();
                    user.Email = newcustomer.CustomerEmail;
                    user.Password = newcustomer.CustomerPW;

                    var tokenString = _jwtService.GenerateJWTtoken(user);



                    return Ok(new
                    {
                        token = tokenString,

                    });


                }


                else
                {

                    return BadRequest();
                }




        }







        [HttpPost("signup/seller")]
        public async Task<IActionResult> SellersPost([FromBody] Shoplist newseller)
        {
            // CustomerModelDB.Add(newcustomer);
            var SellerWithSameEmail = _data.Shoplist.FirstOrDefault(m => m.SellerEmail.ToLower() == newseller.SellerEmail.ToLower()); //check email already exit or not


            if (SellerWithSameEmail == null)
            {
                
                _data.Shoplist.Add(newseller);
                _data.SaveChanges();

                var message = new MimeMessage();
                message.From.Add(new MailboxAddress("LANKA FURNITURE MAKERS", "lankafurniture123@gmail.com"));
                message.To.Add(new MailboxAddress(newseller.SellerFirstName, newseller.SellerEmail));
                message.Subject = "Registration Success";
                message.Body = new TextPart("plain")
                {
                    Text = ("Thank you for register in our company as a seller, we hope you will try your best to give better service to the customers" +
                                "                                                   "  +
                            "Your account password is:  " +newseller.SellerPW)
                };
                using (var client = new SmtpClient())
                {
                    client.Connect("smtp.gmail.com", 587, false);
                    client.Authenticate("lankafurniture123@gmail.com", "Lanka@123");

                    client.Send(message);

                    client.Disconnect(true);
                }

                Login user = new Login();
                user.Email = newseller.SellerEmail;
                user.Password = newseller.SellerPW;

                var tokenString = _jwtService.GenerateJWTtoken(user);

                
                return Ok(new
                {
                    token = tokenString,
                });
            }
            else
            {
                return BadRequest();
            }


        }


















        // POST api/<UserloginController>
        [HttpPost]
        [Route("login")]
        public async Task<IActionResult> Login(Login login)
        {
            try { 
           
                var CheckCustomeEmil = _data.Customers.FirstOrDefault(m => m.CustomerEmail.ToLower() == login.Email);
                var CheckCustomerPW = _data.Customers.FirstOrDefault(m=> m.CustomerPW.ToLower() == login.Password);


                var CheckSellerEmail = _data.Shoplist.FirstOrDefault(m => m.SellerEmail.ToLower() == login.Email);
                var CheckSellerPW = _data.Shoplist.FirstOrDefault(m => m.SellerPW.ToLower() == login.Password);


                var CheckAdminEmail = _data.Admins.FirstOrDefault(m => m.AdEmail.ToLower() == login.Email);
                var CheckAdminPW = _data.Admins.FirstOrDefault(m => m.AdminPW.ToLower() == login.Password);


                if (((CheckCustomeEmil == null) || (CheckCustomerPW == null)) && ((CheckSellerEmail == null) || (CheckSellerPW == null))

                    && ((CheckAdminEmail == null) || (CheckAdminPW == null))


                    )
                {
                    return BadRequest();
                }
                else
                {
                var tokenString = _jwtService.GenerateJWTtoken(login);
                return Ok(new
                {
                    token = tokenString
                });
                }

            }


            catch(Exception ex)
            { throw ex; }

        }




       














    }
}
