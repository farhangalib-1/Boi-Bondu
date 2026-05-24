import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-black text-white mt-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h2 className="text-2xl font-bold mb-4">Boi Bondhu</h2>
          <p className="text-sm text-gray-400 leading-6">
            Discover books, share knowledge, and connect with readers around
            the world.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3 text-gray-400">
            <li>
              <a href="#" className="hover:text-white transition">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Browse Books
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Membership
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <div className="space-y-3 text-gray-400 text-sm">
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-white" />
              <p>support@bookverse.com</p>
            </div>
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-white" />
              <p>+880 1234-567890</p>
            </div>
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-white" />
              <p>Dhaka, Bangladesh</p>
            </div>
          </div>
          <div className="flex gap-4 mt-6">
            <a
              href="https://facebook.com"
              target="_blank"
              className="bg-white/10 hover:bg-white hover:text-black transition p-3 rounded-2xl text-lg"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              className="bg-white/10 hover:bg-white hover:text-black transition p-3 rounded-2xl text-lg"
            >
              <FaInstagram />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              className="bg-white/10 hover:bg-white hover:text-black transition p-3 rounded-2xl text-lg"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10 py-5 text-center text-sm text-gray-500">
        © 2026 Boi Bondhu. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;