import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white py-6 px-4 text-center">
      <div className="flex flex-col items-center justify-center space-y-2">
        <p className="text-lg font-semibold">Designed and Managed by Data Science Club</p>
        <p className="text-sm">&copy; 2025 Data Science Club @ NKU. All rights reserved.</p>
        <div className="flex space-x-6 mt-2">
          <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaDiscord size={24} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaInstagram size={24} />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaYoutube size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}
