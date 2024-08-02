import { useState } from "react"
import "./Hypotenuse.css"

//This component will hold a hypotenuse calculator
export const Hypotenuse: React.FC = () => {

    //To calculate hypotenuse, we need to store the values of the 2 shorter triangle sides
    //We'll store each side and the calculation's result in a state variable
    const [sideA, setSideA] = useState(0)
    const [sideB, setSideB] = useState(0)
    const [result, setResult] = useState(0)

    //This function will store the sideA OR sideB input values (depending on which one changed)
    //we'll take the name of input, and assign values to state depending on that name
    const storeValues = (input:any) => {

        //If the name of the changed input is "Side A", store it in sideA state variable
        //Otherwise, store it in sideB state variable
        if(input.target.name === "side A"){
            setSideA(input.target.value)
        } else {
            setSideB(input.target.value)
        }

    }

    //Finally, we can calculate the hypotenuse and set it in the result state variable
    const calculateHypotenuse = () => {

        //calculate the hypotenuse - don't need to reinvent the wheel
        let hypotenuse:number = Math.hypot(sideA, sideB)

        //set the result state!
        setResult(hypotenuse)

        //yes, this could have been just one line :)

    }


    return(
        <div className="input-container">
            <h3>Hypotenuse Calculator</h3>
            <input type="number" name="side A" onChange={storeValues}/>
            <input type="number" name="side B" onChange={storeValues}/>

            {/* Conditional Rendering! if SideA or sideB are <= 0 render an error message*/}
            <p style={{color:"red"}}>
                {/* "are sideA and sideB greater then zero? good, render nothing. otherwise show user this message" */}
                {sideA > 0 && sideB > 0 ? "" : "please enter positive integers for both sides"}
            </p>

            <div>
                {/* "if result is truthy (non-zero), tell the user what they calculated. otherwise render nothing" */}
                {result ? <p>You calculated: {result}</p> : ""}
            </div>

            <button onClick={calculateHypotenuse}>Calculate!</button>
        </div>
    )
}