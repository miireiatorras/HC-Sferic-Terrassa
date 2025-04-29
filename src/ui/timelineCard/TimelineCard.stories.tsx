import type { Meta, StoryObj } from '@storybook/react';
import { TimelineCard } from './TimelineCard';
import './TimelineCard.scss';

const meta: Meta<typeof TimelineCard> = {
    title: 'Sferic/TimelineCard',
    component: TimelineCard,
    tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof TimelineCard>;

export const Default: Story = {
    args: {
        year: '1932',
        title: 'Title',
        description: 'Foundation year',
    },
};
