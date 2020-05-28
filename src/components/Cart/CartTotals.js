import React ,{useContext} from 'react';
import {ProductContext} from '../../context';
import {Link} from 'react-router-dom';
import PayPalButton from '../PayPalButton';


function CartTotals(props) {
    const {cartSubTotal,cartTax,cartTotal,clearCart}= useContext(ProductContext);
    console.log(`props ${props}`)
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                        <Link to="/">
                            <button className="btn btn-outline-danger text-uppercase mb-3 px-5" type="button" onClick={()=> clearCart()}>clear cart</button>
                        </Link>
                        <h5><span className="text-title"> subtotal: <strong>$ {cartSubTotal}</strong></span></h5>
                        <h5><span className="text-title"> Tax: <strong>$ {cartTax}</strong></span></h5>
                        <h5><span className="text-title"> Total: <strong>$ {cartTotal}</strong></span></h5>
                        <PayPalButton total={cartTotal} clearCart={clearCart} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartTotals
