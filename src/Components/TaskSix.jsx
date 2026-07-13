import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const checkUsernameTaken = (username) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const takenNames = ["admin", "user", "superuser"];
            const isTaken = takenNames.includes(username.toLowerCase());
            resolve(!isTaken);
        }, 1000);
    });
};

const schema = yup.object({
    username: yup
        .string()
        .required("Имя пользователя обязательно")
        .test("check-taken", "Это имя пользователя уже занято", async (value) => {
            if (!value) return true; 
            return await checkUsernameTaken(value);
        }),
});

const TaskSix = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isValidating },
    } = useForm({
        resolver: yupResolver(schema),
        mode: "onBlur", 
    });

    const onSubmit = (data) => {
        console.log("Данные успешно отправлены:", data);
        alert("Данные отправлены! Проверь консоль.");
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h3>Форма с асинхронной проверкой</h3>
            
            <div style={{ marginBottom: "15px" }}>
                <label>Имя пользователя: </label>
                <input 
                    {...register("username")} 
                    placeholder="Введите имя (например, admin)" 
                />
                
                {isValidating && <p>Проверка доступности...</p>}
                
                {errors.username && (
                    <p style={{ color: "red" }}>{errors.username.message}</p>
                )}
            </div>

            <input type="submit" value="Отправить" />
        </form>
    );
};

export default TaskSix;