﻿using System;
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
    public class BillingInfoController : ControllerBase
    {
        private readonly FurnituresDBContext _context;


        private readonly IConfiguration _config;
        private IMailService _mailService;
        private readonly MakePayment _makePayment;
        private IConfiguration config;

        public BillingInfoController(FurnituresDBContext context, IConfiguration config, IMailService mailService, MakePayment makePayment)
        {
            _context = context;
            _config = config;
            _mailService = mailService;
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
            await _makePayment.PayAsync(billingInfo.CardNo, billingInfo.ExpMonth, billingInfo.ExpYear, billingInfo.Cvv, billingInfo.TotalPrice, billingInfo.Tele, billingInfo.Address, billingInfo.City, billingInfo.Designcode, billingInfo.Newdesigncode, billingInfo.PayInfo, billingInfo.Email, billingInfo.Distance);
            if (MakePayment.paymentStatus)
            {
                _context.BillingInfoTable.Add(billingInfo);
                await _context.SaveChangesAsync();
                await _mailService.SendEmailAsync
                (
                    billingInfo.Email,
                    "Payment Confirmation for Order Number:" + billingInfo.Designcode,
                    "<p><strong>Thank you for using LANKA FURNITURE MAKERS!!!</strong></p>" +
                    " <p>Your payement is successfully completed and received to the sellers. This email is to confirm your recent transaction. Your payment details are as follows.</p>" +
                    "<p> Card Holder's Name:" + billingInfo.CardName +
                    "<p>Card No :" + billingInfo.CardNo +
                    "<p>Address :" + billingInfo.Address +
                    "<p>City :" + billingInfo.City +
                    "<p>Distance (km) :" +billingInfo.Distance +
                    "<p> <strong>Total Amount: Rs." + billingInfo.TotalPrice +
                    "<p>Date :" + DateTime.Now +
                   "<p>Please download your ordered products details document from the website and keep it with you.</p>"+
                    "<p>If you have any douts on your payment details feel free to contact us or send an email.</p>"+
                    "<p>Tele:\t\t 081-2235643 \t\t\t\t Mobile:\t\t (+94) 71 3452908 / 76 9145689"
                );
            }
            

            var newUser = CreatedAtAction("GetBillingInfo", new { id = billingInfo.BillingId }, billingInfo);

            if (newUser != null)
            {
                return Ok("Success");
            }
            else
            {
                return Ok("Error");
            }
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