/* Recall how arrow functions work. They can take in values, and execute some code 
In our FirstComponent, we're sending in no arguments hence the empty () => ... 
Normally, this argument contains "props" which is data sent in from a parent component (or elsewhere...)

"export"? - We need to export this component so it can get imported elsewhere
"const"? - The value it references can't change during runtime. like final in Java
"React.FC"? - This is a React (F)unctional (C)omponent. Basically it's a type */
export const FirstComponent: React.FC = () => {

    //define a variable - we will databind this variable into the TSX view below
    let words:String = "I am stored in a variable in a component!"

    //Remember, this is TSX, not HTML!
    return(
        <div>
            <h3>Hello from FirstComponent!</h3>
            <p>Data bound value: {words}</p>
        </div>
    )

}