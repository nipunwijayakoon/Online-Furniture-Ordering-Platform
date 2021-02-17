using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
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
            _context.NewDesign_1.Add(newDesign);
            await _context.SaveChangesAsync();

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
