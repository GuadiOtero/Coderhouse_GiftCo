import { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../context/Context";
import ItemList from "./ItemList";

function ItemListContainer() {
  const { idCategory } = useParams();
  const { products } = useContext(Context);

  const filteredProducts = 
  idCategory && idCategory !== "Ver todo"
    ? products.filter((product) => product.category === idCategory)
    : products;

  return (
    <div className="mx-auto max-w-7xl flex flex-col items-center space-y-4 lg:py-5">
      <h1 className="font-bold text-xl text-primary">{idCategory}</h1>
      <ItemList products={filteredProducts} />
    </div>
  );
}

export default ItemListContainer;

