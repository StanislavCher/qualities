import React from "react";
import SelectField from "../common/form/selectField";
import TextField from "../common/form/textField";
import colors from "../../constants/colors.json";
import useForm from "../../hooks/useForm";

const CreateForm = ({ onSubmit }) => {
    const { handleSubmit, form, handleChange } = useForm({}, onSubmit)

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                label='Наименование'
                name='name'
                onChange={handleChange}
                value={form.name || ""}
            />
            <SelectField
                label='Цвет'
                name='color'
                options={colors}
                onChange={handleChange}
                value={form.color || ""}
            />
            <button className='btn btn-primary'>Submit</button>
        </form>
    );
};

export default CreateForm;
