import { render, screen, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import { Schedule, ScheduleEvent, ScheduleProps } from './Schedule';

describe('Schedule component', () => {
    const days = ['Mon', 'Tue', 'Wed'] as const;
    const events: ScheduleEvent[] = [
        {
            day: 'Mon',
            start: '09:00',
            end: '10:00',
            label: 'Meeting',
            category: 'work',
        },
        {
            day: 'Tue',
            start: '11:00',
            end: '12:30',
            label: 'Lunch',
            category: 'personal',
        },
    ];
    const props: ScheduleProps = { days, events };

    it('renders a column header for each day', () => {
        render(<Schedule {...props} />);
        const headerRow = screen.getByRole('row', { name: '' });
        days.forEach((day) => {
            expect(within(headerRow).getByText(day)).toBeInTheDocument();
        });
    });

    it('renders time intervals in the first column', () => {
        render(<Schedule {...props} />);
        expect(screen.getByText('09:00 – 10:00')).toBeInTheDocument();
        expect(screen.getByText('10:00 – 11:00')).toBeInTheDocument();
        expect(screen.getByText('11:00 – 12:30')).toBeInTheDocument();
    });

    it('renders event cells with correct rowSpan and label', () => {
        render(<Schedule {...props} />);
        const meetingCell = screen.getByText('Meeting').closest('td');
        expect(meetingCell).toHaveAttribute('rowspan', '1');
        expect(meetingCell).toHaveClass(
            'Schedule__tdEvent',
            'Schedule__tdEvent--work'
        );

        const lunchCell = screen.getByText('Lunch').closest('td');
        expect(lunchCell).toHaveAttribute('rowspan', '1');
        expect(lunchCell).toHaveClass(
            'Schedule__tdEvent',
            'Schedule__tdEvent--personal'
        );
    });

    it('renders empty cells for slots without events', () => {
        render(<Schedule {...props} />);
        const emptyCells = screen
            .getAllByRole('cell')
            .filter((td) => td.className.includes('Schedule__tdEmpty'));
        expect(emptyCells.length).toBeGreaterThan(0);
    });
});
