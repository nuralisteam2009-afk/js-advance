import { useEffect, useState } from 'react'
import './App.css'
  

function App() {
  const [name, setName] = useState('');
  const [secondName, setSecondName] = useState('');

  const onChangeName = (e) => {
    const newName = e.target.value;
    setName(newName)
    localStorage.setItem('name', newName);
  }


  const onChangeSecondName = (e) => {
    const newName = e.target.value;
    setSecondName(newName)
    sessionStorage.setItem('secondName', newName)
  }

  useEffect(() => {
    const name = localStorage.getItem('name') || "";
    setName(name);
    
    const secondName = sessionStorage.getItem('secondName') || "";
    setSecondName(secondName);
  }, [])

  const clearAll =() => {
    sessionStorage.clear();
    localStorage.removeItem("name");
    setName("");
    setSecondName("");
  };

  return (
    <>
    <input placeholder='name' value={name} onChange={onChangeName}/>
    

    <input placeholder="second name" value={secondName} onChange= {onChangeSecondName} />

    <button onClick={clearAll}>remove All</button>

    </>
  )
}

export default App
