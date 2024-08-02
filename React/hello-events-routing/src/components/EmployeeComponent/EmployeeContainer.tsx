
//This component will render x number of Employee components

import { useEffect, useState } from "react"

//This wil take in data from the employeeData.ts
export const EmployeeContainer: React.FC<any> = (incomingData:any) => {

    //state variable to store an array of employee data (which is our props)
    const[employees, setEmployees] = useState([])

    //useEffect that populates the employees Array with the incoming user data
    //(Imagine we have a get request that fires when the component loads to get the data)
    useEffect(() => {

        //set the employees state object to the incomingData
        setEmployees(incomingData.incomingData)
        //We're extracting the value called "incomingData" from our props called "incomingData"

        //Yes, we could have done this in the default state instead of in a useEffect
        //But I just wanted to practice

        //alert("Employees: " + employees)
        
    }) //no parameter! (not even []). Now this will run every time state changes

    return(
        <div>
            <h3>Employees:</h3>

            {/* using map() to render an Employee Component for every employee in the employees array */}
            <div>
                {employees.map((employee:any) => {
                    return <p>{employee.name}</p>
                })}
            </div>


        </div>
    )

}