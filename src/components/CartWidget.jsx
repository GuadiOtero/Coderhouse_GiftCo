import { useContext } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Context } from "../context/Context";

function CartWidget() {
  const { quantityInCart } = useContext(Context);

  return (
    <div>
      <Link to="/carrito">
        <button className="rounded-full p-2 -m-2">
          <FaCartShopping className="size-8 relative" />
        </button>
        <span className="absolute bg-slate-700 rounded-full px-2 -translate-y-3 -translate-x-2">
          {quantityInCart()}
        </span>
      </Link>
    </div>
  );
}

export default CartWidget;
