using MelodyWaveAPI.Helpers;
using Microsoft.Extensions.Configuration;
using MelodyWaveAPI1._0.DTOs;
using MelodyWaveAPI1._0.Models;
using MelodyWaveAPI1._0.Services;

namespace MelodyWaveAPI1._0.Services
{
    public class UserService : IUserService
    {
        private readonly MelodyWaveContext _context;
        private readonly JwtHelper _jwtHelper;

        public UserService(MelodyWaveContext context, JwtHelper jwtHelper)
        {
            _context = context;
            _jwtHelper = jwtHelper;
        }

        public User GetUserById(int id)
        {
            return _context.Users.Find(id);
        }

        public IEnumerable<User> GetAllUsers()
        {
            return _context.Users.ToList();
        }

        public void Register(UserRegistrationDto registrationDto)
        {
            var user = new User
            {
                Email = registrationDto.Email,
                PasswordHash = BCrypt.Net.BCrypt.HashPassword(registrationDto.Password)
            };
            _context.Users.Add(user);
            _context.SaveChanges();
        }

        public string Login(UserLoginDto loginDto)
        {
            var user = _context.Users.SingleOrDefault(u => u.Email == loginDto.Email);
            if (user != null && BCrypt.Net.BCrypt.Verify(loginDto.Password, user.PasswordHash))
            {
                return _jwtHelper.GenerateToken(user);
            }
            return null;
        }

        public void UpdateUser(int id, UserUpdateDto updateDto)
        {
            var user = _context.Users.Find(id);
            if (user != null)
            {
                user.Email = updateDto.Email;
                _context.SaveChanges();
            }
        }

        User IUserService.Login(UserLoginDto loginDto)
        {
            throw new NotImplementedException();
        }
    }
}
