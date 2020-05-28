import React, { useContext } from 'react';
import {Link} from 'react-router-dom';
import {ProductContext} from '../context';
import {ButtonContainer} from './Button';


export function Details(){    
    const {detailProduct:{id,img,title,info,price,inCart,company},addToCart,openModal} = useContext(ProductContext);
    
        return (
                <div className="conatiner py-5">
                           
                           <div className="row">
                               <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                    <h1>{title}</h1>
                               </div>
                           </div>

                           <div className="row">
                               <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <img src={img} alt="product" className="img-fluid"/>
                               </div>
                               <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <h2>Model: {title}</h2>
                                    <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                        Made by : <span className="text-upperrcase">{company}</span>
                                    </h4>
                                    <h4 className="text-blue">
                                        <strong>
                                            price: <span>$</span>{price}
                                        </strong>
                                    </h4>
                                    <p className="text-capitalize font-weight-bold mt-3 mb-0">Some Info About Product :</p>
                                    <p className="text-muted lead">{info}</p>
                                    <div>
                                        <Link to="/">
                                            <ButtonContainer>back to products</ButtonContainer>
                                        </Link>
                                        <ButtonContainer cart disabled={inCart?true:false} onClick={()=>{ addToCart(id); openModal(id); }}>
                                            {inCart ?"In Cart" : "Add to cart"}
                                        </ButtonContainer>
                                    </div>
                               </div>
                           </div>

                       </div>
                   
                
        )
    
}

export default Details
