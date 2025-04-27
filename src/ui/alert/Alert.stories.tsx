import type { Meta, StoryObj } from '@storybook/react';
import { Alert } from './Alert';
import * as iconNames from '@/config/icons/constants';

import './Alert.scss';

const meta: Meta<typeof Alert> = {
    title: 'Sferic/Alert',
    component: Alert,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: { type: 'radio' },
            description: 'Visual style of the alert',
        },
        icon: {
            icon: { control: 'select', options: Object.values(iconNames) },
            description: 'Name of the icon to display',
        },
        children: {
            control: 'text',
            description: 'The message content of the alert',
        },
    },
};
export default meta;

type Story = StoryObj<typeof Alert>;

export const Success: Story = {
    args: {
        variant: 'success',
        children:
            'El material està disponible a la venta a través de la plataforma externa Playoff. Clicant al botó "Compra Ara", et redirigirà a la seva pàgina web.',
    },
};

export const Info: Story = {
    args: {
        variant: 'info',
        children: 'This is an informational message.',
    },
};

export const Warning: Story = {
    args: {
        variant: 'warning',
        children: 'Be careful! Something might need your attention.',
    },
};

export const Error: Story = {
    args: {
        variant: 'error',
        children: 'An error occurred. Please try again later.',
    },
};

export const OpenInNewTab: Story = {
    args: {
        variant: 'open-in-new-tab',
        icon: 'launch',
        children:
            'El material està disponible a la venta a través de la plataforma externa Playoff. Clicant al botó "Compra Ara", et redirigirà a la seva pàgina web.',
    },
};
