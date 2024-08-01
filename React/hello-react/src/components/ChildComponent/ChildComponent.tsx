/* In this component, props is of <any> type. What is props? 

Props is the data sent in from a parent component 
ParentComponent will render ChildComponent in its TSX, and pass its state to the Child

ParentComponent will send a state object containing a value for color, and food
The props value in the Child will be the EXACT data sent in from the parent's state */
export const ChildComponent: React.FC<any> = ({color, food}) => {

    return(
        <div>
            <h3>Hi From ChildComponent! I'm rendered WITHIN ParentComponent. Not on my own.</h3>
            <h4 style={{color}}>My Parent's favorite color is: {color}</h4>
            <h4>My Parent's favorite food is: {food}</h4>
        </div>
    )
}