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
        public IActionResult GetAssignmentChoresUserByFirebaseKey(string id)
        {
            var assignmentList = _repo.GetAssignmentChoresUserByFirebaseKey(id);

            if (assignmentList == null)
            {
                return NotFound("This user does not exist");
            }

            return Ok(assignmentList);
        }

    }
}
