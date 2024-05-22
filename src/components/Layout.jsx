import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Logo from "../assets/Logo.png";
import CartWidget from "./CartWidget";
import Dropdown from "./Dropdown";
import { FaAlignJustify } from "react-icons/fa6";

function Layout() {
  // Manejamos la apertura y cierre del menú mobile
  const [isOpen, setIsOpen] = useState(false);

  // Función para cambiar el valor de isOpen
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  // Clase para el menú

  const menuClass = isOpen ? "top-[10%]" : "top-[-100%]";
  return (
    <>
      <nav className="bg-white text-tertiary">
        <div className=" mx-auto max-w-7xl flex justify-between lg:py-5 px-20 py-4">
          <div className="w-48 md:w-72 md:min-w-72">
            <Link to={"/"}>
              <img src={Logo} alt="" />
            </Link>
          </div>
          <div
            className={`${menuClass} md:static absolute bg-white min-h[60vh] left-0  w-full flex justify-center px-5 md:inline-flex md:pt-20 md:min-h-fit md:w-auto`}
          >
            <ul className=" flex flex-col gap-8 items-center text-[18px] md:flex-row md:gap-12 md:mr-16">
              <li className="flex px-4 py-2 rounded-md font-medium hover:text-underline  hover:text-primary transition-colors">
                <Link to={"/"}>Inicio</Link>
              </li>
              <li className="ml-4 flex px-4 py-2 rounded-md font-medium hover:text-underline hover:text-primary transition-colors">
                <Dropdown />
              </li>
              <li className="flex px-4 py-2 rounded-md font-medium hover:text-underline hover:text-primary transition-colors">
                <Link to={"contacto"}>Contacto</Link>
              </li>
            </ul>
          </div>
          <div className="flex items center gap-6 md:pt-20">
            <CartWidget/>
            <FaAlignJustify
              onClick={toggleMenu}
              className="size-8 cursor-pointer md:hidden"
            />
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Layout;
