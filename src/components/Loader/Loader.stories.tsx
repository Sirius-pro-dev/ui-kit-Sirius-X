import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Loader from './Loader';

export default {
  title: 'ReactComponentLibrary/Loader',
  component: Loader,
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;

export const PreLoader = Template.bind({});
PreLoader.args = {};
