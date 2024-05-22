import Item from "./Item";

function ItemList({ products }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto max-w-7xl ">
      {products.map((prod) => (
        <Item key={prod.id} {...prod} />
      ))}
    </div>
  );
}

export default ItemList;
