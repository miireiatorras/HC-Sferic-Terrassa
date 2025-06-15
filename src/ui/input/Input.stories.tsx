import type { Meta, StoryObj } from '@storybook/react';
import { Input, Props as InputProps } from './Input';
import './Input.scss';

const meta: Meta<typeof Input> = {
    title: 'Sferic/UI/Input',
    component: Input,
    tags: ['autodocs'],
    argTypes: {
        id: { control: 'text' },
        name: { control: 'text' },
        type: {
            control: 'radio',
            options: ['text', 'email', 'tel', 'textarea'],
        },
        label: { control: 'text' },
        placeholder: { control: 'text' },
        fullWidth: { control: 'boolean' },
    },
};
export default meta;

type Story = StoryObj<typeof Input>;

export const Playground: Story = {
    args: {
        id: 'name',
        name: 'name',
        label: 'Name',
        placeholder: 'Enter your name',
        type: 'text',
        fullWidth: false,
    } as InputProps,
};

/** This story demonstrates the different variants of the Input component */
export const Variants: Story = {
    render: () => {
        const types: InputProps['type'][] = [
            'text',
            'email',
            'tel',
            'textarea',
        ];
        return (
            <div
                style={{
                    padding: '2rem',
                    backgroundColor: '#fafafa',
                    minHeight: '100vh',
                }}
            >
                <h2 style={{ marginBottom: '1.5rem', textAlign: 'center' }}>
                    Input Variants
                </h2>
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns:
                            'repeat(auto-fit, minmax(240px, 1fr))',
                        gap: '2rem',
                    }}
                >
                    {types.map((t) => (
                        <div
                            key={t}
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '0.75rem',
                                padding: '1rem',
                                backgroundColor: '#fff',
                                borderRadius: '8px',
                                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                            }}
                        >
                            <h3
                                style={{
                                    margin: 0,
                                    fontSize: '1rem',
                                    color: '#333',
                                }}
                            >
                                {(t ?? '').charAt(0).toUpperCase() +
                                    (t ?? '').slice(1)}{' '}
                                Input
                            </h3>
                            <Input
                                id={`${t}-input`}
                                name={t as string}
                                type={t}
                                label={`Label (${t})`}
                                placeholder={
                                    t === 'textarea'
                                        ? 'Enter your message...'
                                        : `Enter your ${t}`
                                }
                                fullWidth
                            />
                        </div>
                    ))}
                </div>
            </div>
        );
    },
};
