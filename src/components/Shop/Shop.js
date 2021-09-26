import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Employee from "../Employee/Employee";
import './Shop.css';

const Shop = () => {
    const [employees, setEmployees] = useState([]);
    const [ cart , setCart ] = useState([]);

  useEffect(() => {
    fetch("/employeesData.json")
      .then((res) => res.json())
      .then((data) => setEmployees(data));
  }, []);

  const handleAddEmployee=(employee)=>{
    const newCart=[ ...cart  , employee ]
    setCart(newCart)
 }

  return (
    <div>
      <div className="employee-container">
        <div className="employee">
            {
                employees.map(employee=>  
               <Employee
                employee={employee}
                handleAddEmployee={handleAddEmployee}
                >
                </Employee>)
            }
        </div>
        <div>
             <Cart
                cart={cart}
             >
             </Cart>
        </div>
      </div>
    </div>
  );
};

export default Shop;
