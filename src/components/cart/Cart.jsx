import React from 'react';
import s from './Cart.module.css'
const Cart = ({card}) => {
    
    return (
        <div className={s.cart}>
            <div className={s.cart_desccription}>
                <h2>{card.title}</h2>

            </div>
        </div>
    );
};

export default Cart;