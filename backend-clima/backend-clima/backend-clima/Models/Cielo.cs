using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace backend_clima.Models
{
    public class Cielo
    {
        [Key]
        public int Id { get; set; }
        public string TipoCielo { get; set; }
    }
}
