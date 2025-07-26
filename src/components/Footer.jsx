// components/Footer.tsx
import {
  Music,
  Search,
  Library,
  Twitter,
  Instagram,
  DiscAlbum,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-8 px-4 mt-auto">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left - Logo and Tagline */}
        <div className="flex items-center gap-3">
          <DiscAlbum className="text-green-500" size={28} />
          <span className="text-lg font-semibold text-white">MelodyWave</span>
        </div>

        {/* Center - Nav Links */}
        <div className="flex items-center gap-6 text-sm">
          <a href="#" className="flex items-center gap-1 hover:text-green-500">
            <Music size={16} /> Home
          </a>
          <a href="#" className="flex items-center gap-1 hover:text-green-500">
            <Search size={16} /> Search
          </a>
          <a href="#" className="flex items-center gap-1 hover:text-green-500">
            <Library size={16} /> Explore Music
          </a>
        </div>

        <div className="flex space-x-4">
          <a href="#" className="hover:text-green-500">
            <Twitter size={20} />
          </a>
          <a href="#" className="hover:text-green-500">
            <Instagram size={20} />
          </a>
        </div>
      </div>

      <div className="mt-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} StreamVibe. All rights reserved.
      </div>
    </footer>
  );
}
