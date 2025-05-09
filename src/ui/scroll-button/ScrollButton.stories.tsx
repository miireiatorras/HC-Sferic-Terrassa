import type { Meta, StoryObj } from '@storybook/react';
import { ScrollButton } from './ScrollButton';
import './ScrollButton.scss';

const meta: Meta<typeof ScrollButton> = {
    title: 'Sferic/ScrollButton',
    component: ScrollButton,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
};

export default meta;
type Story = StoryObj<typeof ScrollButton>;

export const Default: Story = {
    args: {},
};

export const WithChildren: Story = {
    args: {
        children: <span>Scroll</span>,
    },
};
