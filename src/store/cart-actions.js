import { cartActions } from "./cart-slice";
import { uiActions } from "./ui-slice";
export const fetchCartData = ()=>{
  return async(dispatch)=>{
    const fetchData =  async ()=>{
      const response = await fetch("https://maximize-redux-data-default-rtdb.firebaseio.com/cartNext.json");
      if(!response.ok){
        throw new Error('Could not fetch cart data')
      }
     const data = await response.json();
     return data;
    }

    try{
      const cartData = await fetchData();
     console.log('cartData',cartData)
      dispatch(cartActions.replaceCart({
        items:cartData.items || [],
        totalQuantity: cartData.totalQuantity
        }));
        // dispatch(cartActions.replaceCart(cartData));
    }catch(error){
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Fetch cart data failed!",
        })
      ); 
    }
  }
  
 
}
export const sendCartData = (cart) => {
  return async (dispatch) => {
    //START-PENDING
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data!",
      })
    );
    const sendRequest = async () => {
      const response = await fetch(
        "https://maximize-redux-data-default-rtdb.firebaseio.com/cartNext.json",
        { method: "PUT", body: JSON.stringify(cart) }
      );

      if (!response.ok) {
        //ERROR-error
        dispatch(
          uiActions.showNotification({
            status: "error",
            title: "Error!",
            message: "Sending cart data failed!",
          })
        );
      }
    };
    try {
      await sendRequest();
      //END-Success
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success",
          message: "Sent cart data Successfully!",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Sending cart data failed!",
        })
      );
    }
  };
};

const parent = (name,sms) => {
  return (message)=>  {
    return message(name, sms);
  };
};
function message(name, sms) {
       return ((name + sms))
}
const result = parent("Ratul"," my name");
 
console.log( (result(message)))
 