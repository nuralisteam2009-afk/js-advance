import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

// Схема валидации
const schema = yup.object({
    category: yup.string().required("Пожалуйста, выберите категорию"),
});

// Кастомный компонент селекта
const CustomSelect = ({ value, onChange, options }) => (
    <select value={value} onChange={(e) => onChange(e.target.value)} style={{ padding: '5px', width: '200px' }}>
        <option value="">Выберите...</option>
        {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
                {opt.label}
            </option>
        ))}
    </select>
);

const TaskSeven = () => {
    const {
        handleSubmit,
        control, // Control нужен для связи Controller с формой
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const options = [
        { value: "web", label: "Веб-разработка" },
        { value: "mobile", label: "Мобильная разработка" },
        { value: "design", label: "Дизайн" },
    ];

    const onSubmit = (data) => {
        // Выводим данные в консоль при успешной отправке
        console.log("Выбранные данные:", data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h3>Форма с кастомным компонентом</h3>

            <div style={{ marginBottom: "15px" }}>
                <label>Категория: </label>
                
                {/* Controller связывает наш CustomSelect с логикой react-hook-form */}
                <Controller
                    name="category"
                    control={control}
                    render={({ field }) => (
                        <CustomSelect 
                            {...field} 
                            options={options} 
                        />
                    )}
                />

                {/* Отображение ошибки */}
                {errors.category && (
                    <p style={{ color: "red" }}>{errors.category.message}</p>
                )}
            </div>

            <input type="submit" value="Отправить" />
        </form>
    );
};

export default TaskSeven;