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
        GameofDronesAccessLayer objGame = new GameofDronesAccessLayer();
        [HttpGet("[action]")]
        public IEnumerable<GameStatistics> ListStatistics()
        {
            return objGame.GetAllStatistics();
        }
        [HttpPost("[action]")]
        //[Route("api/StartGame/Create")]
        public int Create(GameStatistics gameRecord)
        {
           return objGame.AddRecordGame(gameRecord);            
        }    
     }


}
