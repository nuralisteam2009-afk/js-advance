import { useState } from 'react';

function ToggleButton() {
  const [isOn, setIsOn] = useState(true);

  return (
    <button onClick={() => setIsOn(!isOn)}>
      {isOn ? "Вкл" : "Выкл"}
    </button>
  );
}

export default ToggleButton;