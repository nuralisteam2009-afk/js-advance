import { useState } from 'react';

function NameForm() {
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div style={{ marginTop: '20px' }}>
      <label htmlFor="name-input">Введите имя: </label>
      <input
        id="name-input"
        type="text"
        value={name} 
        onChange={handleChange} 
        placeholder="Начните писать..."
      />
      <p>Ваше имя: {name}</p>
    </div>
  );
}

export default NameForm;