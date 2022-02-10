//Functional Component

import React from "react";

// function Greet(){   //Functional component
//     return <h1> Hello Kushagra</h1>
// }

//const Greet = () => <h1> Hello Kushagra</h1>   // rewriting using ES6

const Greet = (props) => {                              //passing props
  console.log(props);
  return (
    <div>
      <h1>
        Hello {props.name} a.k.a {props.heroName}
      </h1>
      {props.children}                              
    </div>                                        //Child prop with small 'c'
  )
}

export default Greet; //export the .js file
