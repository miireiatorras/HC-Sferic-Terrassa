import type { Meta, StoryObj } from '@storybook/react';
import { ScrollButton } from './ScrollButton';
import './ScrollButton.scss';

const meta: Meta<typeof ScrollButton> = {
    title: 'Sferic/UI/ScrollButton',
    component: ScrollButton,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
};

export default meta;
type Story = StoryObj<typeof ScrollButton>;

export const Playground: Story = {
    args: {},
};
