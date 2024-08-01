/* STOP! Don't compare React Interfaces to Java Interfaces

In TypeScript/React, Interfaces behave more like Java Model Classes - they model data.
We'll be modeling User data based off the fields in this Interface

Our UserComponent will send data of UserInterface type to the UserPostComponent*/
export interface UserInterface {
    firstName?:string,
    lastName?:string,
    userName?:string,
    email?:string
}

/* "?" just means the variable is optional. 
We don't need that variable to make the object. It's not required
I typically make every variable optional unless I need it populated every time */