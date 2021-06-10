using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
//using MailKit.Net.Smtp;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
//using MimeKit;
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


            _context.BillingNewDesignTable.Add(billingNewDesign);
            await _context.SaveChangesAsync();
            await _makePayment.PayAsync(billingNewDesign.CardNo, billingNewDesign.ExpMonth, billingNewDesign.ExpYear, billingNewDesign.Cvv, billingNewDesign.TotalPrice, billingNewDesign.Tele, billingNewDesign.Address, billingNewDesign.City, billingNewDesign.Designcode, billingNewDesign.Newdesigncode, billingNewDesign.PayInfo, billingNewDesign.Email, billingNewDesign.Distance);
           

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