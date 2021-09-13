import React from 'react';
import Button from './button';

export default {
  component: Button,
  title: 'Button',
};

const Template = args => <Button {...args} />;

export const Delete = Template.bind({});
Delete.args = {
  name: 'Delete'
};

export const Add = Template.bind({});
Add.args = {
  name: 'Add'
};