using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using MelodyWaveAPI1._0.DTOs;
using MelodyWaveAPI1._0.Models;
using MelodyWaveAPI1._0.Services;

namespace MelodyWaveAPI.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/[controller]")]
 
    public class UsersController : ControllerBase
    {
        private readonly MelodyWaveContext _context;
        private readonly JwtSettings _jwtSettings;
        private readonly IUserService _userService;

        public UsersController(MelodyWaveContext context, IOptions<JwtSettings> jwtSettings, IUserService userService)
        {
            _context = context;
            _jwtSettings = jwtSettings.Value;
            _userService = userService;
        }

        [HttpPost("register")]
        [AllowAnonymous]
        public async Task<IActionResult> Register(UserRegistrationDto registrationDto)
        {
            if (await _context.Users.AnyAsync(u => u.Email == registrationDto.Email))
            {
                return BadRequest("Email is already in use.");
            }

            var user = new User
            {
                Username = registrationDto.Username,
                Name = registrationDto.Name,
                Email = registrationDto.Email,
                Phone = registrationDto.Phone,
                PasswordHash = BCrypt.Net.BCrypt.HashPassword(registrationDto.Password)
            };

            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            return Ok(new { Message = "Registration successful." });
        }

        [HttpGet("{id}")]
        public ActionResult<User> GetUserById(int id)
        {
            var user = _userService.GetUserById(id);
            if (user == null)
            {
                return NotFound();
            }
            return Ok(user);
        }

        [HttpPost("login")]
        public ActionResult<string> Login(UserLoginDto loginDto)
        {
            var token = _userService.Login(loginDto);
            if (token == null)
            {
                return Unauthorized("Invalid email or password.");
            }
            return Ok(token);
        }



        [HttpGet("all")]
        [Authorize]
        public ActionResult<IEnumerable<User>> GetAllUsers()
        {
            var users = _userService.GetAllUsers();
            return Ok(users);
        }


        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateUser(int id, User updatedUser)
        {
            if (id != updatedUser.Id)
            {
                return BadRequest();
            }

            _context.Entry(updatedUser).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        private bool UserExists(int id)
        {
            return _context.Users.Any(e => e.Id == id);
        }


    }
}
