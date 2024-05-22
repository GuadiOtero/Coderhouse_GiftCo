import { useState, useEffect, useContext } from "react";
import { Context } from "../context/Context";
import { Link } from "react-router-dom";
import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

function Footer() {
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

  return (
    <footer className="bg-primary text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-4">Productos</h3>
            <div className="grid grid-cols-3 gap-4 text-center">
              {categories.map((category) => (
                <Link
                  key={category}
                  to={`/productos/${category}`}
                  className="text-sm hover:text-gray-300"
                >
                  {category}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <p className="text-sm md:text-[16px] ">Teléfono: (011) 111111111</p>
            <p className="text-sm md:text-[16px]">Email: info@info.com</p>
            <p className="text-sm md:text-[16px]">Buenos Aires, Argentina.</p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-4">Redes</h3>
            <div className="flex justify-center space-x-4">
              <a
                href="https://www.linkedin.com/in/g-otero/"
                className="hover:text-gray-300"
              >
                <FaLinkedin className="size-8" />
              </a>
              <a href="#" className="hover:text-gray-300">
                <FaFacebook className="size-8" />
              </a>
              <a href="#" className="hover:text-gray-300">
                <FaInstagram className="size-8" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
