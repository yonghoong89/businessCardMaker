import React from 'react';
import AuthService from '../../service/auth_service';
import Preview from './preview';


export default {
  component:Preview,
  title:'Previewpage',
};

const Template = args => <Preview {...args} />;

export const Default = Template.bind({});
Default.args = {
  cards:{
    1628513466875:{
      company: "1",
      email: "1",
      fileName: "",
      fileURL: "",
      id: 1628513466875,
      message: "1",
      name: "1",
      theme: "light",
      title: "1",
    }
  }
};