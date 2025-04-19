// src/components/Banner/Banner.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Banner } from './Banner';
import './Banner.scss';

const meta: Meta<typeof Banner> = {
    title: 'Sferic/Banner',
    component: Banner,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Banner>;

/** Un Banner individual editable via la prop `variant` */
export const Playground: Story = {
    args: {
        variant: 'contacte',
    },
};

/** Mostra tots els variants en columnes per veure’ls de cop */
export const AllVariants: Story = {
    render: () => (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '2rem',
                padding: '2rem',
            }}
        >
            <Banner variant="contacte" />
            <Banner variant="equips" />
            <Banner variant="el-club" />
            <Banner variant="botiga" />
            <Banner variant="inscriu-te" />
            <Banner variant="seccions" />
            <Banner variant="horari" />
        </div>
    ),
};
