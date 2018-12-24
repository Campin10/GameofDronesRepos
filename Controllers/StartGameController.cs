using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Gameofdrones.Models;
namespace Gameofdrones.Controllers
{
    [Route("api/[controller]")]
    public class StartGameController : Controller
    {
        private readonly GameofDronesDBContext _context;
        public StartGameController(GameofDronesDBContext context)
        {
            _context = context;
        }

        [HttpGet("[action]")]
        public IEnumerable<GameStatistics> ListStatistics() => _context.GameStatistics.ToList();
        [HttpPost("[action]")]
        public int Create(GameStatistics gameRecord)
        {
           _context.Add(gameRecord);
            _context.SaveChanges();
            return 1;        
        }    
     }
}
