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

/**
 * * This story demonstrates the default state of the Tab component.
 */
export const Default: Story = {
    args: {
        label: 'Home',
        active: false,
    },
};

/**
 * * This story demonstrates the active state of the Tab component.
 */
export const Active: Story = {
    args: {
        label: 'Home',
        active: true,
    },
};
