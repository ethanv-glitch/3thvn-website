import {
  FaInstagram,
  FaYoutube,
  FaSpotify,
  FaApple,
  FaAmazon,
  FaDeezer,
} from "react-icons/fa";

import { SiTidal, SiGmail } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 py-20 border-t border-zinc-800">

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">

        {/* MUSIC */}
        <div>
          <h3 className="font-bold mb-4">MUSIC</h3>
          <ul className="space-y-2 opacity-70">
            <li>All Music</li>
            <li>Albums</li>
            <li>Singles</li>
          </ul>
        </div>

        {/* SOCIALS */}
        <div>
          <h3 className="font-bold mb-6">SOCIALS</h3>

        <div className="grid grid-cols-3 gap-6 w-fit text-2xl">

        <FaInstagram className="hover:text-red-400 transition cursor-pointer"/>
        <FaYoutube className="hover:text-red-400 transition cursor-pointer"/>
        <SiGmail className="hover:text-red-400 transition cursor-pointer"/>

        <FaSpotify className="hover:text-red-400 transition cursor-pointer"/>
        <FaApple className="hover:text-red-400 transition cursor-pointer"/>
        <FaAmazon className="hover:text-red-400 transition cursor-pointer"/>

        <SiTidal className="hover:text-red-400 transition cursor-pointer"/>
        <FaDeezer className="hover:text-red-400 transition cursor-pointer"/>

        </div> 
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="font-bold mb-4">CONTACT</h3>
          <ul className="space-y-2 opacity-70">
            <li>Management</li>
            <li>Bookings</li>
            <li>Press</li>
          </ul>
        </div>

      </div>

      {/* Bottom */}
      <div className="max-w-7xl mx-auto mt-16 flex flex-col md:flex-row justify-between items-center text-sm opacity-50">

        <p>© 2026 3THVN</p>

        <div className="flex gap-6 mt-4 md:mt-0">
          <span>Terms</span>
          <span>Privacy</span>
          <span>Cookies</span>
        </div>

      </div>

    </footer>
  );
}