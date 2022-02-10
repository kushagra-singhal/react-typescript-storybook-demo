
import React from "react";
 
// const Propss = () => {
//  return <h1>Hello, world</h1>;
// };





//two ways to pass props
// 1-

// const Propps = ({ name }) => {
//     return <h1> Hello, {name} </h1>;  
// };


// 2-

// const Propps = (props) => {
//     return <h1> Hello, {props.name}</h1>  //name passed in app.js

// }

    
// useState

// const Propss = () => {
//     const [count, setCount] = React.useState(0);

//     return (
//         <div>
//             <p>Count: {count} </p>
//             <button onClick={() => setCount(count + 1)} >Click </button>
//         </div>
//     )
// }

// const Propss = () => {
//     const[count, setCount]=React.useState(5);

//     return (
//         <div>
//             <p>Count: {count}</p>
//             <button onClick={() => setCount(count + 5)}>Click to add 5</button>
//         </div>
//     )
// }


//Lifecycle methods
//useEffect used for mounting

// const Propss = () => {
//     React.useEffect(() => {
//         console.log("hello");
//     }, [] );
//     return <h1>Hello, world</h1>
// }



// Using useEffect also for Unmounting

// const Propss = () => {
//     React.useEffect(() => {
//         return () => {
//             console.log("Bye");
//         };
//     }, [] );
//     return <h1> Bye , world</h1>
// }



// Mounting and Unmounting at same place

const Propss = () => {
    React.useEffect (() => {
        console.log("Hello");  //Mounting

        return () => {
            console.log("Bye");  //Unmounting
        };
    }, [] );

    return <h1> Hello , World</h1>
}











export default Propss;