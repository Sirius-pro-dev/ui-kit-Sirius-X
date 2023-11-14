import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import UIModal from './UIModal';

export default {
  title: 'ReactComponentLibrary/UIModal',
  component: UIModal,
} as ComponentMeta<typeof UIModal>;

const Template: ComponentStory<typeof UIModal> = (args) => (
  <UIModal {...args} />
);

export const UIModalInstance = Template.bind({});
UIModalInstance.args = {
      title: "Информация о событии", 
      subtitle: "Присутствующие группы", 
      list: ["K07121/1", "K07121/2", "K07121/3", "K07121/4"],
};
