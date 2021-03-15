using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MailKit.Net.Smtp;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MimeKit;
//using ProjectBackend.Services.MailService;
using ProjectBackEnd.Models;

namespace ProjectBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomersController : ControllerBase
    {
        private readonly FurnituresDBContext _context;
        //private IMailService _mailService;
        public CustomersController(FurnituresDBContext context)
        {
            _context = context;
        }

        // GET: api/Customers
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Customer>>> GetCustomers()
        {
            return await _context.Customers.ToListAsync();
        }

        // GET: api/Customers/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Customer>> GetCustomer(int id)
        {
            var customer = await _context.Customers.FindAsync(id);

            if (customer == null)
            {
                return NotFound();
            }

            return customer;
        }

        // PUT: api/Customers/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCustomer(int id, Customer customer)
        {
            if (id != customer.CustomerID)
            {
                return BadRequest();
            }

            _context.Entry(customer).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CustomerExists(id))
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

        // POST: api/Customers
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Customer>> PostCustomer(Customer customer)
        {
            var customerWithSameEmail = _context.Customers.FirstOrDefault(m => m.CustomerEmail.ToLower() == customer.CustomerEmail.ToLower());

            if (customerWithSameEmail == null)
            {
                _context.Customers.Add(customer);
                await _context.SaveChangesAsync();


                /*await _mailService.SendEmailAsync(customer.CustomerEmail, "Confirm your email", $"<h1>Thank You for registering in Lanka Furnitures</h1>" +
                   $"<p>Please confirm your email by <a>Clicking here</a></p>");*/
                var message = new MimeMessage();
                message.From.Add(new MailboxAddress("Registration Success", "lankafurniture123@gmail.com"));
                message.To.Add(new MailboxAddress(customer.CustomerFirstName, customer.CustomerEmail));
                message.Subject = "(Lanka Furniture)this is a test mail";
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

            }

            else
            {
                return BadRequest();
            }

            return CreatedAtAction("GetCustomer", new { id = customer.CustomerID }, customer);

        }

        // DELETE: api/Customers/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Customer>> DeleteCustomer(int id)
        {
            var customer = await _context.Customers.FindAsync(id);
            if (customer == null)
            {
                return NotFound();
            }

            _context.Customers.Remove(customer);
            await _context.SaveChangesAsync();

            return customer;
        }

        private bool CustomerExists(int id)
        {
            return _context.Customers.Any(e => e.CustomerID == id);
        }
    }
}
