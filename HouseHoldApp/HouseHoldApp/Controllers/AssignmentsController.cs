﻿using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using HouseHoldApp.DataAccess;
using HouseHoldApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HouseHoldApp.Controllers
{
    [Route("api/Assignments")]
    [ApiController]
    public class AssignmentsController : ControllerBase
        {
        AssignmentsRepository _repo;
             public AssignmentsController()
            {
            _repo = new AssignmentsRepository();
            }

            [HttpGet]
            public IActionResult GetAllAssignments()
            {
                return Ok(_repo.GetAllAssignments());
            }

            [HttpGet("user/{userId}")]
            public IActionResult GetAssignmentsOfUser(int userId)
            {
                var assignmentList = _repo.GetAllAssignmentsOfUser(userId);

                if (assignmentList == null)
                {
                    return NotFound("This user does not exist");
                }

                return Ok(assignmentList);
            }


            [HttpGet("{id}")]
            public IActionResult GetAssignmentById(int id)
            {
                var assignment = _repo.GetAssignmentById(id);

                if (assignment == null)
                {
                    return NotFound("This assignment does not exist");
                }
                return Ok(assignment);
            }

        [HttpPost]
        public IActionResult AddAnAssignment(Assignments assignment)
        {
            _repo.AddAnAssignment(assignment);
            return Created($"api/Assignments/{assignment.Id}", assignment);
        }

        [HttpPatch]
        public IActionResult UpdateAssignment(Assignments assignment)
        {
            _repo.UpdateAssignment(assignment);
            return NoContent();
        }



    }
}

