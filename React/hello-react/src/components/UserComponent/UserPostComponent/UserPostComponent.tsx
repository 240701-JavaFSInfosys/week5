import { useEffect, useState } from "react"
import { UserInterface } from "../../../interfaces/UserInterface"
import "./PostStyling.css"

//This component represents some hypothetical social media post by a user
//It has props of UserInterface type, so it can only accept a UserInterface object from a parent
export const UserPostComponent: React.FC<UserInterface> = (user:UserInterface) => {

    /* Destructuring - accomplished with {}

       Destructuring lets us break up a props object into individual variables
       The name inside the curly brace must match the name of the attribute you're trying to store */
       const {userName} = user
       const {email} = user
       //we can also destructure multiple values at once!
       const {firstName, lastName} = user


       //Let's practice useState and useEffect again--------

       //Defining state for the user's post
       const[post, setPost] = useState("")

       //Defining the value for the user's post (imagine we send a GET request to get it)
       useEffect(() => {
            //hypothetical GET request would go here

            setPost("Thanks to useEffect, post content was set via the useState hook's mutator")
       }, []) // [] tells the useEffect to run as soon as the component loads

    return(
        <div className="post-container">

            <div className="profile-container">
                <img className="profile-pic" src="https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg" alt="PROFILE PIC"/>
                <h4>{userName}</h4>
            </div>

            <div className="content-container">
                <h5>{userName} posted: </h5>
                <p>{post}</p>
            </div>

        </div>
    )

}