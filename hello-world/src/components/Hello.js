import React from "react";

const Hello = () => {
  return (                              //With JSx
      <div className='dumyClass'>
          <h1> Hello Dexter</h1>
      </div>
  )

  // return React.createElement(
  //   "div",
  //   {id: 'hello', className: 'dummyClass'},
  //   React.createElement("h1", null, "Hello Kushagra")
  // );
                                      //   Without JSX

}

export default Hello;
