import * as yup from "yup";
import { useForm, useFieldArray } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

// Регулярное выражение для формата +7 (XXX) XXX-XX-XX
const phoneRegExp = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/;

const schema = yup.object({
    phones: yup.array().of(
        yup.object({
            number: yup
                .string()
                .required("Phone number is required")
                .matches(phoneRegExp, "Format must be: +99365770777"),
        })
    ),
});

const TaskFive = () => {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            phones: [{ number: "+99362406346" }],
        },
    });

    const { fields, append, remove } = useFieldArray({
        control,
        name: "phones",
    });

    const onSubmit = (data) => {
        console.log("Submitted Phone Numbers:", data.phones.map(p => p.number));
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h3>Manage Phone Numbers:</h3>
            
            {fields.map((field, index) => (
                <div key={field.id} style={{ marginBottom: "15px" }}>
                    <input
                        {...register(`phones.${index}.number`)}
                        placeholder="+99362545649"
                    />
                    <button type="button" onClick={() => remove(index)} style={{ marginLeft: "10px" }}>
                        Delete
                    </button>
                    {errors.phones?.[index]?.number && (
                        <p style={{ color: "red", margin: "5px 0" }}>
                            {errors.phones[index].number.message}
                        </p>
                    )}
                </div>
            ))}

            <button
                type="button"
                onClick={() => append({ number: "" })}
                style={{ marginTop: "10px" }}
            >
                Add Number
            </button>

            <div style={{ marginTop: "20px" }}>
                <input type="submit" value="Submit Form" />
            </div>
        </form>
    );
};

export default TaskFive;