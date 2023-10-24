import React, { FC } from 'react';

interface InputFieldProps {
    type: string;
    placeholder: string;
    label: string;
}

const InputField: FC<InputFieldProps> = ({ type, placeholder, label }) => (
    <>
        <label className="input-field__label">{label} <span className="input-field__star">*</span></label>
        <input type={type} className="input-field__input" placeholder={placeholder} />
    </>
);

export default InputField;
