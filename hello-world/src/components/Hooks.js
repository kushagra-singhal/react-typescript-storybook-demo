//import the useState Hook from React.
import React, { useState, useEffect} from "react";


//Functional Component


// const Hooks = ({ name }) => {
//      return <h1> Hello, {name} </h1>;
// }


// first hook useState


const Hooks = () => {

    //declare a new state variable by calling the useState

  const [count, setCount] = useState(0); 

  //Declare multiple state variables

//   const [ age, setAge ] = useState(42);
//   const [fruit, setFruit] = useState('banana');
//   const [ todos, setTodos] = useState([{ text: 'Learn hooks '}]);


// Similar to componentDidMount and componentDidUpdate:
//+No cleanup required.

useEffect(() => {
    document.title = `You clicked ${count} times`;
});


  return (              //reading state - {count}
    <div>
      <p>Clicked {count} times</p>   
      <button onClick={() => setCount(count + 1)}>   
          Click                         
      </button>         
    </div>              //Updating state - {() => setCount(count + 1)}
  );
};





//hooks example for subscription and unsubscription

//requiring clean-up



// const Hooks = (props) => {
//     const[isOnline, setIsOnline] = useState(null);

//     useEffect(() => {
//         function handleStatusChange(status) {
//             setIsOnline(status.isOnline);
//         }
//         ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);

//         // Specify how to clean up after this effect:
//         return function cleanup() {

//         ChatAPI.unsubscribeFromFriendStatus(props.frined.id, handleStatusChange);
//         };
//     });

//     if (isOnline === null) {
//         return 'Loading...';
//     }
//     return isOnline ? 'Online' : 'Offline';
// }





/* 

CUSTOM HOOKS - starts with "use" and may call other hooks
custom hook here - useFriendStatus


function useFriendStatus(friendID) {
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }

    ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange);
    };
  });

  return isOnline;
}


*/







export default Hooks;



