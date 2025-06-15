import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from './Icon';
import './Icon.scss';
import * as iconNames from '@/config/icons/constants';

const sizes = ['xs', 'sm', 'md', 'ml', 'lg', 'xl'] as const;

const meta: Meta<typeof Icon> = {
    title: 'Sferic/UI/Icon',
    component: Icon,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Icon>;

export const Playground: Story = {
    args: {
        icon: 'email',
        size: 'md',
    },
    argTypes: {
        icon: { control: 'select', options: Object.values(iconNames) },
        size: {
            control: 'select',
            options: sizes,
        },
    },
};

export const Sizes = () => (
    <div>
        {sizes.map((size) => (
            <div key={size} style={{ margin: '10px', display: 'inline-block' }}>
                <Icon icon="email" size={size} />
                <p>{size}</p>
            </div>
        ))}
    </div>
);

export const Variants = () => (
    <div
        style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
            gap: '20px',
        }}
    >
        {Object.values(iconNames).map((icon) => (
            <div key={icon} style={{ textAlign: 'center' }}>
                <Icon icon={icon} size="md" />
                <p style={{ fontSize: '12px', marginTop: '5px' }}>{icon}</p>
            </div>
        ))}
    </div>
);
