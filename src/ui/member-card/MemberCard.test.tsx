import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import { MemberCard } from './MemberCard';

describe('MemberCard component', () => {
    const defaultProps = {
        initials: 'EJ',
        name: 'Elena Jordán',
    };

    it('renders the member name', () => {
        render(<MemberCard {...defaultProps} />);
        expect(screen.getByText(defaultProps.name)).toBeInTheDocument();
    });

    it('renders the member initials', () => {
        render(<MemberCard {...defaultProps} />);
        expect(screen.getByText(defaultProps.initials)).toBeInTheDocument();
    });

    it('applies the block and element BEM classes', () => {
        render(<MemberCard {...defaultProps} data-testid="card" />);

        const card = screen.getByTestId('card');
        expect(card).toHaveClass('MemberCard');

        const avatar = screen.getByText(defaultProps.initials);
        expect(avatar).toHaveClass('MemberCard__avatar');

        const nameElem = screen.getByText(defaultProps.name);
        expect(nameElem).toHaveClass('MemberCard__name');
    });
});
