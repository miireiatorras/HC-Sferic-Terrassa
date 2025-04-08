import type { Meta, StoryObj } from '@storybook/react';
import { Title } from './Title';
import './Title.scss';

const meta: Meta<typeof Title> = {
    title: 'Sferic/Title',
    component: Title,
};

export default meta;

type Story = StoryObj<typeof Title>;

export const Playground: Story = {
    args: {
        children: 'Calendari',
    },
};
