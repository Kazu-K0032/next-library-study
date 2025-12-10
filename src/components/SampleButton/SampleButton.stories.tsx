import type { Meta, StoryObj } from '@storybook/react';
import { SampleButton } from './SampleButton';

const meta: Meta<typeof SampleButton> = {
  title: 'Components/SampleButton',
  component: SampleButton,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Primary: Story = {
  args: {
    label: "Primary",
    size: "medium",
  },
};
