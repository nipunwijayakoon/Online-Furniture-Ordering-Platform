using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProjectBackend.Models;
using ProjectBackEnd.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CartitemsController : ControllerBase
    {
        private readonly FurnituresDBContext _context;

        public CartitemsController(FurnituresDBContext context)
        {
            _context = context;
        }

        // GET: api/Cartitems
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Cartitems>>> GetCartitems()
        {
            return await _context.Cartitems.ToListAsync();
        }

        // GET: api/Cartitems/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Cartitems>> GetCartitems(int id)
        {
            var cartitem = await _context.Cartitems.FindAsync(id);

            if (cartitem == null)
            {
                return NotFound();
            }

            return cartitem;
        }


        // PUT: api/Cartitems/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCartitems(int id, Cartitems cartitems)
        {
            if (id != cartitems.ProductID)
            {
                return BadRequest();
            }

            _context.Entry(cartitems).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CartitemsExists(id))
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


        // POST: api/Cartitems
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Cartitems>> PostCartitems(Cartitems cartitem)
        {
            _context.Cartitems.Add(cartitem);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCartitems", new { id = cartitem.ProductID }, cartitem);
        }

        // DELETE: api/Admins/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Cartitems>> DeleteCartitems(int id)
        {
            var cartitem = await _context.Cartitems.FindAsync(id);
            if (cartitem == null)
            {
                return NotFound();
            }

            _context.Cartitems.Remove(cartitem);
            await _context.SaveChangesAsync();

            return cartitem;
        }


        private bool CartitemsExists(int id)
        {
            return _context.Cartitems.Any(e => e.ProductID == id);
        }
    }
}
