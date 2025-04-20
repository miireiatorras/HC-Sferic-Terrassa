import type { Meta, StoryObj } from '@storybook/react';
import { Tab } from './Tab';
import './Tab.scss';

const meta: Meta<typeof Tab> = {
    title: 'Sferic/Tab',
    component: Tab,
    tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Tab>;

export const Default: Story = {
    args: {
        label: 'Home',
        active: false,
    },
};

export const Active: Story = {
    args: {
        label: 'Home',
        active: true,
    },
};
