import React from 'react';
import ImageFileInput from './image_file_input';

export default {
  component:ImageFileInput,
  title:'ImageFileInput',
};

const Template = args => <ImageFileInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  lading:true
};