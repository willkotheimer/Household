using Microsoft.AspNetCore.Mvc;
using HouseHoldApp.DataAccess;
using HouseHoldApp.Models;

namespace HouseHoldApp.Controllers
{
    [Route("api/Images")]
    [ApiController]
    public class ImagesController : ControllerBase
    {
        ImagesRepository _repo;

        public ImagesController()
        {
            _repo = new ImagesRepository();
        }

        [HttpGet]
        public IActionResult GetAllImages()
        {
            return Ok(_repo.GetAllImages());
        }

        [HttpGet("{id}")]
        public IActionResult GetImagesByChoreId(int id)
        {
            var images = _repo.GetImageByChoreId(id);
            if (images == null)
            {
                return NotFound("No images exists for this chore");
            }
            return Ok(images);
        }

        [HttpGet("oneperchore")]
        public IActionResult GetOneImagePerChoreId() {
            var image = _repo.GetOneImagePerChoreId();
            if (image == null) {
                return NotFound("No images exists for this chore");
            }
            return Ok(image);
        }

        [HttpPost]
        public IActionResult AddAnImage(Images image)
        {
            _repo.AddAnImage(image);
            return Created($"api/Images/{image.Id}", image);
        }

        [HttpPatch("{id}")]
        public IActionResult InactivateAnImage(int id)
        {
            _repo.InactivateImage(id);
            return NoContent();
        }
    }
}
