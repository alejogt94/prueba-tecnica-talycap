using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using backend_clima.Data;
using backend_clima.Models;

namespace backend_clima.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CieloController : ControllerBase
    {
        private readonly backend_climaContext _context;

        public CieloController(backend_climaContext context)
        {
            _context = context;
        }

        // GET: api/Cielo
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Cielo>>> GetCielo()
        {
            return await _context.Cielo.ToListAsync();
        }

        // GET: api/Cielo/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Cielo>> GetCielo(int id)
        {
            var cielo = await _context.Cielo.FindAsync(id);

            if (cielo == null)
            {
                return NotFound();
            }

            return cielo;
        }

        // PUT: api/Cielo/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCielo(int id, Cielo cielo)
        {
            if (id != cielo.Id)
            {
                return BadRequest();
            }

            _context.Entry(cielo).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CieloExists(id))
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

        // POST: api/Cielo
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Cielo>> PostCielo(Cielo cielo)
        {
            _context.Cielo.Add(cielo);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCielo", new { id = cielo.Id }, cielo);
        }

        // DELETE: api/Cielo/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCielo(int id)
        {
            var cielo = await _context.Cielo.FindAsync(id);
            if (cielo == null)
            {
                return NotFound();
            }

            _context.Cielo.Remove(cielo);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool CieloExists(int id)
        {
            return _context.Cielo.Any(e => e.Id == id);
        }
    }
}
