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
        const img = screen.getByAltText(defaultProps.title) as HTMLImageElement;
        expect(img).toBeInTheDocument();
        expect(img.src).toContain(defaultProps.imageSrc);

        expect(screen.getByText(defaultProps.title)).toBeInTheDocument();
        defaultProps.members.forEach((name) => {
            expect(screen.getByText(name)).toBeInTheDocument();
        });
    });

    it('opens a modal with the full-size image when clicking the image wrapper', () => {
        const { container } = render(<TeamCard {...defaultProps} />);
        expect(container.querySelector('.ImageModal')).toBeNull();

        const wrapper = container.querySelector('.TeamCard__imageWrapper')!;
        fireEvent.click(wrapper);

        const modal = container.querySelector('.ImageModal')!;
        expect(modal).toBeInTheDocument();

        const modalImg = within(modal as HTMLElement).getByAltText(
            defaultProps.title
        ) as HTMLImageElement;
        expect(modalImg).toBeInTheDocument();
        expect(modalImg.src).toContain(defaultProps.imageSrc);
    });

    it('closes the modal when clicking on the modal overlay', () => {
        const { container } = render(<TeamCard {...defaultProps} />);
        fireEvent.click(container.querySelector('.TeamCard__imageWrapper')!);
        const modal = container.querySelector('.ImageModal')!;
        expect(modal).toBeInTheDocument();

        fireEvent.click(modal);
        expect(container.querySelector('.ImageModal')).toBeNull();
    });

    it('applies BEM classes correctly', () => {
        const { container } = render(
            <TeamCard {...defaultProps} data-testid="card" />
        );
        const card = screen.getByTestId('card');
        expect(card).toHaveClass('TeamCard');

        const wrapper = container.querySelector('.TeamCard__imageWrapper')!;
        expect(wrapper).toBeInTheDocument();

        const listItems = container.querySelectorAll('.TeamCard__overlayItem');
        expect(listItems).toHaveLength(defaultProps.members.length);
    });
});
