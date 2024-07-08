namespace MelodyWaveAPI1._0.Models
{
    public class Comment
    {
        public int Id { get; set; }
        public int MusicId { get; set; }
        public Music Music { get; set; }
        public int UserId { get; set; }
        public User User { get; set; }
        public string Text { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    }


}
