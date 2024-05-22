import ItemCount from "./ItemCount";

function ItemDetail({id, nameProduct, price, urlImage, stock }) {
  return (
    <div className="flex justify-center items-center h-full max-w-7xl">
      <div className="m-3 p-8 bg-white shadow-lg rounded-lg overflow-hidden mt-10">
        <div className="grid grid-cols-2 gap-8">
          <div>
            <img
              src={urlImage}
              alt={nameProduct}
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-semibold mb-4">{nameProduct}</h2>
            <p className="text-gray-700 text-lg mb-2">${price}</p>
            <p className="text-gray-600 text-lg mb-2">Stock: {stock}</p>
            <ItemCount
              id={id}
              stock={stock}
              nameProduct={nameProduct}
              urlImage={urlImage}
              price={price}              
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
