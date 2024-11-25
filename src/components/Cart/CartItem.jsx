import { useDispatch  } from 'react-redux';
import classes from './CartItem.module.css';
import { cartActions } from '../../store/cart-slice';
import PropTypes from 'prop-types';

const CartItem = (props) => {
  const dispatch = useDispatch();
  const { id,title, quantity, total, price } = props.item;
  
  const removeItemHandler = ()=>{
        dispatch(cartActions.removeItemFromCart(id))
  };
  const addItemHandler = ()=>{
        dispatch(cartActions.addItemToCart({id,title,quantity}))
  };


  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeItemHandler}>-</button>
          <button onClick={addItemHandler}>+</button>
        </div>
      </div>
    </li>
  );
};
CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default CartItem;
