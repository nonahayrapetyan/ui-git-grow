import type { Meta, StoryObj } from '@storybook/react';

import { Button, TButtonProps } from '../index';

const meta = {
  title: 'Button',
  component: Button,
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['default', 'primary', 'ghost', 'dashed', 'link', 'text'],
      },
    },
    size: {
      control: { type: 'select', options: ['large', 'middle', 'small'] },
    },
    shape: {
      control: { type: 'select', options: ['circle', 'round'] },
    },
    block: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    loading: {
      control: { type: 'boolean' },
    },
    icon: {
      control: { type: 'text' },
    },
    onClick: { action: 'clicked' },
    children: {
      control: { type: 'text' },
    },
  },
} satisfies Meta<TButtonProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    disabled: false,
    type: 'primary',
    children: 'Button',
    // size: 'large',
    color: 'red',
    onClick: () => alert('clicked'),
  },
};
