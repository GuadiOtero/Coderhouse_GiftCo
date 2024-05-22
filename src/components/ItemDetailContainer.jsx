import { useContext } from "react";
import { Context } from "../context/Context";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() { 
  const { idProduct } = useParams(); 
  const { products } = useContext(Context);

  const item = products.find((product) => product.id === idProduct);

  return (
    <div className="mx-auto max-w-7xl flex justify-center">
      <ItemDetail key={item.id} {...item} />
    </div>
  );
}

export default ItemDetailContainer;

