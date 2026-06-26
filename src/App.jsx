import { useState, useEffect, useRef } from 'react';
import './App.css';
  import beepSound from './sirena-policiya.mp3';

function App() {
  const [theme, setTheme] = useState(
     localStorage.getItem("app-theme") || "light");
     const audioRef = useRef(new Audio(beepSound));
     const timerRef = useRef(null);

  useEffect(() => {
    localStorage.setItem("app-theme", theme);
  }, [theme]);

  
  const toggleTheme = () => {
     clearTimeout(timerRef.current);
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    audioRef.current.currentTime = 0; 
    audioRef.current.play().catch(error => {
      console.log("Браузер заблокировал звук до взаимодействия:", error);
    });
    // timerRef.current = setTimeout(() => {
    //   audioRef.current.pause();
    //   audioRef.current.currentTime = 0; // Сбрасываем в начало
    // }, 2000);
  };

  const setPause = () => {
    audioRef.current.pause();
      audioRef.current.currentTime = 0;
  }

  return (
    <div className={theme}>
      <button onClick={toggleTheme}>
        theme
      </button>
      <button onClick={setPause}>
        pause
      </button>
    </div>
  );
}

export default App;