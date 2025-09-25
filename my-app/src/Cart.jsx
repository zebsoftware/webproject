import { useState } from "react";

 function Cart() {
    const [quantity,setquantity]=useState(0);
   const increaseQuantity=()=>{
        setquantity(quantity+1);
    }
    const decreaseQuantity= ()=>{
        setquantity(quantity-1)
    }
  return (
    <>
    <button onClick={increaseQuantity}>+</button>
    <p>{quantity}</p>
    <button onClick={decreaseQuantity} >-</button>
    </>
  );
}
export default Cart;
