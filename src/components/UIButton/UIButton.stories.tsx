import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import UIButton from './UIButton';

export default {
  title: 'ReactComponentLibrary/UIButton',
  component: UIButton,
} as ComponentMeta<typeof UIButton>;

const Template: ComponentStory<typeof UIButton> = (args) => (
  <UIButton {...args} />
);

export const UIButtonInstance = Template.bind({});
UIButtonInstance.args = {
  label: 'Подключиться',
};
