import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Upload from './Upload';

export default {
  title: 'Upload',
  component: Upload,
} as ComponentMeta<typeof Upload>;

const Template: ComponentStory<typeof Upload> = (args) => <Upload />;

export const TestUpload = Template.bind({});
TestUpload.args = {};
