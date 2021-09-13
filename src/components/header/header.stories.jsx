import React from 'react';
import Header from './header';

export default {
  component:Header,
  title:'Header',
};

const Template = args => <Header {...args} />;

export const Login = Template.bind({});
Login.args = {
  onLogout:false
};

export const Logout = Template.bind({});
Logout.args = {
  onLogout:true
};