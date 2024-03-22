import { appleImg, bagImg, searchImg } from "../utils";
import { navLists } from "../constants";

const Navbar = () => {
  return (
    <header className="px-10 sm:px-10 my-4">
      <nav className="flex justify-between items-center">
        {/* Logo */}
        <img src={appleImg} alt="logo" width={18} height={18} />

        {/* Links */}
        <ul className="flex gap-4 justify-center flex-1 max-sm:hidden">
          {navLists.map((nav, i) => (
            <li
              key={i}
              className="text-gray hover:text-white transition-all cursor-pointer text-sm px-5 "
            >
              {nav}
            </li>
          ))}
        </ul>

        {/* Buttons */}
        <div className="flex items-center gap-4 max-sm:flex-1 max-sm:justify-end">
          <img
            src={searchImg}
            alt="search"
            width={18}
            height={18}
            className="cursor-pointer"
          />
          <img
            src={bagImg}
            alt="cart"
            width={18}
            height={18}
            className="cursor-pointer"
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
