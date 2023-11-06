import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import UICheckBox from './UICheckBox';

export default {
  title: 'ReactComponentLibrary/UICheckBox',
  component: UICheckBox,
} as ComponentMeta<typeof UICheckBox>;

const Template: ComponentStory<typeof UICheckBox> = (args) => (
  <UICheckBox {...args} />
);

export const UICheckBoxInstance = Template.bind({});
UICheckBoxInstance.args = {
      id: "check",
      label: "Даю согласие на обработку своих персональных данных"
};
