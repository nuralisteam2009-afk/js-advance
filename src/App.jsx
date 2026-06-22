import { useState } from 'react';
import './App.css'
import Button from './Button';
import Person from './Person';


const person = {
  name: "nurali", secondName: "Agajanow"
}

const students = [
  {
    name: "Nurali",
    secondName: ""
  },

  {
    name: "Murad",
    secondName: ""
  },

  {
    name: "Alex",
    secondName: ""
  },

  {
    name: "Ilyas",
    secondName: ""
  }
];


function App() {
  const [count, setCount] = useState(0);


  const onClick = () => {
  setCount(count +1);
  };

  console.log('render count', count)
  return(
    <>
    <h3>Count: {count}</h3>
    <button onClick={onClick}>Click</button>
    </>
  );


  // return (
  //   <>
  //   <h3>Hello work</h3>
  //   <br/>
  //   <Button>11111</Button>
  //   <Button/>

  //   <Person name={person.name} secondName={person.secondName}/>

  //   <Person {...person}/>

  //   {students.map(student => <Person {...student}/>)}
  //   </>
  // );
}

export default App;
