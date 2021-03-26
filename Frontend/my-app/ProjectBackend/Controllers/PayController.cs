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
    public class PayController : ControllerBase
    {
        private readonly FurnituresDBContext _context;

        public PayController(FurnituresDBContext context)
        {
            _context = context;
        }

        // GET: api/Pay
        [HttpGet]
        public async Task<ActionResult<IEnumerable<PayModel>>> GetPay()
        {
            return await _context.Pay.ToListAsync();
        }

        // GET: api/Pay/5
        [HttpGet("{id}")]
        public async Task<ActionResult<PayModel>> GetPayModel(int id)
        {
            var payModel = await _context.Pay.FindAsync(id);

            if (payModel == null)
            {
                return NotFound();
            }

            return payModel;
        }

        // PUT: api/Pay/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPayModel(int id, PayModel payModel)
        {
            if (id != payModel.BillingID)
            {
                return BadRequest();
            }

            _context.Entry(payModel).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PayModelExists(id))
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

        // POST: api/Pay
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<PayModel>> PostPayModel(PayModel payModel)
        {
            _context.Pay.Add(payModel);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPayModel", new { id = payModel.BillingID }, payModel);
        }

        // DELETE: api/Pay/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<PayModel>> DeletePayModel(int id)
        {
            var payModel = await _context.Pay.FindAsync(id);
            if (payModel == null)
            {
                return NotFound();
            }

            _context.Pay.Remove(payModel);
            await _context.SaveChangesAsync();

            return payModel;
        }

        private bool PayModelExists(int id)
        {
            return _context.Pay.Any(e => e.BillingID == id);
        }
    }
}
