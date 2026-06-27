import { useState, useEffect, useRef } from 'react';
import './App.css';
import beepSound from './sirena-policiya.mp3';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("app-theme") || "light");
  
  // Создаем аудио объект
  const audioRef = useRef(new Audio(beepSound));

  useEffect(() => {
    localStorage.setItem("app-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    // 1. Просто меняем тему
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    
    // 2. Запускаем музыку, только если она еще не играет
    // Если она уже играет, play() ничего не испортит
    audioRef.current.play().catch(error => {
       console.log("Ожидаю взаимодействия пользователя:", error);
    });
  };

  const setPause = () => {
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
  }

  return (
    <div className={theme}>
      <button onClick={toggleTheme}>
        Переключить тему (музыка не прервется)
      </button>
      
      <button onClick={setPause}>
        Остановить звук
      </button>
    </div>
  );
}

export default App;