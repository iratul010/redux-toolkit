import { useDispatch } from 'react-redux';
import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import PropTypes from 'prop-types';
import { cartActions } from '../../store/cart-slice';
const ProductItem = (props) => {
 
  const dispatch = useDispatch();
 
  const {id, title, price, description } = props;
 const addToCartHandler = ()=>{


  dispatch(cartActions.addItemToCart({id, title, price }))
 }
  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};
ProductItem.propTypes = {
  id:PropTypes.string.isRequired,
  title: PropTypes.string.isRequired, 
  price: PropTypes.number.isRequired, 
  description: PropTypes.string,  
}
export default ProductItem;

/*

import { useDispatch, useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import PropTypes from 'prop-types';
import { cartActions } from '../../store/cart-slice';
const ProductItem = (props) => {
  const cart = useSelector(state=>state.cart);
  console.log(cart.items);
  
  const dispatch = useDispatch();
 
  const {id, title, price, description } = props;
 const addToCartHandler = ()=>{
  const newTotalQuantity = cart.totalQuantity+1;
  const updateItems = cart.items.slice();//copy
  const existingItem = updateItems.find(item=>item.id===id);//verify আগের সাথে মিলে গেলে
  console.log('existingItem',existingItem);
  if(existingItem){
    const updatedItemIndex = updateItems.findIndex(item=>item.id===id);

    const updateItem= {...existingItem};//নতুন আর এক্টাতে রাখা হইলো
     updateItem.quantity++;
     updateItem.price+=price;
    updateItems[updatedItemIndex] = updateItem;
  }else{
    updateItems.push({
      id:id,
      name:title,
      quantity:1,
      description:description,
      price:price,
    })
  }
  const newCart = {
    totalQuantity:newTotalQuantity  ,
    items:updateItems  
  }
 dispatch(cartActions.replaceCart( newCart))
 }
  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};
ProductItem.propTypes = {
  id:PropTypes.string.isRequired,
  title: PropTypes.string.isRequired, 
  price: PropTypes.number.isRequired, 
  description: PropTypes.string,  
}
export default ProductItem;
*/