using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MailKit.Net.Smtp;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MimeKit;
using ProjectBackEnd.Models;
using ProjectBackend.Models;


namespace ProjectBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NewDesignsController : ControllerBase
    {
        private readonly FurnituresDBContext _context;

        public NewDesignsController(FurnituresDBContext context)
        {
            _context = context;
        }

        // GET: api/NewDesigns
        [HttpGet]
        public async Task<ActionResult<IEnumerable<NewDesign>>> GetNewDesign_1()
        {
            return await _context.NewDesign_1.ToListAsync();
        }

        // GET: api/NewDesigns/5
        [HttpGet("{id}")]
        public async Task<ActionResult<NewDesign>> GetNewDesign(int id)
        {
            var newDesign = await _context.NewDesign_1.FindAsync(id);

            if (newDesign == null)
            {
                return NotFound();
            }

            return newDesign;
        }

        // PUT: api/NewDesigns/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutNewDesign(int id, NewDesign newDesign)
        {
            if (id != newDesign.ItemID)
            {
                return BadRequest();
            }

            _context.Entry(newDesign).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!NewDesignExists(id))
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

        // POST: api/NewDesigns
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<NewDesign>> PostNewDesign(NewDesign newDesign)
        {
            var newDesignWithSameEmail = _context.NewDesign_1.FirstOrDefault(m => m.PersonEmail.ToLower() == newDesign.PersonEmail.ToLower());

            
                _context.NewDesign_1.Add(newDesign);
                await _context.SaveChangesAsync();


                /*await _mailService.SendEmailAsync(customer.CustomerEmail, "Confirm your email", $"<h1>Thank You for registering in Lanka Furnitures</h1>" +
                   $"<p>Please confirm your email by <a>Clicking here</a></p>");*/
                var message = new MimeMessage();
                message.From.Add(new MailboxAddress("LANKA FURNITURE MAKERS", "lankafurniture123@gmail.com"));
                message.To.Add(new MailboxAddress(newDesign.PersonName, newDesign.PersonEmail));
                message.Subject = "New Design Uploading Successful";
                message.Body = new TextPart("plain")
                {
                    Text = ("Thank you for using LANKA FURNITURE MAKERS to purchase a New Furniture Design order. Your order is successfully completed and received to the sellers."+
                            "                                              " +
                            " Your New Design Code : "+newDesign.NewDesignCode)
                };
            
                using (var client = new SmtpClient())
                {
                    client.Connect("smtp.gmail.com", 587, false);
                    client.Authenticate("lankafurniture123@gmail.com", "Lanka@123");

                    client.Send(message);

                    client.Disconnect(true);
                }

            

           
          

            return CreatedAtAction("GetNewDesign", new { id = newDesign.ItemID }, newDesign);
        }

        // DELETE: api/NewDesigns/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<NewDesign>> DeleteNewDesign(int id)
        {
            var newDesign = await _context.NewDesign_1.FindAsync(id);
            if (newDesign == null)
            {
                return NotFound();
            }

            _context.NewDesign_1.Remove(newDesign);
            await _context.SaveChangesAsync();

            return newDesign;
        }

        private bool NewDesignExists(int id)
        {
            return _context.NewDesign_1.Any(e => e.ItemID == id);
        }
    }
}
