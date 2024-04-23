using Microsoft.AspNetCore.Mvc;
using HouseHoldApp.DataAccess;
using HouseHoldApp.Models;

namespace HouseHoldApp.Controllers
{
    [Route("api/AssignmentsChoresUser")]
    [ApiController]
    public class AssignmentsChoresUserController : ControllerBase
    {
        AssignmentsChoresUserRepository _repo;
        public AssignmentsChoresUserController()
        {
            _repo = new AssignmentsChoresUserRepository();
        }

        [HttpGet("household/user/{id}")]
        public IActionResult GetAssignmentChoresUserByFirebaseKey(int id)
        {
            var assignmentList = _repo.GetAssignmentChoresUserById(id);

            if (assignmentList == null)
            {
                return NotFound("This user does not exist");
            }

            return Ok(assignmentList);
        }

    }
}
