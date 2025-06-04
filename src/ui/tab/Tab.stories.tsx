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
export const Playground: Story = {
    args: {
        label: 'Home',
        active: false,
    },
};

/**
 * * This story demonstrates the active state of the Tab component.
 */
export const Variants = () => (
    <div
        style={{
            display: 'flex',
            gap: '1rem',
            padding: '1rem',
            backgroundColor: '#f0f0f0',
        }}
    >
        <Tab label="Home" active={true} />
        <Tab label="Profile" active={false} />
        <Tab label="Settings" active={false} />
    </div>
);
