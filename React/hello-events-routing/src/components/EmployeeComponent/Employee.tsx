import "./Employee.css"

//This component takes props of type any...
//We could have defined some EmployeeInterface for the data type, but I didn't here.
//The EmployeeContainer will send each Employee component one Employee object
export const Employee: React.FC<any> = (employee:any) => {


    //this will render a view for the employee coming in as props
    return(
        <div className="employee-container">

            <div className="employee-name">
                <h3>{employee.name}</h3>
            </div>

            <div className="employee-data">
                <p>{employee.quote}</p>
            </div>

        </div>
    )

}