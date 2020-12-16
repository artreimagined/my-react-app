import './App.css';
import MyComponent from './MyComponent';
import Name from './Name';
import ThingILike from './ThingILike';
import FunFact from './FunFact';
import Example from './Example';

function App() {

  // const x = 4;
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <MyComponent />
      <Name customName="Teri"/>
      <ThingILike />
      <FunFact />
      <Example />
    </div>
  );
}

export default App;

