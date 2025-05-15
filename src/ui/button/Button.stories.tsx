import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import './Button.scss';
import * as iconNames from '@/config/icons/constants';
import { IconNames } from '@/ui/Icon/Icon';

const variants = [
    'primary-green',
    'primary-white',
    'secondary-green',
    'secondary-white',
    'text',
    'error',
    'warning',
    'info',
] as const;

const iconOptions = [undefined, ...(Object.values(iconNames) as IconNames[])];

const meta: Meta<typeof Button> = {
    title: 'Sferic/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: variants,
        },
        icon: {
            control: 'select',
            options: iconOptions,
        },
        iconPosition: {
            control: 'radio',
            options: ['left', 'right'],
        },
        children: {
            control: 'text',
        },
        onClick: { action: 'clicked' },
    },
};

export default meta;
type Story = StoryObj<typeof Button>;

/** Historia interactiva */
export const Playground: Story = {
    args: {
        variant: 'primary-green',
        children: 'Button',
        icon: undefined,
        iconPosition: 'left',
    },
};

/** Todas las variantes sin icono */
export const Variants: Story = {
    render: () => (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
            {variants.map((v) => (
                <Button key={v} variant={v}>
                    {v.charAt(0).toUpperCase() + v.slice(1)}
                </Button>
            ))}
        </div>
    ),
};

/** Con icono y posición configurada */
export const WithIconAndPositions: Story = {
    render: () => (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
            {variants.map((v) => (
                <React.Fragment key={v}>
                    <Button variant={v} icon="arrow-right" iconPosition="left">
                        {v} L
                    </Button>
                    <Button variant={v} icon="arrow-right" iconPosition="right">
                        {v} R
                    </Button>
                </React.Fragment>
            ))}
        </div>
    ),
};
