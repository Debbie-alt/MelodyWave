using MelodyWaveAPI1._0.DTOs;
using MelodyWaveAPI1._0.Models;

namespace MelodyWaveAPI1._0.Services
{
    public interface IUserService
    {
        User GetUserById(int id);
        IEnumerable<User> GetAllUsers();
        void Register(UserRegistrationDto registrationDto);
        User Login(UserLoginDto loginDto);
        void UpdateUser(int id, UserUpdateDto updateDto);
    }
}
