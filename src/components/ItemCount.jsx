import { useContext, useState, useEffect } from "react";
import { Context } from "../context/Context";

function ItemCount({ id, stock, nameProduct, urlImage, price }) {
  const { handleAddProducts } = useContext(Context);
  const [quantity, setQuantity] = useState(1);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [availableStock, setAvailableStock] = useState(stock);

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrease = () => {
    if (quantity < availableStock) {
      setQuantity(quantity + 1);
    }
  };

  const handleAdd = () => {
    handleAddProducts(quantity, id, nameProduct, urlImage, price, stock);
    setAvailableStock((prev) => prev - quantity);
    setQuantity(1);
  };

  useEffect(() => {
    if (availableStock <= 0) {
      setButtonDisabled(true);
    } else {
      setButtonDisabled(false);
    }
  }, [availableStock]);

  return (
    <div>
      <div className="flex items-center mb-4">
        <button
          onClick={handleDecrease}
          className="bg-gray-200 text-gray-600 py-2 px-4 rounded-l-lg"
        >
          -
        </button>
        <input
          type="number"
          value={quantity}
          className="w-12 h-10 text-center border border-gray-300"
          readOnly
        />
        <button
          onClick={handleIncrease}
          className="bg-gray-200 text-gray-600 py-2 px-4 rounded-r-lg"
        >
          +
        </button>
      </div>
      <button
        onClick={handleAdd}
        disabled={buttonDisabled}
        className={`bg-primary text-white py-3 px-6 rounded-lg transition-colors ${
          buttonDisabled
            ? "bg-gray-400 cursor-not-allowed"
            : "hover:bg-[#9D7B99]"
        }`}
      >
        Agregar al carrito
      </button>
    </div>
  );
}

export default ItemCount;
