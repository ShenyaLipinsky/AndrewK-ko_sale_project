import { FaShoppingCart } from 'react-icons/fa';

const CartIcon = ({ cartCounter }) => {
  return (
    <div>
      <FaShoppingCart />
      {cartCounter > 0 && <span>{cartCounter}</span>}
    </div>
  );
};

export default CartIcon;
