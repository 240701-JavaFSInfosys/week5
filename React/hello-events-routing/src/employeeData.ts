//This file will hold an Array of employee data, which contains objects that we'll map through
//(using lists and keys with the map() function in EmployeeContainer)
export const data:any[] = [

    {
        userId: 1,
        name: "Rick",
        quote: "yeahhhhh gotta get schwifty"
    },

    {
        userId: 2,
        name: "Morty",
        quote: "Oh Jeez"
    },

    {
        userId: 3,
        name: "Squanchy",
        quote: "I'm squanchin' here!"
    }

]

//This is an example of a "global state file". It stores data that the entire app can access

//Imagine a user logs in and we want to save their data on the front end (id, name, role, etc)
//Not theeee best practice, I'll show context API in P2.