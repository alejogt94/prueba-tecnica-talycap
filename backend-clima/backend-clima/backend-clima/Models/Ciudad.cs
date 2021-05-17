using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace backend_clima.Models
{
    public class Ciudad
    {
        [Key]
        public int CiudadID { get; set; }
        public string CiudadNombre { get; set; }
        public string PaisCodigo { get; set; }
        public string CiudadDistrito { get; set; }
        public int CiudadPoblacion { get; set; }
    }
}
