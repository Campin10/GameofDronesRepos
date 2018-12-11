using System.Collections.Generic;  
using System.Linq;  
namespace Gameofdrones.Models  
{  
    public class GameofDronesAccessLayer  
    {  
        GameofDronesDBContext db = new GameofDronesDBContext();  
        public List<GameStatistics> GetAllStatistics()  
        {  
            try  
            {  
                return db.GameStatistics.ToList();  
            }  
            catch  
            {  
                throw;  
            }  
        }  
        public int AddRecordGame(GameStatistics gameRecord)  
        {  
            try  
            {  
                db.GameStatistics.Add(gameRecord);  
                db.SaveChanges();  
                return 1;  
            }  
            catch  
            {  
                throw;  
            }  
        }  
    }
}