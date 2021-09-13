import React from 'react';
import CardEditForm from './card_edit_form';
import ImageFileInput from '../image_file_input/image_file_input';

export default {
  component:CardEditForm,
  title:'CardEditForm',
};

const Template = args => <CardEditForm {...args} />;

export const Default = Template.bind({});
Default.args = {
  FileInput:ImageFileInput,
  card:{
    company: "회사명",
    email: "이메일",
    fileName: "파일이름",
    message: "메세지",
    name: "이름",
    theme: "light",
    title: "타이틀",
  }
};