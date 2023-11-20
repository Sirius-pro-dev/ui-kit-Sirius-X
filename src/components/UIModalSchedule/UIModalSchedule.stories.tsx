import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import UIModalSchedule from './UIModalSchedule';

export default {
  title: 'ReactComponentLibrary/UIModalSchedule',
  component: UIModalSchedule,
} as ComponentMeta<typeof UIModalSchedule>;

const Template: ComponentStory<typeof UIModalSchedule> = (args) => (
  <UIModalSchedule {...args} />
);

export const UIModalScheduleInstance = Template.bind({});
UIModalScheduleInstance.args = {
      title: 'Информация о событии',
      data: ['22.09.2023(ПТ)', '09:00-10:30', 'Физическая культура_ОГСЭ', 'Практические занятия'],
};
