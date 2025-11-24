// app/utils/youtube.ts

// Ambil thumbnail YouTube dari URL (short youtu.be / watch?v / embed)
export function getYoutubeThumbnail(url: string) {
  // Ambil video ID (11 karakter)
  const regex =
    /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/))([A-Za-z0-9_-]{11})/;

  const match = url.match(regex);

  if (!match) {
    // fallback kalau bukan URL YouTube
    return '';
  }

  const videoId = match[1];

  // Kamu bisa ganti ke maxresdefault.jpg kalau videonya punya thumbnail 4K
  return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
}
