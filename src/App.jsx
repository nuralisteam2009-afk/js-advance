import { useState } from 'react';
import './App.css'

function App() {
  const [toggle, setToggle] = useState(true);

  return (
    <>
      <button onClick={() => setToggle(!toggle)}>
        {toggle ? "вкл" : "выкл"}
      </button>
    </>
  );
}

export default App;