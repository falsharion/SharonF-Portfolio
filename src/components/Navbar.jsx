import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { navLinks } from "../constants";
import { menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setActive(location.pathname);
  }, [location]);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleClick = (id) => {
    if (id === "projects") {
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => handleScroll("projects-section"), 500);
      } else {
        handleScroll("projects-section");
      }
    } else {
      setActive(`/${id}`);
    }
    setToggle(false);
  };

  return (
    <nav className="flex justify-center bg-primary items-center z-20">
      <HoverBorderGradient
        containerClassName="rounded-full"
        className="bg-black w-full text-white flex items-center"
      >
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
          <Link
            to="/"
            className="flex items-center gap-2"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <p className="text-white text-[18px] px-2 font-bold cursor-pointer flex">
              Falomo Sharon &nbsp;
            </p>
          </Link>

          {/* Desktop Nav */}
          <ul className="list-none hidden sm:flex flex-row gap-10">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === `/${link.desktop}`
                    ? "text-white"
                    : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => handleClick(link.id)}
              >
                {link.id === "projects" ? (
                  <span>{link.title}</span>
                ) : (
                  <Link to={link.desktop}>{link.title}</Link>
                )}
              </li>
            ))}
          </ul>
          <div className="sm:hidden flex flex-1 justify-end items-center">
            <img
              src={menu}
              alt="menu"
              className="w-[28px] h-[28px] object-contain cursor-pointer"
              onClick={() => setToggle(true)}
            />
            {toggle && (
              <div
                className="fixed inset-0 bg-black/50 z-10"
                onClick={() => setToggle(false)}
              />
            )}
            <div
              className={`fixed top-0 right-0 w-1/2 h-full bg-black p-6 z-20 shadow-lg transition-all duration-500 ${
                toggle ? "translate-x-0" : "translate-x-full"
              }`}
            >
              <span
                className="absolute top-4 right-4 text-white text-2xl cursor-pointer"
                onClick={() => setToggle(false)}
              >
                ✕
              </span>

              <ul className="list-none flex flex-col gap-6 mt-10">
                {navLinks.map((link) => (
                  <li key={link.id}>
                      <div
                        className={`font-medium text-[18px] hover:text-violet-200 cursor-pointer ${
                          active === `/${link.desktop}`
                            ? "text-white"
                            : "text-gray-400"
                        }`}
                        onClick={() => handleClick(link.id)}
                      >
                        {link.id === "projects" ? (
                          <span>{link.title}</span>
                        ) : (
                          <Link to={link.desktop}>{link.title}</Link>
                        )}
                      </div>
                   
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </HoverBorderGradient>
    </nav>
  );
};

export default Navbar;