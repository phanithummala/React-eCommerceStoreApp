import React ,{useContext} from 'react';
import styled from 'styled-components';
import {ProductContext} from '../context';
import {ButtonContainer} from './Button';
import {Link} from 'react-router-dom';

function Modal() {
    const { modalOpen,closeModal,modalProduct:{img,title,price} }=useContext(ProductContext);
   
    return (
       
           modalOpen ? (
                        <ModalContainer>
                            <div id="modal" className="container text-capitalize mx-auto col-md-6 col-lg-4 text-center p-5">
                                <h5>Item added to the cart</h5>
                                <img src={img} className="img-fluid" alt="product"/>
                                <h5 className="text-muted">{title}</h5>
                                <h5 className="text-muted">price : $ {price}</h5>
                                <Link to="/"><ButtonContainer onClick={() => { closeModal()}}>Store</ButtonContainer></Link>
                                <Link to="/cart"><ButtonContainer cart onClick={() => { closeModal()}}>go to cart</ButtonContainer></Link>
                            </div>
                        </ModalContainer>
           ) :null
       
    )
}
const ModalContainer=styled.div`
position:fixed;
top:0;
left:0;
right:0;
bottom:0;
background:rgba(0,0,0,0.3);
display:flex;
align-items:center;
justify-content:center;
#modal{
    background: var(--mainWhite);
}
`;

export default Modal;
