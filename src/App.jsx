import { useCallback, useEffect, useRef, useState } from 'react';
import './App.css'


function App() {
  const ref = useRef(null);
  const [value, setValue] = useState();

  useEffect(() => {
    console.log('ref', ref.current)
    ref.current.focus();
  }, []);

  const onChancge = (e) =>{
    setValue(e.target.value);
  }

  const checkCorrectName = useCallback(() => {
    console.log('value', value)
  }, [value] )

  console.log('render')
  return (
    <>
    <input placeholder="Name" ref={ref} value={value} onChange={onChancge} />
    <button onClick={checkCorrectName}>Check</button>
    </>
  );
}

export default App
