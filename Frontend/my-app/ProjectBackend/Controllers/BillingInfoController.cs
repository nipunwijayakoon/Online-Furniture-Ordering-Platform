using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MailKit.Net.Smtp;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MimeKit;
using Microsoft.Extensions.Configuration;
using MimeKit;
using ProjectBackend.Services;
using ProjectBackEnd.Models;

namespace ProjectBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BillingInfoController : ControllerBase
    {
        private readonly FurnituresDBContext _context;

       
       private readonly IConfiguration _config;
        private readonly MakePayment _makePayment;
        private IConfiguration config;

        public BillingInfoController(FurnituresDBContext context, MakePayment makePayment)
        {
            _context = context;
            _config = config;
            _makePayment = makePayment;
        }

        // GET: api/BillingInfo
        [HttpGet]
        public async Task<ActionResult<IEnumerable<BillingInfo>>> GetBillingInfoTable()
        {
            return await _context.BillingInfoTable.ToListAsync();
        }

        // GET: api/BillingInfo/5
        [HttpGet("{id}")]
        public async Task<ActionResult<BillingInfo>> GetBillingInfo(int id)
        {
            var billingInfo = await _context.BillingInfoTable.FindAsync(id);

            if (billingInfo == null)
            {
                return NotFound();
            }

            return billingInfo;
        }

        // PUT: api/BillingInfo/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBillingInfo(int id, BillingInfo billingInfo)
        {
            if (id != billingInfo.BillingId)
            {
                return BadRequest();
            }

            _context.Entry(billingInfo).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BillingInfoExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/BillingInfo
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<BillingInfo>> PostBillingInfo(BillingInfo billingInfo)
        {
            var billingInfoWithSameEmail = _context.BillingInfoTable.FirstOrDefault(m => m.Email.ToLower() == billingInfo.Email.ToLower());
            _context.BillingInfoTable.Add(billingInfo);
            await _context.SaveChangesAsync();
            await _makePayment.PayAsync(billingInfo.CardNo, billingInfo.ExpMonth, billingInfo.ExpYear, billingInfo.Cvv, billingInfo.TotalPrice, billingInfo.Tele, billingInfo.Address, billingInfo.City, billingInfo.Designcode, billingInfo.Newdesigncode, billingInfo.PayInfo, billingInfo.Email, billingInfo.Distance);
            
            var message = new MimeMessage();
            message.From.Add(new MailboxAddress("LANKA FURNITURE MAKERS", "lankafurniture123@gmail.com"));
            message.To.Add(new MailboxAddress(billingInfo.CardName, billingInfo.Email));
            message.Subject = "Your Order " + billingInfo.Designcode + " is good to go!";
            message.Body = new TextPart("plain")
            {
               Text= ("Thank you for using LANKA FURNITURE MAKERS to purchase your dream furniture.!!!!!!!!!!!!!!!!!!!!!!!!\r\n \r\n " +
               "        Your payement is successfully completed and received to the sellers."+
               
                " This email is to confirm your recent transaction. Your payment details are as follows. \r\n \r\n" +
             
                "   Card Holder's Name :  " + billingInfo.CardName + "\r \n" +
              
                "   Card No :  " + billingInfo.CardNo + "\r \n" +

                "   Address :  " + billingInfo.Address + "\r \n" +

                "   City :  " + billingInfo.City + "\r \n" +

                "   Distance (km) :  " + billingInfo.Distance + "\r \n" +

                "   Amount you pay (Rs.) :  " + billingInfo.TotalPrice + "\r \n"+
                
                "   Date :  " + DateTime.Now + "\r \n \r\n" +

                "Please download your ordered products details document from the website and keep it with you." + 
                "If you have any douts on your payment details feel free to contact us or send an email. " + "\r \n"+

                "     Tele:  081-2235643 \t\t  Mobile: (+94) 71 3452908 / 76 9145689"


                 )
                 
              
                
            };

            using (var client = new SmtpClient())
            {
                client.Connect("smtp.gmail.com", 587, false);
                client.Authenticate("lankafurniture123@gmail.com", "Lanka@123");

                client.Send(message);

                client.Disconnect(true);
            }
            return CreatedAtAction("GetBillingInfo", new { id = billingInfo.BillingId }, billingInfo);
        }

        // DELETE: api/BillingInfo/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<BillingInfo>> DeleteBillingInfo(int id)
        {
            var billingInfo = await _context.BillingInfoTable.FindAsync(id);
            if (billingInfo == null)
            {
                return NotFound();
            }

            _context.BillingInfoTable.Remove(billingInfo);
            await _context.SaveChangesAsync();

            return billingInfo;
        }

        private bool BillingInfoExists(int id)
        {
            return _context.BillingInfoTable.Any(e => e.BillingId == id);
        }
    }
}