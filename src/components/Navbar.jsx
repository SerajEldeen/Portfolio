import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { menu, close } from "../assets";
import { useState } from "react";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <nav
        className={`
        ${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary
        `}
      >
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
          <Link
            to={"/"}
            className="flex items-center gap-2"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            <p className="text-white text-[20px] font-bold  cursor-pointer">
              <span className="text-sky-600 text-[35px] font-extrabold tracking-wide">
                S
              </span>
              eraj Eldeen
            </p>
          </Link>

          <ul className=" list-none hidden sm:flex flex-row gap-10">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={` text-secondary hover:text-white text-[18px] cursor-pointer font-medium  `}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
          <div className="sm:hidden flex felx-1 items-center justify-end ">
            <img
              className="cursor-pointer hover:opacity-70 w-[28px] h-[28px] object-contain"
              src={!toggle ? menu : close}
              alt="menu"
              onClick={() => setToggle(!toggle)}
            />
            {toggle && (
              <>
                <div className="relative">
                  <ul className="list-none flex flex-col absolute right-10 top-2 z-10 bg-secondary rounded-xl mx-4 p-4 shadow-lg transition-transform transform hover:scale-105 cursor-pointer">
                    {navLinks.map((nav) => (
                      <li
                        key={nav.id}
                        className="text-white hover:text-cyan-200 text-[18px] font-medium hover:translate-x-3 hover:scale-110 hover:delay-200 ease-in-out transition-all"
                        onClick={() => {
                          setToggle(!toggle);
                        }}
                      >
                        <a href={`#${nav.id}`} className="relative">
                          {nav.title}
                          <span className="absolute bottom-0 left-0 w-full h-1 bg-cyan-400 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
