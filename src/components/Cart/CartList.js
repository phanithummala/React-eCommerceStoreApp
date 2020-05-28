import React from 'react';
import CartItem from './CartItem'

function CartList({cart}) {
    return (
        <div className="container-fluid">
            { cart.map((cartItem)=>{
                return  <CartItem key={cartItem.id} cartItem={cartItem}/>
            })}
           
        </div>
    )
}

export default CartList
