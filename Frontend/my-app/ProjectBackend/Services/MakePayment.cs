using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Stripe;
using Microsoft.Extensions.Configuration;

namespace ProjectBackend.Services
{
    public class MakePayment
    {
        private IConfiguration _configuration;

        public MakePayment(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public async Task PayAsync(string cardNo, int month, int year, string cvv, int totalPrice, string address1, string address2, string city, string designcode, string newdesigncode, string payInfo, string email)
        {
            try
            {
                StripeConfiguration.ApiKey = "sk_test_51ITpooBz4mLaChc2LU7llmQFsqq0IyngUytAqAavXkyWqzO2ykkixFT4BysHl3rbGLKOzXqvFGEKzxjTmdNavofw00sbwjSLSV";
                var optionstoken = new TokenCreateOptions
                {
                    Card = new TokenCardOptions
                    {
                        Number = cardNo,
                        ExpMonth = month,
                        ExpYear = year,
                        Cvc = cvv,
                        AddressLine1 = address1,
                        AddressLine2 = address2,
                        AddressCity = city,
                        Name = designcode,
                        AddressCountry = newdesigncode,
                        AddressState = payInfo
                    }
                };

                var servicetoken = new TokenService();
                Token stripetoken = await servicetoken.CreateAsync(optionstoken);

                var options = new ChargeCreateOptions
                {
                    Amount = totalPrice,
                    Currency = "lkr",
                    Description = "test",
                    ReceiptEmail = email,
                    Source = stripetoken.Id
                };

                var service = new ChargeService();
                Charge charge = await service.CreateAsync(options);



            }
            catch (Exception)
            {
                throw;//return e.Message;
            }
        }
    }
}

