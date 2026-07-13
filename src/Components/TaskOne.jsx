import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
const schema = yup.object({
    email: yup.string().required().email(),
    password: yup.string().required().min(6),
});

const TaskOne = () => {
    const { register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(schema) });
    const onSubmit = (data) => console.log("data", data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register('email')} />
            <p style={{ color: "red" }}>{errors.email?.message}</p>
            <input {...register("password")} />
            <p style={{ color: "red" }}>{errors.password?.message}</p>
            <input type="submit" />
        </form>

    );
};

export default TaskOne