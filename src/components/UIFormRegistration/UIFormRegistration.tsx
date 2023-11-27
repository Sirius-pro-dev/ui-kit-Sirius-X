import React, { FC } from 'react';
import './UIFormRegistration.scss';
import InputField from './InputField';
import Checkbox from './Checkbox';

export interface UIFormRegistrationProps {
  title: string;
  fields: {
      type: string;
      placeholder: string;
      label: string;
  }[];
  checkbox: {
      id: string;
      label: string;
  };
  buttonText: string;
}

const UIFormRegistration: FC<UIFormRegistrationProps> = ({ title, fields, checkbox, buttonText }) => (
  <form className="registration-form">
      <h2 className="registration-form__title">{title}</h2>
      {fields.map((field, index) => (
          <InputField key={index} type={field.type} placeholder={field.placeholder} label={field.label} />
      ))}
      <Checkbox id={checkbox.id} label={checkbox.label}/>
      <button className="registration-form__button">{buttonText}</button>
  </form>
);


export default UIFormRegistration;
