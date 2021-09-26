import React from 'react';
import './Employee.css'
const Employee = (props) => {

     const {name , img , jobTitleName, email, adress,salary}=props.employee  || {}

    return (
          <div>
            <div  className="employee-body" >
             <div >
              <img src={img} class="img-fluid rounded-start" alt="..."/>
             <div>
              <h3>{name}</h3>
              <p>
              <small> Job: {jobTitleName}</small>
              </p>
              <p>
              <h6>Salary: ${salary}</h6>
              </p>
              <p>Adress: {adress}</p>
              <p>E-mail: {email}</p>
              <button 
              onClick={ ()=> props.handleAddEmployee(props.employee)}
              > <h5><i class="fas fa-male"></i> Add Employee</h5></button>
                
            </div>
        </div>
      </div>
      </div>
    );
};

export default Employee;