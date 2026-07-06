import { useDispatch, useSelector } from "react-redux"
import { addCount, minusCount } from "../store/todo.reducer"; // Импортируем оба экшена

const Todo = () => {
    const dispatch = useDispatch();
    const count = useSelector((state) => state.todos.count);

    return (
        <>
            <h3>Count: {count}</h3>

            <button onClick={() => dispatch(addCount())}>+</button>
            <button onClick={() => dispatch(minusCount())}>-</button>
        </>
    );
};

export default Todo;