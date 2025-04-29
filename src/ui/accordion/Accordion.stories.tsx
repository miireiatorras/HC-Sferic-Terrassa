import type { Meta, StoryObj } from '@storybook/react';
import { Accordion } from './Accordion';
import './Accordion.scss';

const meta: Meta<typeof Accordion> = {
    title: 'Sferic/Accordion',
    component: Accordion,
    tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Accordion>;

export const Playground: Story = {
    args: {
        title: 'Title',
        children: <p>This is the content of the accordion.</p>,
    },
};
