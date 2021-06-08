using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProjectBackEnd.Models;
using ProjectBackend.Models;
using MimeKit;
using MailKit.Net.Smtp;

namespace Projectbackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReceiptController : ControllerBase
    {
        private readonly FurnituresDBContext _context;

        public ReceiptController(FurnituresDBContext context)
        {
            _context = context;
        }

        // GET: api/Order
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Receipt>>> GetOrderTable()
        {
            return await _context.Receipts.ToListAsync();
        }

        // GET: api/Order/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Receipt>> GetOrder(int id)
        {
            var order = await _context.Receipts.FindAsync(id);

            if (order == null)
            {
                return NotFound();
            }

            return order;
        }

        // PUT: api/Order/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutOrder(int id, Receipt order)
        {
            if (id != order.OrderId)
            {
                return BadRequest();
            }

            _context.Entry(order).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!OrderExists(id))
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

        // POST: api/Order
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Receipt>> PostOrder(Receipt order)
        {
          //  var ReceiptWithSameEmail = _context.Receipts.FirstOrDefault(m => m.Email.ToLower() == Receipt.Email.ToLower());
            _context.Receipts.Add(order);
            await _context.SaveChangesAsync();

/*
            var message = new MimeMessage();
            message.From.Add(new MailboxAddress("LANKA FURNITURE MAKERS", "lankafurniture123@gmail.com"));
            message.To.Add(new MailboxAddress(Receipt.CardName, Receipt.Email));
            message.Subject = "Your Order " + Receipt.Designcode + " is good to go!";
            message.Body = new TextPart("plain")
            {
                Text = ("Thank you for using LANKA FURNITURE MAKERS to purchase your dream furniture.Your order is successfully completed and received to the sellers." +
                "This email is to confirm your recent transaction" +
                "Card Holder's Name:" + Receipt.CardName +
                "Card No :" + Receipt.CardNo +
                "Date :" + DateTime.Now
                 )


            };
*/
            return CreatedAtAction("GetOrder", new { id = order.OrderId }, order);
        }

        // DELETE: api/Order/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Receipt>> DeleteOrder(int id)
        {
            var order = await _context.Receipts.FindAsync(id);
            if (order == null)
            {
                return NotFound();
            }

            _context.Receipts.Remove(order);
            await _context.SaveChangesAsync();

            return order;
        }

        private bool OrderExists(int id)
        {
            return _context.Receipts.Any(e => e.OrderId == id);
        }
    }
}