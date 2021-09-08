import React from 'react';
import Button from './button';

export default {
  component: Button,
  title: '버튼',
};

const Template = args => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  buttonName: '디폴트 버튼이름'
};