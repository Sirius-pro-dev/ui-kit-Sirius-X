import React, { FC } from 'react';

interface CheckboxProps {
    id: string;
    label: string;
}

const Checkbox: FC<CheckboxProps> = ({ id, label }) => (
    <div className="checkbox">
        <input id={id} type="checkbox" className="checkbox__input"/>
        <label htmlFor={id} className="checkbox__info">{label}</label>
    </div>
);

export default Checkbox;
