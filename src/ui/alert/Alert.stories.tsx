import type { Meta, StoryObj } from '@storybook/react';
import { Alert } from './Alert';
import * as iconNames from '@/config/icons/constants';

import './Alert.scss';

const meta: Meta<typeof Alert> = {
    title: 'Sferic/UI/Alert',
    component: Alert,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: { type: 'radio' },
            description: 'Visual style of the alert',
        },
        icon: {
            control: { type: 'select', options: Object.values(iconNames) },
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

/** This story demonstrates the different variants of the Alert component */
export const Variants: Story = {
    render: () => (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                padding: '1rem',
                backgroundColor: '#f5f5f5',
            }}
        >
            <Alert variant="success" icon={'mingcute_group-3-fill'}>
                Alert variant="success": Operació completada amb èxit.
            </Alert>
            <Alert variant="info">
                Alert variant="info": Aquesta és una informació important.
            </Alert>
            <Alert variant="warning">
                Alert variant="warning": Atenció! Cal la teva revisió.
            </Alert>
            <Alert variant="error">
                Alert variant="error": S'ha produït un error. Torna-ho a
                intentar.
            </Alert>
            <Alert variant="open-in-new-tab" icon="launch">
                Alert variant="open-in-new-tab": Obre en una nova pestanya.
            </Alert>
        </div>
    ),
};
