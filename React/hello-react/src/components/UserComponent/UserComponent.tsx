import { useEffect, useState } from "react"
import { UserInterface } from "../../interfaces/UserInterface"
import { UserPostComponent } from "./UserPostComponent/UserPostComponent"

export const UserComponent: React.FC = () => {

    /* Remember, state holds values related to a component that we can pass to child components 
    
       We use the useState hook to define state for this component
       This time, we'll set the state to be strictly a UserInterface type
       This is a good way to enforce type safety! Plus our code is a little more clear in intent */

    const [user, setUser] = useState<UserInterface>({
        firstName: "",
        lastName: "",
        userName: "",
        email: ""
    })


    /* useEffect hook here- 
    
    This hook is often used to execute some logic once the component renders
    but it can pretty much be used for any type of event (button click, etc) */

    //Assume we made some HTTP call to a server (with axios) which grabs user data. (Maybe login?)
    //We would then use the response data to populate the UserComponent's state object
    useEffect(() => {

        //assume the HTTP request happens here and we save the data to the state object
        //but we're just going to hardcode the user data for now
        setUser({
            firstName: "Reginald",
            lastName: "Reactman",
            userName: "ReactGuy123",
            email: "ILuvReact1000@gmail.com"
        })
    }, []) //Empty array means this useEffect runs once the component renders

    //In our TSX< we'll databind the values from our user state object
    //we'll also render a UserPostComponent, and send it our user data as props
    return(
        <div>
            <h2>User: {user.firstName} {user.lastName}</h2>
            <h3>Email: {user.email}</h3>
            <UserPostComponent {...user}></UserPostComponent>
        </div>
        //To send entire state objects to a childs props you can use "..."
        //This is known as the "spread operator"
    )
}