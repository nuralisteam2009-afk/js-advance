import { useForm } from "react-hook-form"


export default function TemplateOne() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()


    const onSubmit = (data) => console.log('data',data)


    console.log('watch name',watch("name")) 

    console.log('error', errors)


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input defaultValue="Nurali" {...register("name")} />
            <input {...register("secondName", { required: true })} />
            {errors.secondName && <span>This field is required</span>}
            <input type="submit" />
        </form>
    )
}
