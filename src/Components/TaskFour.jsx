import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";

// Схема для каждого шага
const stepSchemas = [
    yup.object({
        name: yup.string().required("Name is required").min(2),
        email: yup.string().required("Email is required").email(),
    }),
    yup.object({
        city: yup.string().required("City is required"),
        street: yup.string().required("Street is required"),
        zip: yup.string().required("Zip is required").matches(/^\d+$/, "Only digits allowed"),
    }),
];

const TaskFour = () => {
    const [step, setStep] = useState(0);
    const [formData, setFormData] = useState({});

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(stepSchemas[step] || yup.object()),
        defaultValues: formData,
    });

    const nextStep = (data) => {
        setFormData({ ...formData, ...data });
        setStep((prev) => prev + 1);
    };

    const prevStep = () => setStep((prev) => prev - 1);

    const onSubmit = (data) => {
        const finalData = { ...formData, ...data };
        console.log("Final Submitted Data:", finalData);
        alert("Form submitted! Check console.");
    };

    return (
        <form onSubmit={handleSubmit(step < 2 ? nextStep : onSubmit)}>
            {step === 0 && (
                <div>
                    <h3>Step 1: Personal Data</h3>
                    <input {...register("name")} placeholder="Name" />
                    <p>{errors.name?.message}</p>
                    <input {...register("email")} placeholder="Email" />
                    <p>{errors.email?.message}</p>
                </div>
            )}

            {step === 1 && (
                <div>
                    <h3>Step 2: Shipping Address</h3>
                    <input {...register("city")} placeholder="City" />
                    <p>{errors.city?.message}</p>
                    <input {...register("street")} placeholder="Street" />
                    <p>{errors.street?.message}</p>
                    <input {...register("zip")} placeholder="Zip Code" />
                    <p>{errors.zip?.message}</p>
                </div>
            )}

            {step === 2 && (
                <div>
                    <h3>Step 3: Confirmation</h3>
                    <pre>{JSON.stringify(formData, null, 2)}</pre>
                </div>
            )}

            <div style={{ marginTop: "20px" }}>
                {step > 0 && <button type="button" onClick={prevStep}>Back</button>}
                {step < 2 ? (
                    <button type="submit">Next</button>
                ) : (
                    <button type="submit">Confirm & Send</button>
                )}
            </div>
        </form>
    );
};

export default TaskFour;