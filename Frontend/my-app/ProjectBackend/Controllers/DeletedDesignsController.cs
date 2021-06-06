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
    public class DeletedDesignsController : ControllerBase
    {
        private readonly FurnituresDBContext _context;

        public DeletedDesignsController(FurnituresDBContext context)
        {
            _context = context;
        }

        // GET: api/DeletedDesigns
        [HttpGet]
        public async Task<ActionResult<IEnumerable<DeletedDesigns>>> GetDeletedNewDesigns()
        {
            return await _context.DeletedNewDesigns.ToListAsync();
        }

        // GET: api/DeletedDesigns/5
        [HttpGet("{id}")]
        public async Task<ActionResult<DeletedDesigns>> GetDeletedDesigns(int id)
        {
            var deletedDesigns = await _context.DeletedNewDesigns.FindAsync(id);

            if (deletedDesigns == null)
            {
                return NotFound();
            }

            return deletedDesigns;
        }

        // PUT: api/DeletedDesigns/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDeletedDesigns(int id, DeletedDesigns deletedDesigns)
        {
            if (id != deletedDesigns.DeletedID)
            {
                return BadRequest();
            }

            _context.Entry(deletedDesigns).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DeletedDesignsExists(id))
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

        // POST: api/DeletedDesigns
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<DeletedDesigns>> PostDeletedDesigns(DeletedDesigns deletedDesigns)
        {
            _context.DeletedNewDesigns.Add(deletedDesigns);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetDeletedDesigns", new { id = deletedDesigns.Input_Design_Code }, deletedDesigns);
        }

        // DELETE: api/DeletedDesigns/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<DeletedDesigns>> DeleteDeletedDesigns(int id)
        {
            var deletedDesigns = await _context.DeletedNewDesigns.FindAsync(id);
            if (deletedDesigns == null)
            {
                return NotFound();
            }

            _context.DeletedNewDesigns.Remove(deletedDesigns);
            await _context.SaveChangesAsync();

            return deletedDesigns;
        }

        private bool DeletedDesignsExists(int id)
        {
            return _context.DeletedNewDesigns.Any(e => e.DeletedID == id);
        }
    }
}
