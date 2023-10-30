import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import UIFormRegistration from './UIFormRegistration';

export default {
  title: 'ReactComponentLibrary/UIFormRegistration',
  component: UIFormRegistration,
} as ComponentMeta<typeof UIFormRegistration>;

const Template: ComponentStory<typeof UIFormRegistration> = (args) => (
  <UIFormRegistration {...args} />
);

export const UIFormRegistrationInstance = Template.bind({});
UIFormRegistrationInstance.args = {
  title: "РЕГИСТРАЦИЯ",
  fields: [
      { type: "email", placeholder: "Email", label: "Email" },
      { type: "text", placeholder: "Фамилия", label: "Фамилия" },
      { type: "text", placeholder: "Имя", label: "Имя" },
      { type: "text", placeholder: "Отчество", label: "Отчество" },
      { type: "password", placeholder: "Пароль", label: "Пароль" },
      { type: "password", placeholder: "Повторите пароль", label: "Пароль еще раз" }
  ],
  checkbox: {
      id: "check",
      label: "Даю согласие на обработку своих персональных данных"
  },
  buttonText: "Зарагестрироваться"
};
