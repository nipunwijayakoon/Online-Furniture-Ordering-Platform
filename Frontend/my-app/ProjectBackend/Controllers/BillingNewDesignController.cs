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

using ProjectBackend.Services;
using ProjectBackEnd.Models;

namespace ProjectBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BillingNewDesignController : ControllerBase
    {
        private readonly FurnituresDBContext _context;


        private readonly IConfiguration _config;
        //    private readonly IMailService _mailService;
        private readonly MakePayment _makePayment;
        private IConfiguration config;

        public BillingNewDesignController(FurnituresDBContext context, MakePayment makePayment)
        {
            _context = context;
            _config = config;
            //     _mailService = mailService;
            _makePayment = makePayment;
        }

        // GET: api/BillingNewDesign
        [HttpGet]
        public async Task<ActionResult<IEnumerable<BillingNewDesign>>> GetBillingNewDesignTable()
        {
            return await _context.BillingNewDesignTable.ToListAsync();
        }

        // GET: api/BillingNewDesign/5
        [HttpGet("{id}")]
        public async Task<ActionResult<BillingNewDesign>> GetBillingNewDesign(int id)
        {
            var billingNewDesign = await _context.BillingNewDesignTable.FindAsync(id);

            if (billingNewDesign == null)
            {
                return NotFound();
            }

            return billingNewDesign;
        }

        // PUT: api/BillingNewDesign/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBillingNewDesign(int id, BillingNewDesign billingNewDesign)
        {
            if (id != billingNewDesign.BillingNewId)
            {
                return BadRequest();
            }

            _context.Entry(billingNewDesign).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BillingNewDesignExists(id))
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

        // POST: api/BillingNewDesign
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<BillingNewDesign>> PostBillingNewDesign(BillingNewDesign billingNewDesign)
        {

         //   var billingInfoWithSameEmail = _context.BillingInfoTable.FirstOrDefault(m => m.Email.ToLower() == billingInfo.Email.ToLower());

            _context.BillingNewDesignTable.Add(billingNewDesign);
            await _context.SaveChangesAsync();
            await _makePayment.PayAsync(billingNewDesign.CardNo, billingNewDesign.ExpMonth, billingNewDesign.ExpYear, billingNewDesign.Cvv, billingNewDesign.TotalPrice, billingNewDesign.Address1, billingNewDesign.Address2, billingNewDesign.City, billingNewDesign.Designcode, billingNewDesign.Newdesigncode, billingNewDesign.PayInfo, billingNewDesign.Email);
            //    await _mailService.SendEmailAsync(billingInfo.Email, "Payment Confirmation for Bill No:" + billingInfo.BillingId, "<p><strong>Thank you for using Govimithuro!</strong></p> <p>This email is to confirm your recent transaction.</p><p> Card Holder's Name:" + billingInfo.CardName + "<p>Card No :" + billingInfo.CardNo + "<p>Date :" + DateTime.Now);


            //   var message = new MimeMessage();
            //   message.From.Add(new MailboxAddress("LANKA FURNITURE MAKERS", "lankafurniture123@gmail.com"));
            //   message.To.Add(new MailboxAddress(billingInfo.CardName, billingInfo.Email));
            //   message.Subject = "New Design Uploading Successful";
            //   message.Body = new TextPart("plain")
            //   {
            //       Text = ("Thank you for using LANKA FURNITURE MAKERS to purchase a New Furniture Design order. Your order is successfully completed and received to the sellers.")
            //   };

            //   using (var client = new SmtpClient())
            //   {
            //       client.Connect("smtp.gmail.com", 587, false);
            //       client.Authenticate("lankafurniture123@gmail.com", "Lanka@123");
            //
            //       client.Send(message);

            //       client.Disconnect(true);
            //   }




            return CreatedAtAction("GetBillingNewDesign", new { id = billingNewDesign.BillingNewId }, billingNewDesign);
        }

        // DELETE: api/BillingNewDesign/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<BillingNewDesign>> DeleteBillingNewDesign(int id)
        {
            var billingNewDesign = await _context.BillingNewDesignTable.FindAsync(id);
            if (billingNewDesign == null)
            {
                return NotFound();
            }

            _context.BillingNewDesignTable.Remove(billingNewDesign);
            await _context.SaveChangesAsync();

            return billingNewDesign;
        }

        private bool BillingNewDesignExists(int id)
        {
            return _context.BillingNewDesignTable.Any(e => e.BillingNewId == id);
        }
    }
}