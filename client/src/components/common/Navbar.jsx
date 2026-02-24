import React, { useRef, useState } from "react";
import ganesh from "../../assets/Ganesh-Devadiga (1).png";
import { Link, NavLink } from "react-router-dom";
import { CgMoreR } from "react-icons/cg";
import useClickOutside from "../../CustomHooks/UseClickOutside";


const Navbar = () => {

const [dropDown , setDropDown] = useState(false)
const [navOpen , setNavOpen] = useState(false)

const dropRef = useRef(null)
const navRef = useRef(null)

  const navbarSections = [
    { name: "Note" ,path:'/'},
    { name: "Create note",path:'/create-note' },
    { name: "Trash",path:'/trash' },
    { name: "search" ,path:'/search'},
  ];
  const Infos = [
    { name: "Profile", path: "/profile" },
    { name: "Setting", path: "/setting" },
    { name: "Logout", path: "/login" },
  ];

  useClickOutside(dropRef , ()=>{
    setDropDown(false)
  });
  useClickOutside(navRef , ()=>{
    setNavOpen(false)
  });
  

  return (
    <nav className="fixed z-50 top-0 w-full flex justify-between items-center bg-white/30 backdrop-blur-md px-4 py-2">
      <Link to="/">Mega App</Link>

      {/* Nav sections for Large screens */}
      <div className="hidden md:flex justify-between items-center gap-x-10 ">
        {navbarSections.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className={({ isActive }) =>
              isActive
                ? "bg-green-400/90 px-4 py-1 rounded-2xl outline outline-blue-700 outline-offset-4"
                : "hover:bg-blue-400/50 px-4 py-1 rounded-2xl hover:outline outline-blue-700 outline-offset-4"
            }
          >
            {item.name}
          </NavLink>
        ))}
      </div>

      {/* Nav sections for Mobile screens */}
      <div
        ref={navRef}
        className={`absolute top-12 p-4 right-0 z-20 flex flex-col items-start gap-y-4 px-4 bg-gray-200 h-screen w-[12rem] transform transition-all duration-300 ease-in-out
 ${navOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {navbarSections.map((item, index) => (
          <NavLink to={item.path} key={index} onClick={() => setNavOpen(false)}>
            {item.name}
          </NavLink>
        ))}
      </div>

      <div className="relative flex justify-between items-center gap-10">
        {/* Nav sections for Mobile screens */}
        <div className="md:hidden ">
          <CgMoreR
            onClick={() => setNavOpen(!navOpen)}
            size={40}
            className="cursor-pointer"
            aria-label="Toggle menu"
          />
        </div>

        {/* Profile */}
        <img
          onClick={() => setDropDown(!dropDown)}
          src={ganesh}
          alt=""
          className="w-10 h-10 rounded-4xl"
        />

        {/* Profile dropdown */}
        {dropDown && (
          <div
            ref={dropRef}
            className="absolute z-20 -right-3 top-10 flex flex-col bg-gray-200 rounded   border mt-2 "
          >
            {Infos.map((item, index) => (
              <NavLink
                onClick={() => setDropDown(false)}
                key={index}
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-600 font-semibold p-2 rounded px-4"
                    : "hover:bg-white p-2 rounded px-4"
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
