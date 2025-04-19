import { Footer } from './Footer';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Footer> = {
    title: 'Sferic/Footer',
    component: Footer,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Footer>;

export const Default: Story = {
    args: {
        id: 'main-footer',
    },
};
