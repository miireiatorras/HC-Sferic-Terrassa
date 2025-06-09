import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import { TimelineCard, TimelineCardProps } from './TimelineCard';

describe('TimelineCard component', () => {
    const defaultProps: TimelineCardProps = {
        year: '2021',
        title: 'Product Launch',
        description: 'We launched the first version of our product.',
    };

    it('renders the year, title, and description', () => {
        render(<TimelineCard {...defaultProps} data-testid="card" />);

        expect(screen.getByText(defaultProps.year)).toBeInTheDocument();
        expect(screen.getByText(defaultProps.title)).toBeInTheDocument();
        expect(screen.getByText(defaultProps.description)).toBeInTheDocument();
    });

    it('applies the correct BEM classes', () => {
        render(<TimelineCard {...defaultProps} data-testid="card" />);

        const card = screen.getByTestId('card');
        expect(card).toHaveClass('TimelineCard');

        const header = card.querySelector('.TimelineCard__header');
        expect(header).toBeInTheDocument();

        const yearEl = screen.getByText(defaultProps.year);
        expect(yearEl).toHaveClass('TimelineCard__year');

        const titleEl = screen.getByText(defaultProps.title);
        expect(titleEl).toHaveClass('TimelineCard__title');

        const descEl = screen.getByText(defaultProps.description);
        expect(descEl).toHaveClass('TimelineCard__description');
    });
});
