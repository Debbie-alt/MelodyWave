using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MelodyWaveAPI1._0.Models;
using System.Linq;
using System.Threading.Tasks;
using MelodyWaveAPI1._0.Models;
using System.Security.Claims;

[Route("api/music")]
[ApiController]
public class MusicController : ControllerBase
{
    private readonly MelodyWaveContext _context;

    public MusicController(MelodyWaveContext context)
    {
        _context = context;
    }

    [HttpPost("upload")]
    [Authorize]
    public async Task<IActionResult> UploadMusic([FromBody] Music music)
    {
        var userId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier)?.Value);
        music.UserId = userId;

        _context.Music.Add(music);
        await _context.SaveChangesAsync();
        return Ok(music);
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetMusicDetails(int id)
    {
        var music = await _context.Music.FindAsync(id);
        if (music == null)
            return NotFound();

        return Ok(music);
    }

    [HttpPut("{id}")]
    [Authorize]
    public async Task<IActionResult> UpdateMusicDetails(int id, [FromBody] Music updatedMusic)
    {
        if (id != updatedMusic.Id)
            return BadRequest();

        var music = await _context.Music.FindAsync(id);
        if (music == null)
            return NotFound();

        // Only the owner of the music can update it
        var userId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier)?.Value);
        if (music.UserId != userId)
            return Unauthorized();

        music.Title = updatedMusic.Title;
        music.Artist = updatedMusic.Artist;
        music.Album = updatedMusic.Album;
        // Update other fields as necessary

        _context.Entry(music).State = EntityState.Modified;
        await _context.SaveChangesAsync();

        return NoContent();
    }

    [HttpDelete("{id}")]
    [Authorize]
    public async Task<IActionResult> DeleteMusic(int id)
    {
        var music = await _context.Music.FindAsync(id);
        if (music == null)
            return NotFound();

        // Only the owner of the music can delete it
        var userId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier)?.Value);
        if (music.UserId != userId)
            return Unauthorized();

        _context.Music.Remove(music);
        await _context.SaveChangesAsync();

        return NoContent();
    }

    [HttpGet("stream/{id}")]
    public async Task<IActionResult> StreamMusic(int id)
    {
        var music = await _context.Music.FindAsync(id);
        if (music == null)
            return NotFound();

        var filePath = music.FilePath;
        var memory = new MemoryStream();
        using (var stream = new FileStream(filePath, FileMode.Open))
        {
            await stream.CopyToAsync(memory);
        }
        memory.Position = 0;

        return File(memory, "audio/mpeg", Path.GetFileName(filePath));
    }

    [HttpGet("search")]
    public async Task<IActionResult> SearchMusic([FromQuery] string query)
    {
        var music = await _context.Music
            .Where(m => m.Title.Contains(query) || m.Artist.Contains(query) || m.Album.Contains(query))
            .ToListAsync();

        return Ok(music);
    }

    [HttpGet("trending")]
    public async Task<IActionResult> GetTrendingMusic()
    {
        var trendingMusic = await _context.Music
            .OrderByDescending(m => m.Id) // Example of trending logic, should be replaced with real logic
            .Take(10)
            .ToListAsync();

        return Ok(trendingMusic);
    }

    [HttpPost("{id}/like")]
    [Authorize]
    public async Task<IActionResult> LikeMusic(int id)
    {
        var music = await _context.Music.FindAsync(id);
        if (music == null)
            return NotFound();

        var userId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier)?.Value);
        // Implement the like logic (e.g., add to a Likes table)

        return Ok();
    }

    [HttpPost("{id}/comment")]
    [Authorize]
    public async Task<IActionResult> CommentOnMusic(int id, [FromBody] CommentModel comment)
    {
        var music = await _context.Music.FindAsync(id);
        if (music == null)
            return NotFound();

        var userId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier)?.Value);
        // Implement the comment logic (e.g., add to a Comments table)

        return Ok();
    }

    [HttpGet("{id}/comments")]
    public async Task<IActionResult> GetComments(int id)
    {
        var comments = await _context.Comments
            .Where(c => c.MusicId == id)
            .ToListAsync();

        return Ok(comments);
    }
}

public class CommentModel
{
    public int UserId { get; set; }
    public string CommentText { get; set; }
}
