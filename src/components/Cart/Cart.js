import React from 'react';
// Add css 
import './Cart.css'

const Cart = (props) => {
    const {cart}= props || {}
    const totalReducer=(prevValue,currentValue) => prevValue+currentValue.salary
     const total = cart.reduce(totalReducer, 0);

    return (
        <div className='cart-container'>
              <h2><i className  ="fas fa-users"> Employees: </i>
                 {cart.length}
               </h2>
                <h2 className='total-salary'>Total Salary: ${total}</h2>
               <ul>
                   {
                       cart.map( employee=> <div className='img-cart'><img src={employee.img} className="img-fluid rounded-start" alt="..."/><h5>{employee.name} <br /><small>Salary: ${employee.salary}</small></h5></div>)
                   }
               </ul>
        </div>
    );
};

export default Cart;
