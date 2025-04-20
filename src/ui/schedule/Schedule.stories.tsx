import type { Meta, StoryObj } from '@storybook/react';
import { Schedule, ScheduleEvent } from './Schedule';
import './Schedule.scss';

const meta: Meta<typeof Schedule> = {
    title: 'Sferic/Schedule',
    component: Schedule,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Schedule>;

const sampleDays = [
    'Dilluns',
    'Dimarts',
    'Dimecres',
    'Dijous',
    'Divendres',
    'Dissabte',
    'Diumenge',
] as const;

const sampleEvents: ScheduleEvent[] = [
    {
        day: 'Dilluns',
        start: '09:00',
        end: '14:00',
        label: 'ESCOLA – PORTERS',
        category: 'iniciacio',
    },
    {
        day: 'Dilluns',
        start: '17:30',
        end: '18:30',
        label: 'PREBENJAMÍ – BENJAMÍ',
        category: 'iniciacio',
    },
    {
        day: 'Dilluns',
        start: '19:00',
        end: '20:30',
        label: 'JUVENIL – SÈNIORS A I B',
        category: 'formatiu',
    },
    {
        day: 'Dimecres',
        start: '14:00',
        end: '17:30',
        label: 'ESCOLA – PREBENJAMÍ',
        category: 'formatiu',
    },
    {
        day: 'Dimecres',
        start: '19:00',
        end: '20:30',
        label: 'JUVENIL – SÈNIORS A I B',
        category: 'senior',
    },
    {
        day: 'Dissabte',
        start: '09:00',
        end: '23:30',
        label: 'PARTITS',
        category: 'senior',
    },
    {
        day: 'Diumenge',
        start: '09:00',
        end: '14:00',
        label: 'PARTITS',
        category: 'senior',
    },
];

export const Playground: Story = {
    args: {
        days: sampleDays,
        events: sampleEvents,
    },
};

export const AllDaysFull: Story = {
    render: () => <Schedule days={sampleDays} events={sampleEvents} />,
};
