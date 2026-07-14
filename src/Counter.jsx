import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  const increment = () => {
    if (count < 10) {
      setCount(count + 1);
      setMessage(""); 
    } else {
      setMessage("Счётчик не может быть больше 10!");
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
      setMessage(""); 
    } else {
      setMessage("Счётчик не может быть меньше 0!");
    }
  };

  return (
    <div>
      <h2>Счётчик: {count}</h2>
      <button onClick={decrement}>Уменьшить</button>
      <button onClick={increment}>Увеличить</button>
      
      {message && <p style={{ color: 'red' }}>{message}</p>}
    </div>
  );
}

export default Counter;