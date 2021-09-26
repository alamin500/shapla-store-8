import React from 'react';
import './Employee.css'
const Employee = (props) => {
    // destructuring
     const {name , img , jobTitleName, email, adress,salary} = props.employee  || {}
     
    return (
          <div>
            <div  className="employee-body" >
             <div >
              <img src={img} className="img-fluid rounded-start" alt="..."/>
             <div>
              <h3>{name}</h3>
              <p>
              <small> Job: <strong>{jobTitleName}</strong></small>
              </p>
              <h6>Salary: <strong>${salary}</strong></h6>
              <p>Adress: <strong>{adress}</strong></p>
              <p>E-mail: <strong>{email}</strong></p>
              <button 
              onClick={ ()=> props.handleAddEmployee(props.employee)}
              > <h5><i className="fas fa-male"></i> Add Employee</h5></button>
                
            </div>
        </div>
      </div>
      </div>
    );
};

export default Employee;