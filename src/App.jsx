import './App.css'
import { lazy, Suspense } from 'react';

const TodoListLazy = lazy(() => import ("./components/TodoList"));

function App() {

  return (
    <>
    <Suspense fallback={<div>Loading...</div>}>
      <TodoListLazy />
    </Suspense>
    </>
  )
}

export default App
