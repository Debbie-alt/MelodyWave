namespace MelodyWaveAPI1._0.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public string Email { get; set; }
        public string Name { get; set; }
        public string Phone { get; set; }
        public string PasswordHash { get; set; }
        public ICollection<Music> Music { get; set; }
        public ICollection<Comment> Comments { get; set; }
    }

}
