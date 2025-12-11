import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Click me',
    size: "medium",
  },
};

export const LongText: Story = {
  args: {
    children: "これは非常に長いテキストのボタンです。100文字程度の長さになるように、適切な文字数を設定してください。実際のユースケースでは、このような長いテキストが表示される場合もあります。",
    size: "medium",
  },
};

export const WithConsoleLog: Story = {
  args: {
    children: "Click me",
    size: "medium",
    onClick: () => {
      console.log("Hello!!");
    }
  }
}
