using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProjectBackEnd.Models;
using ProjectBackend.Models;
using System.IO;
using Microsoft.AspNetCore.Hosting;

namespace ProjectBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmploController : ControllerBase
    {
        private readonly FurnituresDBContext _context;
        private readonly IWebHostEnvironment _hostEnvironment;

        public EmploController(FurnituresDBContext context, IWebHostEnvironment hostEnvironment)
        {
            _context = context;
            this._hostEnvironment = hostEnvironment;
        }

        // GET: api/Emplos
        [HttpGet]
        public async Task<ActionResult<IEnumerable<EmploModel>>> GetEmplos()
        {
            return await _context.Emplos
                .Select(x => new EmploModel()
                {
                    EmploID = x.EmploID,
                    //EmploName = x.EmploName,
                    NewDesignCode = x.NewDesignCode,
                    ImageName_ = x.ImageName_,
                    ImageSrc_ = String.Format("{0}://{1}{2}/Images/{3}", Request.Scheme, Request.Host, Request.PathBase, x.ImageName_)
                })
                .ToListAsync();
        }

        // GET: api/Emplos/5
        [HttpGet("{id}")]
        public async Task<ActionResult<EmploModel>> GetEmploModel(int id)
        {
            var emploModel = await _context.Emplos.FindAsync(id);

            if (emploModel == null)
            {
                return NotFound();
            }

            return emploModel;
        }

        // PUT: api/Emplos/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutEmploModel(int id, [FromForm] EmploModel emploModel)
        {
            if (id != emploModel.EmploID)
            {
                return BadRequest();
            }

            if (emploModel.ImageFile_ != null)
            {
                DeleteImage(emploModel.ImageName_);
                emploModel.ImageName_ = await SaveImage(emploModel.ImageFile_);
            }

            _context.Entry(emploModel).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EmploModelExists(id))
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

        // POST: api/Emplos
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<EmploModel>> PostEmploModel([FromForm] EmploModel emploModel)
        {
            emploModel.ImageName_ = await SaveImage(emploModel.ImageFile_);
            _context.Emplos.Add(emploModel);
            await _context.SaveChangesAsync();

            return StatusCode(201);
        }

        // DELETE: api/Emplos/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<EmploModel>> DeleteEmploModel(int id)
        {
            var emploModel = await _context.Emplos.FindAsync(id);
            if (emploModel == null)
            {
                return NotFound();
            }
            DeleteImage(emploModel.ImageName_);
            _context.Emplos.Remove(emploModel);
            await _context.SaveChangesAsync();

            return emploModel;
        }

        private bool EmploModelExists(int id)
        {
            return _context.Emplos.Any(e => e.EmploID == id);
        }

        [NonAction]
        public async Task<string> SaveImage(IFormFile imageFile01)
        {
            string imageName01 = new String(Path.GetFileNameWithoutExtension(imageFile01.FileName).Take(10).ToArray()).Replace(' ', '-');
            imageName01 = imageName01 + DateTime.Now.ToString("yymmssfff") + Path.GetExtension(imageFile01.FileName);
            var imagePath = Path.Combine(_hostEnvironment.ContentRootPath, "Images", imageName01);
            using (var fileStream = new FileStream(imagePath, FileMode.Create))
            {
                await imageFile01.CopyToAsync(fileStream);
            }
            return imageName01;
        }

        [NonAction]
        public void DeleteImage(string imageName01)
        {
            var imagePath = Path.Combine(_hostEnvironment.ContentRootPath, "Images", imageName01);
            if (System.IO.File.Exists(imagePath))
                System.IO.File.Delete(imagePath);
        }
    }
}
