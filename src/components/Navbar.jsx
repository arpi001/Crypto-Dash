import { Link } from "react-router-dom"
// import Logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-4 bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white shadow-lg">
      <div className="flex items-center">
        {/* Uncomment and add your logo here */}
        {/* <img src={Logo} alt="Crypto-Dash Logo" className="h-10 md:h-14" /> */}
        <h1 className="text-2xl md:text-3xl font-bold ml-2 transition-transform transform hover:scale-105">
          <Link to="/" className="flex items-center">
            <span className="text-orange-500">Crypto</span>
            <span className="text-yellow-500">-Dash.</span>
          </Link>
        </h1>
      </div>
      <nav className="mt-4 md:mt-0 flex justify-center w-full md:w-auto">
        <ul className="flex flex-wrap gap-6 md:gap-10 font-semibold text-base md:text-lg">
          <li className="hover:text-gray-300 transition-colors duration-300">
            <Link to="/crypto" className="hover:underline">
              Crypto
            </Link>
          </li>
          <li className="hover:text-gray-300 transition-colors duration-300">
            <Link to="/features" className="hover:underline">
              Features
            </Link>
          </li>
          <li className="hover:text-gray-300 transition-colors duration-300">
            <Link to="/blogs" className="hover:underline">
              Blog
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
