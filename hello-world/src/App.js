import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'   //import the .js file via component

import Welcome from './components/Welcome' // import welcome.js 

import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter'
import Propss from './components/Propss';
import Hooks from './components/Hooks';

function App() {
  return (
    <div className="App">

      {/* <Propss name="shiorissssss"/> */}

      < Hooks name="Kushagra"/>
      
      {/* <Counter /> */}

      {/* <Message /> */}

      {/* <Greet name="Bruce" heroName="Batman">
        <p> This is children prop</p>
      </Greet>
      <Greet name="Clarke" heroName="Superman">
        <button>Fly</button>
      </Greet>
      <Greet name="Diana" heroName="Wonder Woman"/>
       */}
      {/* <Welcome name="Bruce" heroName="Batman"/>  
      <Welcome name="Clarke" heroName="Superman"/>
      <Welcome name="Diana" heroName="Wonder Woman"/>
       */}

      {/* <Hello /> */}

    </div>  //custom HTML tag(JSX) added above 
  );
}

export default App;  //default export
 