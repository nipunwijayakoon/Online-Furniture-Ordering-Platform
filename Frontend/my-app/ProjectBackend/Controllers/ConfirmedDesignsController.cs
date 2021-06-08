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
    public class ConfirmedDesignsController : ControllerBase
    {
        private readonly FurnituresDBContext _context;

        public ConfirmedDesignsController(FurnituresDBContext context)
        {
            _context = context;
        }

        // GET: api/ConfirmedDesigns
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ConfirmedDesigns>>> GetConfirmedNewDesigns()
        {
            return await _context.ConfirmedNewDesigns.ToListAsync();
        }

        // GET: api/ConfirmedDesigns/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ConfirmedDesigns>> GetConfirmedDesigns(int id)
        {
            var confirmedDesigns = await _context.ConfirmedNewDesigns.FindAsync(id);

            if (confirmedDesigns == null)
            {
                return NotFound();
            }

            return confirmedDesigns;
        }

        // PUT: api/ConfirmedDesigns/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutConfirmedDesigns(int id, ConfirmedDesigns confirmedDesigns)
        {
            if (id != confirmedDesigns.ConfirmedID)
            {
                return BadRequest();
            }

            _context.Entry(confirmedDesigns).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ConfirmedDesignsExists(id))
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

        // POST: api/ConfirmedDesigns
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<ConfirmedDesigns>> PostConfirmedDesigns(ConfirmedDesigns confirmedDesigns)
        {
            _context.ConfirmedNewDesigns.Add(confirmedDesigns);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetConfirmedDesigns", new { id = confirmedDesigns.Input_Design_Code }, confirmedDesigns);
        }

        // DELETE: api/ConfirmedDesigns/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<ConfirmedDesigns>> DeleteConfirmedDesigns(int id)
        {
            var confirmedDesigns = await _context.ConfirmedNewDesigns.FindAsync(id);
            if (confirmedDesigns == null)
            {
                return NotFound();
            }

            _context.ConfirmedNewDesigns.Remove(confirmedDesigns);
            await _context.SaveChangesAsync();

            return confirmedDesigns;
        }

        private bool ConfirmedDesignsExists(int id)
        {
            return _context.ConfirmedNewDesigns.Any(e => e.ConfirmedID == id);
        }
    }
}
