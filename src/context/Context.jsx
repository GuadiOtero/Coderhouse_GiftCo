import { createContext } from "react";
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";

export const Context = createContext();

export const CartProvider = ({ children }) => {
  // Productos
  const [products, setProducts] = useState([]);

  // Fetch de productos
  useEffect(() => {
    const fetchProducts = async () => {
      const productsRef = collection(db, "productos");
      const querySnapshot = await getDocs(productsRef);
      const productsData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setProducts(productsData);
    };

    fetchProducts();
  }, []);

  //Carrito
  const [cart, setCart] = useState([]);

  //Controlamos el agregado de productos
  const handleAddProducts = (
    quantity,
    id,
    nameProduct,
    urlImage,
    price,
    stock
  ) => {
    const productAdded = { quantity, id, nameProduct, urlImage, price };
    const newCart = [...cart];

    //Verificamos si el producto ya fue cargado
    const productInCart = newCart.find(
      (product) => product.id === productAdded.id
    );

    if (productInCart) {
      productInCart.quantity += quantity;
      setCart(newCart);
    } else {
      newCart.push(productAdded);
    }
    setCart(newCart);
  };
  //Exponemos el total de productos en el CartWidget
  const quantityInCart = () => {
    return cart.reduce((acc, prod) => acc + prod.quantity, 0);
  };

  //Precio total
  const totalPriceCart = () => {
    return cart.reduce((acc, prod) => acc + prod.price * prod.quantity, 0);
  };
  //Funcion para vaciar carrito
  const emptyCart = () => {
    setCart([]);
  };

  return (
    <Context.Provider
      value={{
        products,
        cart,
        handleAddProducts,
        quantityInCart,
        totalPriceCart,
        emptyCart,
      }}
    >
      {children}
    </Context.Provider>
  );
};
