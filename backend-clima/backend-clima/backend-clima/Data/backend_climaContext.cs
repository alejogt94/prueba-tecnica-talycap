using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using backend_clima.Models;

namespace backend_clima.Data
{
    public class backend_climaContext : DbContext
    {
        public backend_climaContext (DbContextOptions<backend_climaContext> options)
            : base(options)
        {
        }

        public DbSet<backend_clima.Models.Ciudad> Ciudad { get; set; }

        public DbSet<backend_clima.Models.Cielo> Cielo { get; set; }

        public DbSet<backend_clima.Models.Clima> Clima { get; set; }
    }
}
