import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object({
    subscription: yup.string().required("Please select a subscription level"),
    agreement: yup.boolean().oneOf([true], "You must accept the terms"),
});

const TaskThree = () => {
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
                <p>Select Subscription Level:</p>
                <div>
                    <input {...register("subscription")} type="radio" value="Free" id="free" />
                    <label htmlFor="free">Free</label>
                </div>
                <div>
                    <input {...register("subscription")} type="radio" value="Premium" id="premium" />
                    <label htmlFor="premium">Premium</label>
                </div>
                <div>
                    <input {...register("subscription")} type="radio" value="Pro" id="pro" />
                    <label htmlFor="pro">Pro</label>
                </div>
                <p style={{ color: "red" }}>{errors.subscription?.message}</p>
            </div>

            <div style={{ marginTop: "15px" }}>
                <input {...register("agreement")} type="checkbox" id="agreement" />
                <label htmlFor="agreement"> I agree with the terms</label>
                <p style={{ color: "red" }}>{errors.agreement?.message}</p>
            </div>

            <input type="submit" value="Submit" style={{ marginTop: "15px" }} />
        </form>
    );
};

export default TaskThree;