import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object({
    name: yup.string().required().min(2, "Name must be at least 2 characters"),
    email: yup.string().required().email("Enter a valid email"),
    password: yup.string().required().min(8, "Password must be at least 8 characters"),
    confirmPassword: yup
        .string()
        .required("Please confirm your password")
        .oneOf([yup.ref("password")], "Passwords must match"),
});

const TaskTwo = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(schema) });

    const onSubmit = (data) => {
        console.log("Form Data Submitted:", data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <input {...register("name")} placeholder="Name" />
                <p style={{ color: "red" }}>{errors.name?.message}</p>
            </div>

            <div>
                <input {...register("email")} placeholder="Email" />
                <p style={{ color: "red" }}>{errors.email?.message}</p>
            </div>

            <div>
                <input type="password" {...register("password")} placeholder="Password" />
                <p style={{ color: "red" }}>{errors.password?.message}</p>
            </div>

            <div>
                <input type="password" {...register("confirmPassword")} placeholder="Confirm Password" />
                <p style={{ color: "red" }}>{errors.confirmPassword?.message}</p>
            </div>

            <input type="submit" value="Register" />
        </form>
    );
};

export default TaskTwo;