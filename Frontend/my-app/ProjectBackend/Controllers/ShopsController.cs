using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProjectBackEnd.Models;
using ProjectBackend.Models;
using ProjectBackend.Services;

namespace ProjectBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ShopsController : ControllerBase
    {
        private readonly FurnituresDBContext _context;
        private IMailService _mailService;
        public ShopsController(FurnituresDBContext context, IMailService mailService)
        {
            _context = context;
            _mailService = mailService;
        }

        // GET: api/Shops
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Shops>>> GetShop()
        {
            return await _context.Shop.ToListAsync();
        }

        // GET: api/Shops/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Shops>> GetShops(int id)
        {
            var shops = await _context.Shop.FindAsync(id);

            if (shops == null)
            {
                return NotFound();
            }

            return shops;
        }


        [Route("name/{name}")]
        [HttpGet()]
        public List<Shops> GetShopList(string name)
        {

            try { return _context.Shop.Where(Shops => Shops.ShopName == name).ToList(); }
            catch (Exception error) { throw error; }
        
           
        }


       
            





        // PUT: api/Shops/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutShops(int id, Shops shops)
        {
            if (id != shops.ShopID)
            {
                return BadRequest();
            }

            _context.Entry(shops).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ShopsExists(id))
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

        // POST: api/Shops
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Shops>> PostShops(Shops shops)
        {
          

                _context.Shop.Add(shops);
                await _context.SaveChangesAsync();
                await _mailService.SendEmailAsync
                    (
                    shops.ShopEmail,
                    "Registration Successful", "<h1>Hey!, You are succesfully registered as seller in Lanka Furniture Makers!!!! </h1>" +
                    "<p>Your Login Email : " + shops.ShopEmail +
                    "<p>Your Password :" + shops.ShopTelNumber +
                     "<p>Date :" + DateTime.Now

                    );
                return CreatedAtAction("GetShops", new { id = shops.ShopID }, shops);
           
        }

        // DELETE: api/Shops/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Shops>> DeleteShops(int id)
        {
            var shops = await _context.Shop.FindAsync(id);
            if (shops == null)
            {
                return NotFound();
            }

            _context.Shop.Remove(shops);
            await _context.SaveChangesAsync();

            return shops;
        }

        private bool ShopsExists(int id)
        {
            return _context.Shop.Any(e => e.ShopID == id);
        }
    }
}
