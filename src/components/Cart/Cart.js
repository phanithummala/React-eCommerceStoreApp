import React,{useContext} from 'react';
import Title from '../Title';
import CartColumns from '../Cart/CartColumns';
import EmptyCart from './EmptyCart';
import {ProductContext} from '../../context';
import CartList from './CartList';
import CartTotals from './CartTotals';


export function Cart() {

    const {cart}= useContext(ProductContext);
   // const {cartFunctions}={...increment,decrement,removeItem};
    
    return (
           <section>
                {
                    ( cart.length>0 ? 
                        (<>
                            <Title name="your" title="cart"/> 
                            <CartColumns/>
                            <CartList cart={cart}/>
                            <CartTotals/>
                        </>
                        ) : (<EmptyCart/>)
                        
                    )    
                }
            </section>
    )
    
}

export default Cart
