import type { Meta, StoryObj } from '@storybook/react';
import { TeamCard } from './TeamCard';
import './TeamCard.scss';

const meta: Meta<typeof TeamCard> = {
    title: 'Sferic/TeamCard',
    component: TeamCard,
};
export default meta;
type Story = StoryObj<typeof TeamCard>;

export const Playground: Story = {
    args: {
        imageSrc: '/images/team-sample.jpg',
        title: 'Prebenjamí',
        members: [
            'Ivet Esteve',
            'Marina Sans',
            'Èlia',
            'Adrián',
            'Guillem Giménez',
        ],
    },
};
