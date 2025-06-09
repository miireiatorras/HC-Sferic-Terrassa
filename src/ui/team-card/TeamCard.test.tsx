// src/ui/team-card/TeamCard.test.tsx
import { render, screen, fireEvent, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import { TeamCard, TeamCardProps } from './TeamCard';

describe('TeamCard component', () => {
    const defaultProps: TeamCardProps = {
        imageSrc: '/images/team.jpg',
        title: 'Awesome Team',
        members: ['Alice', 'Bob', 'Charlie'],
    };

    it('renders the team image and title overlay', () => {
        render(<TeamCard {...defaultProps} />);
        // Image thumbnail
        const img = screen.getByAltText(defaultProps.title) as HTMLImageElement;
        expect(img).toBeInTheDocument();
        expect(img.src).toContain(defaultProps.imageSrc);

        // Overlay title and list items are present
        expect(screen.getByText(defaultProps.title)).toBeInTheDocument();
        defaultProps.members.forEach((name) => {
            expect(screen.getByText(name)).toBeInTheDocument();
        });
    });

    it('opens a modal with the full-size image when clicking the image wrapper', () => {
        const { container } = render(<TeamCard {...defaultProps} />);
        // Initially no modal
        expect(container.querySelector('.ImageModal')).toBeNull();

        // Click on the image wrapper
        const wrapper = container.querySelector('.TeamCard__imageWrapper')!;
        fireEvent.click(wrapper);

        // Modal appears
        const modal = container.querySelector('.ImageModal')!;
        expect(modal).toBeInTheDocument();

        // Modal image has same src and alt
        const modalImg = within(modal as HTMLElement).getByAltText(
            defaultProps.title
        ) as HTMLImageElement;
        expect(modalImg).toBeInTheDocument();
        expect(modalImg.src).toContain(defaultProps.imageSrc);
    });

    it('closes the modal when clicking on the modal overlay', () => {
        const { container } = render(<TeamCard {...defaultProps} />);
        // Open modal
        fireEvent.click(container.querySelector('.TeamCard__imageWrapper')!);
        const modal = container.querySelector('.ImageModal')!;
        expect(modal).toBeInTheDocument();

        // Click on modal background to close
        fireEvent.click(modal);
        expect(container.querySelector('.ImageModal')).toBeNull();
    });

    it('applies BEM classes correctly', () => {
        const { container } = render(
            <TeamCard {...defaultProps} data-testid="card" />
        );
        const card = screen.getByTestId('card');
        expect(card).toHaveClass('TeamCard');

        // Image wrapper
        const wrapper = container.querySelector('.TeamCard__imageWrapper')!;
        expect(wrapper).toBeInTheDocument();

        // Overlay list items
        const listItems = container.querySelectorAll('.TeamCard__overlayItem');
        expect(listItems).toHaveLength(defaultProps.members.length);
    });
});
