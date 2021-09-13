import React from 'react';
import AuthService from '../../service/auth_service';
import Login from './login';


export default {
  component:Login,
  title:'Loginpage',
};
const authService = new AuthService();

const Template = args => <Login {...args} />;

export const Default = Template.bind({});
Default.args = {
  authService : authService
};