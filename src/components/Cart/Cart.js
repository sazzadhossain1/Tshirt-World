import React from 'react';
import './Cart.css'

const Cart = ({cart, handleRemoveFromCart}) => {
    
    let command;
    if(cart.length === 0){
        command =  <p>Please dd at least one item!!!</p>
    }
    else if(cart.length === 1){
        command = <p>Please add more...</p>
    }
    else{
        command = <p><small>Thanks for adding item</small></p>
    }




    return (
        <div>
            <h2>Items selected: {cart.length}</h2>
            
            {
                cart.map(tShirt=><p>{tShirt.name}
                <button onClick={() => handleRemoveFromCart(tShirt)}>X</button>
                </p>)
            }
            {cart.length ===0 || <p className='orange'>YAY! You are buying</p>}
            {cart.length ===3 && <div className='orange'>
                <h3>Trigonal</h3>
                <p>Tin hon ke ki gift diba</p>
                </div>}
            {command}
            {cart.length !==4 ? <p>Keep adding</p> : <button>Remove All</button>}
            {cart.length ===4 && <button className='orange'>Review Order</button>}
        </div>
    );
};

export default Cart;