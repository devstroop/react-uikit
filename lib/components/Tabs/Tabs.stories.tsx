import type { Meta, StoryObj } from '@storybook/react-vite';
import { Tabs } from './Tabs';

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  args: {
    ariaLabel: 'Tabs',
    items: [
      { key: 'one', label: 'One', content: 'One content' },
      { key: 'two', label: 'Two', content: 'Two content' },
    ],
  },
};
