using Microsoft.AspNetCore.Mvc;
using HouseHoldApp.DataAccess;
using HouseHoldApp.Models;

namespace HouseHoldApp.Controllers
{
    [Route("api/AssignmentsChores")]
    [ApiController]
    public class AssignmentsChoresController : ControllerBase
    {
        AssignmentsChoresRepository _repo;
        public AssignmentsChoresController()
        {
            _repo = new AssignmentsChoresRepository();
        }
        [HttpGet("household/{id}")]
        public IActionResult getAssignmentsByHouseHoldId(int id)
        {
            var assignmentList = _repo.GetAssignmentChoresByHouseholdId(id);

            if (assignmentList == null)
            {
                return NotFound("This user does not exist");
            }

            return Ok(assignmentList);
        }

    }
}
