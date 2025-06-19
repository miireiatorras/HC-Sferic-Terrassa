import { MemoryRouter } from 'react-router-dom';
import { Navbar } from './Navbar';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Navbar> = {
    title: 'Sferic/Features/Navbar',
    component: Navbar,
    decorators: [
        (Story) => (
            <MemoryRouter>
                <Story />
            </MemoryRouter>
        ),
    ],
};

export default meta;

type Story = StoryObj<typeof Navbar>;

export const Playground: Story = {
    args: {
        id: 'main-navbar',
        className: 'custom-navbar',
        'data-testid': 'navbar',
    },
};
