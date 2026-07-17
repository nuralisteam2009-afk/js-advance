import { useState } from "react";
import TodoItem from "./TodoItem";


const todosData = [
    { id: 1, title: "Todo 1", Completed: false },
    { id: 2, title: "Todo 2", Completed: false },
    { id: 3, title: "Todo 3", Completed: false },
];

const TodoList = () => {
    const [todos, setTodos] = useState(todosData);

    const setComplited = (id, CompletedValue) => {
        setTodos((todos) =>
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: CompletedValue } : todo,
            ),
        );
    };
    return (
        <div>
            {todos.map((todo) => (
                <TodoItem{...todo} setComplited={setComplited} key={todo.id} />
            ))}
        </div>
    );
};

export default TodoList