import { useContext, useState } from "react";
import { Context } from "../context/Context";
import { Link } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/config";

function Carrito() {
  //Inicializamos estados
  const { cart, totalPriceCart, emptyCart } = useContext(Context);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [orderId, setOrderId] = useState(null);
  const [error, setError] = useState("");

  //Funcion para vaciar carrito
  const handleEmptyCart = () => {
    emptyCart();
  };

  //Funcion para finalizar compra
  const handleCheckout = async () => {
    if (email !== confirmEmail) {
      setError("Por favor, revisá que los correos coincidan 🧐");
      return;
    }

    if (!name || !phone || !email) {
      setError("Por favor, completá todos los datos 😺");
      return;
    }

    //Creamos la orden
    const order = {
      client: {
        name,
        phone,
        email,
      },
      products: cart,
      total: totalPriceCart(),
      date: new Date(),
      state: "Generada",
    };

    //Enviamos la orden a firestore
    try {
      const docRef = await addDoc(collection(db, "ordenes"), order);
      setOrderId(docRef.id);
      emptyCart();
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  return (
    <div className="mx-auto max-w-7xl py-8 px-4">
      {cart.length > 0 ? (
        <>
          <h1 className="text-2xl font-bold mb-4">Carrito</h1>
          {cart.map((prod) => (
            <div key={prod.id} className="mb-6 border-b pb-4 flex items-center">
              <img
                src={prod.urlImage}
                alt={prod.nameProduct}
                className="w-20 h-20 object-cover"
              />
              <div className="ml-4 flex-1">
                <h2 className="text-xl font-semibold">{prod.nameProduct}</h2>
                <p className="text-gray-600">Unidad: ${prod.price}</p>
                <p className="text-gray-600">
                  Total: ${prod.price * prod.quantity}
                </p>
                <p className="text-gray-600">Cantidad: {prod.quantity}</p>
              </div>
            </div>
          ))}

          <div className="mt-6">
            <h2 className="text-xl font-semibold">
              Total compra: ${totalPriceCart()}
            </h2>
            <div className="mt-4">
              <input
                type="text"
                placeholder="Nombre"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border p-2 mb-2 w-full"
              />
              <input
                type="text"
                placeholder="Teléfono"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="border p-2 mb-2 w-full"
              />
              <input
                type="email"
                placeholder="Correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border p-2 mb-2 w-full"
              />
              <input
                type="email"
                placeholder="Confirmar correo electrónico"
                value={confirmEmail}
                onChange={(e) => setConfirmEmail(e.target.value)}
                className="border p-2 mb-2 w-full"
              />
              {error && <p className="text-red-500">{error}</p>}
            </div>
            <button
              onClick={handleEmptyCart}
              className="mt-4 bg-primary text-white py-2 px-4 rounded hover:bg-[#866882] transition-colors"
            >
              Vaciar carrito
            </button>
            <button
              onClick={handleCheckout}
              className="mt-4 ml-4 bg-tertiary text-white py-2 px-4 rounded hover:bg-[#78CDD8] transition-colors"
            >
              Finalizar compra
            </button>
          </div>
        </>
      ) : orderId ? (
        <>
          <div className="flex flex-col items-center gap-3">
            <h1 className="pt-12 text-2xl font-bold mb-4">¡Compra realizada con éxito! ✨</h1>
            <p>Orden: {orderId}</p>
            <Link to="/">
              <button className="mt-4  bg-tertiary text-white py-2 px-4 rounded hover:bg-[#78CDD8] transition-colors">
                Volver al inicio
              </button>
            </Link>
          </div>
        </>
      ) : (
        <>
          <p className="text-gray-600">
            Todavía no hay nada en el carrito, podés ver nuestros productos
            ahora 😺
          </p>
          <Link to="/">
            <button className="mt-4  bg-tertiary text-white py-2 px-4 rounded hover:bg-[#78CDD8] transition-colors">
              Ver productos
            </button>
          </Link>
        </>
      )}
    </div>
  );
}

export default Carrito;
