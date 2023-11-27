import React, { FC } from 'react';
import './UIFormInput.scss';

export interface InputFieldProps {
    type: string;
    placeholder: string;
    label: string;
}

const UIFormInput: FC<InputFieldProps> = ({ type, placeholder, label }) => (
    <div className='input-field__container'>
        <label className="input-field__label">{label} <span className="input-field__star">*</span></label>
        <input type={type} className="input-field__input" placeholder={placeholder} />
    </div>
);

export default UIFormInput;
