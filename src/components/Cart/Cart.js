import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const {cart}= props || {}
    const totalReducer=(prevValue,currentValue) => prevValue+currentValue.salary
     const total = cart.reduce(totalReducer, 0);

    return (
        <div className='cart-container'>
              <h3><i class="fas fa-male"> </i>
                 {cart.length}
               </h3>
                <h2>${total}</h2>
               <ul>
                   {
                       cart.map( employee=> <div className='img-cart'><img src={employee.img} class="img-fluid rounded-start" alt="..."/><h5>{employee.name} <br /><small>Salary: ${employee.salary}</small></h5></div>)
                   }
               </ul>
        </div>
    );
};

export default Cart;