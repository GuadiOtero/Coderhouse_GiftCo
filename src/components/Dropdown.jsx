import { Link } from "react-router-dom";
import { useState, useEffect, useRef, useContext } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { Context } from "../context/Context";

function Dropdown() {
  //Importamos products
  const { products } = useContext(Context);
  // Estado para guardar las categorías
  const [categories, setCategories] = useState([]);

  //Controlamos el llamado a la API
  useEffect(() => {
    const allCategories = [
      ...new Set(products.map((prod) => prod.category)),
      "Ver todo",
    ];
    setCategories(allCategories);
  }, [products]);

  // Manejamos la apertura y cierre del dropdown
  const [isOpen, setIsOpen] = useState(false);

  // Función para cambiar el valor de isOpen
  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  // Si el user clickea fuera del dropdown se cierra
  const dropdownRef = useRef();
  const productsRef = useRef();

  window.addEventListener("click", (e) => {
    if (e.target !== dropdownRef.current && e.target !== productsRef.current) {
      setIsOpen(false);
    }
  });

  return (
    <div className="flex flex-col">
      <button
        ref={productsRef}
        className="flex items-center gap-2"
        onClick={toggleDropdown}
      >
        Productos {isOpen ? <FaAngleUp /> : <FaAngleDown />}
      </button>
      {isOpen && (
        <div className="categories text-tertiary md:absolute mt-6 bg-white rounded">
          <ul className="flex flex-col  text-sm ">
            {categories.map((category) => (
              <li
                onClick={toggleDropdown}
                ref={dropdownRef}
                className="font-medium flex justify-center py-2  hover:text-primary "
                key={category}
              >
                <Link
                  to={`/productos/${category}`}
                  className="flex p-2 font-medium"
                >
                  {category}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
