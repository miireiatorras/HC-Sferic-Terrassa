import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { ScrollButton } from './ScrollButton';

describe('ScrollButton component', () => {
    beforeEach(() => {
        window.scrollTo = vi.fn();
    });

    it('renders children and the scroll trigger button with default aria-label', () => {
        render(<ScrollButton>Content</ScrollButton>);
        expect(screen.getByText('Content')).toBeInTheDocument();

        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
        expect(button).toHaveAttribute('aria-label', 'Scroll to bottom');
        expect(button).toHaveClass('ScrollButton__trigger');
    });

    it('scrolls to bottom when clicked initially', () => {
        // Mock window and document dimensions
        Object.defineProperty(window, 'innerHeight', {
            configurable: true,
            value: 300,
        });
        Object.defineProperty(document.documentElement, 'scrollHeight', {
            configurable: true,
            value: 1000,
        });

        render(<ScrollButton />);
        const button = screen.getByRole('button');

        fireEvent.click(button);
        expect(window.scrollTo).toHaveBeenCalledWith({
            top: 1000,
            behavior: 'smooth',
        });
    });

    it('updates to "Scroll to top" after scrolling to bottom and scrolls to top on click', () => {
        const innerHeight = 400;
        const scrollHeight = 900;

        Object.defineProperty(window, 'innerHeight', {
            configurable: true,
            value: innerHeight,
        });
        Object.defineProperty(document.documentElement, 'scrollHeight', {
            configurable: true,
            value: scrollHeight,
        });

        render(<ScrollButton />);
        Object.defineProperty(window, 'scrollY', {
            configurable: true,
            value: scrollHeight - innerHeight + 1,
        });
        fireEvent(window, new Event('scroll'));

        const button = screen.getByRole('button');
        expect(button).toHaveAttribute('aria-label', 'Scroll to top');

        fireEvent.click(button);
        expect(window.scrollTo).toHaveBeenCalledWith({
            top: 0,
            behavior: 'smooth',
        });
    });
});
