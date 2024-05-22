import { Link } from "react-router-dom";

function Item({ id, nameProduct, price, urlImage, stock }) {
  return (
    <div className="rounded p-1 shadow w-96">
      <Link to={`/producto/${id}`}>
        <img
          src={urlImage}
          alt={nameProduct}
          className="w-full h-72 object-cover object-center rounded"
        />
      </Link>
      <div className="p-4">
        <h2 className="text-xl font-semibold">{nameProduct}</h2>
        <p className="text-gray-700 mt-2">${price}</p>
        <p className="text-gray-600 mt-2">Stock disponible: {stock}</p>
      </div>
    </div>
  );
}

export default Item;
