import type { Meta, StoryObj } from '@storybook/react';
import { Input, Props as InputProps } from './Input';
import './Input.scss';

const meta: Meta<typeof Input> = {
    title: 'Sferic/Input',
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

export const Default: Story = {
    args: {
        id: 'name',
        name: 'name',
        label: 'Name',
        placeholder: 'Enter your name',
        type: 'text',
        fullWidth: false,
    } as InputProps,
};

export const FullWidth: Story = {
    args: {
        ...Default.args,
        fullWidth: true,
    } as InputProps,
};

export const TextArea: Story = {
    args: {
        id: 'message',
        name: 'message',
        label: 'Message',
        placeholder: 'Your message...',
        type: 'textarea',
        fullWidth: true,
    } as InputProps,
};
