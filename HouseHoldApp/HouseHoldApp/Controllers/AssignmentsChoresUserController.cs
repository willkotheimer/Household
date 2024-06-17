using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration; // Add this namespace for IConfiguration
using HouseHoldApp.DataAccess;
using HouseHoldApp.Models;

namespace HouseHoldApp.Controllers
{
    [Route("api/AssignmentsChoresUser")]
    [ApiController]
    public class AssignmentsChoresUserController : ControllerBase
    {
        private readonly AssignmentsChoresUserRepository _repo;

        public AssignmentsChoresUserController(IConfiguration configuration)
        {
            string connectionString = configuration.GetConnectionString("DefaultConnection");
            _repo = new AssignmentsChoresUserRepository(connectionString);
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
