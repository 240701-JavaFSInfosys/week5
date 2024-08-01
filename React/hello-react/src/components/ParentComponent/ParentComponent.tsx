import { useState } from "react"
import { ChildComponent } from "../ChildComponent/ChildComponent"

//This is a Parent Component - It will have another component nested in its return()
export const ParentComponent: React.FC = () => {


    /* State is an object that stores data related to a Component 
       Why not just use a regular variable? 
       The advantage of using State is that we can pass state data to a child Component's props
       BIG PICTURE: A parent's state gets sent in to child components as props

       We define state with the "useState" hook

       We declare:
       1) A Variable that lets us ACCESS the state value
       2) A Mutator (like a setter in Java) to CHANGE the state value
       3) the actual useState Hook, which sets up state and lets us define a default value */
    let[favColor, setColor] = useState("Blue")
    let[favFood, setFood] = useState("Spicy Meatball")

    return(
        <div>
            <h1>Hello from ParentComponent! My favorite color is: {favColor}</h1>
            <ChildComponent color={favColor} food={favFood}></ChildComponent>
        </div>
    )
}