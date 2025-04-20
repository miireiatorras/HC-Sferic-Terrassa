import type { Meta, StoryObj } from '@storybook/react';
import { MemberCard } from './MemberCard';
import './MemberCard.scss';

const meta: Meta<typeof MemberCard> = {
    title: 'Sferic/MemberCard',
    component: MemberCard,
    tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof MemberCard>;

export const Default: Story = {
    args: {
        initials: 'EJ',
        name: 'Elena Jordán',
    },
};
