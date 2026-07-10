import { useForm } from "react-hook-form"


export default function TemplateTwo() {
  const { register, handleSubmit } = useForm()
  const onSubmit = (data) => console.log(data)


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName")} />
      <select {...register("gender")}>
        <option value="мужсчина">мужсчина</option>
        <option value="женсщина">женсщина</option>
        <option value="собака">собака</option>
      </select>
      <input type="submit" />
    </form>
  )
}