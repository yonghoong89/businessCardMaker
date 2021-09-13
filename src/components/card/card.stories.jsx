import React, { memo } from 'react';
import Card from './card';

export default {
  component:Card,
  title:'Card',
};

const Template = args => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
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


export const Dark = Template.bind({});
Dark.args = {
  card:{
    ...Default.args.card,
    theme: "dark",
  }
};

export const Colorful = Template.bind({});
Colorful.args = {
  card:{
    ...Default.args.card,
    theme: "colorful",
  }
};

