import type { Meta, StoryObj } from '@storybook/react';
import { Title } from './Title';
import './Title.scss';

const meta: Meta<typeof Title> = {
    title: 'Sferic/Title',
    component: Title,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Title>;

export const Playground: Story = {
    args: {
        children: 'Calendari',
        variant: 'default',
    },
};

export const Variant: Story = {
    render: () => (
        <div
            style={{
                backgroundColor: '#f0f0f0',
                padding: '1rem',
            }}
        >
            <Title variant="default">Calendari</Title>
            <Title variant="light">Calendari</Title>
        </div>
    ),
};
