using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ProjectBackEnd.Models;
using ProjectBackend.Models;
using MimeKit;
using MailKit.Net.Smtp;

namespace ProjectBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ShoplistsController : ControllerBase
    {

        private readonly FurnituresDBContext _context;

        public ShoplistsController(FurnituresDBContext context)
        {
            _context = context;
        }

        // GET: api/Admins
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Shoplist>>> GetShoplists()
        {
            return await _context.Shoplist.ToListAsync();
        }

        // GET: api/Admins/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Shoplist>> GetShoplist(int id)
        {
            var shoplist = await _context.Shoplist.FindAsync(id);

            if (shoplist == null)
            {
                return NotFound();
            }

            return shoplist;
        }

        // PUT: api/Admins/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutShoplist(int id, Shoplist shoplist)
        {
            if (id != shoplist.ShopId)
            {
                return BadRequest();
            }

            _context.Entry(shoplist).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ShoplistExists(id))
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

        // POST: api/Admins
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Shoplist>> PostShoplist(Shoplist shoplist)
        {
            _context.Shoplist.Add(shoplist);
            await _context.SaveChangesAsync();

            var message =new 

            return CreatedAtAction("GetShoplist", new { id = shoplist.ShopId }, shoplist);
        }

        // DELETE: api/Admins/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Shoplist>> DeleteShoplist(int id)
        {
            var shoplist = await _context.Shoplist.FindAsync(id);
            if (shoplist == null)
            {
                return NotFound();
            }

            _context.Shoplist.Remove(shoplist);
            await _context.SaveChangesAsync();

            return shoplist;
        }

        private bool ShoplistExists(int id)
        {
            return _context.Shoplist.Any(e => e.ShopId == id);
        }



    }
}
