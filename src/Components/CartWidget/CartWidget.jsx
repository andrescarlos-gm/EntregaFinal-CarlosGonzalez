import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./CartWidget.css";
import CartContext from "../../context/CartContext";
import { useContext } from "react";

export default function CartWidget() {
  const { cartList } = useContext(CartContext);
  const reduce = cartList.reduce((acc, act) => acc + act.quantity, 0);

  return (
    <div className="cart">
      <ShoppingCartIcon sx={{ "scale": "2.3" }} />
      <div className="centred">
        <span className="circle">{reduce}</span>
      </div>
    </div>
  );
}
