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

/** Interactive button */
export const Playground: Story = {
    args: {
        variant: 'primary-green',
        children: 'Button',
        icon: undefined,
        iconPosition: 'left',
    },
};

/** All types of button variants. They all have a different implementation */
export const Variants: Story = {
    render: () => (
        <div style={{ padding: '1rem', backgroundColor: '#fafafa' }}>
            <h3 style={{ marginBottom: '0.5rem' }}>Buttons – Variants</h3>
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns:
                        'repeat(auto-fill, minmax(160px, 1fr))',
                    gap: '1rem',
                }}
            >
                {variants.map((v) => (
                    <div
                        key={v}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '0.5rem',
                        }}
                    >
                        <span style={{ fontSize: '0.875rem', color: '#555' }}>
                            {v}
                        </span>
                        <Button variant={v}>
                            {v.charAt(0).toUpperCase() + v.slice(1)}
                        </Button>
                    </div>
                ))}
            </div>
        </div>
    ),
};

/** Buttons with different icon positions */
export const IconPositions: Story = {
    render: () => (
        <div style={{ padding: '1rem', backgroundColor: '#fafafa' }}>
            <h3 style={{ marginBottom: '1rem' }}>
                Buttons – Icon Left & Icon Right
            </h3>
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '2rem',
                }}
            >
                <div style={{ fontWeight: 'bold', textAlign: 'center' }}>
                    Icon Left
                </div>
                <div style={{ fontWeight: 'bold', textAlign: 'center' }}>
                    Icon Right
                </div>

                {variants.map((v) => (
                    <React.Fragment key={v}>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: '0.5rem',
                                padding: '0.5rem 0',
                            }}
                        >
                            <span
                                style={{ fontSize: '0.875rem', color: '#555' }}
                            >
                                {v}
                            </span>
                            <Button
                                variant={v}
                                icon="arrow-right"
                                iconPosition="left"
                            >
                                {`${
                                    v.charAt(0).toUpperCase() + v.slice(1)
                                } Left`}
                            </Button>
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: '0.5rem',
                                padding: '0.5rem 0',
                            }}
                        >
                            <span
                                style={{ fontSize: '0.875rem', color: '#555' }}
                            >
                                {v}
                            </span>
                            <Button
                                variant={v}
                                icon="arrow-right"
                                iconPosition="right"
                            >
                                {`${
                                    v.charAt(0).toUpperCase() + v.slice(1)
                                } Right`}
                            </Button>
                        </div>
                    </React.Fragment>
                ))}
            </div>
        </div>
    ),
};
