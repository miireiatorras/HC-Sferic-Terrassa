import { MemoryRouter } from 'react-router-dom';
import { Navbar } from './Navbar';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Navbar> = {
    title: 'Sferic/Navbar',
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

export const Default: Story = {
    args: {
        id: 'main-navbar',
        className: 'custom-navbar',
        'data-testid': 'navbar',
    },
};
