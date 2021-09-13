import React from 'react';
import CardAddForm from './card_add_form';
import ImageFileInput from '../image_file_input/image_file_input';

export default {
  component:CardAddForm,
  title:'CardAddForm',
};

const Template = args => <CardAddForm {...args} />;

export const Default = Template.bind({});
Default.args = {
  FileInput:ImageFileInput
};