import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import UIFormInput from './UIFormInput';

export default {
  title: 'ReactComponentLibrary/UIFormInput',
  component: UIFormInput,
} as ComponentMeta<typeof UIFormInput>;

const Template: ComponentStory<typeof UIFormInput> = (args) => (
  <UIFormInput {...args} />
);

export const UIFormInputInstance = Template.bind({});
UIFormInputInstance.args = {
      type: "email", 
      placeholder: "Email", 
      label: "Email",
};
