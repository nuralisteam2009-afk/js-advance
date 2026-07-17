import { memo } from "react";

const Title = memo(({ title }) => {
    return <span >Title: { title }</span>;
});

const Button = ({ children, onClick }) => {
    return <button onClick={onClick} className="button">{children}</button>;
}

const TodoItem = ({ title, completed, setComplited, id }) => {

    const onChangeComplate = () => {
        setComplited(id, !completed);
    };

    return (
        <div className="item flex">
            <Title title={title} />
            <Button onClick={onChangeComplate}>
                {completed ? 'Выполнено' : 'Не выполнено'}
            </Button>
        </div >
    );
};

export default memo(TodoItem, (prevProps, nextProps) => {
    return (
        prevProps.completed === nextProps.completed &&
        prevProps.title === nextProps.title
    );
});