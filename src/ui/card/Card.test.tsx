import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import { Card, CardProps } from './Card';

describe('Card component', () => {
    const defaultProps: CardProps = {
        number: '42',
        title: 'Answer to Everything',
        children: <p>Some body content</p>,
    };

    it('renders the number and title', () => {
        render(<Card {...defaultProps} />);
        const numberEl = screen.getByText(defaultProps.number);
        const titleEl = screen.getByText(defaultProps.title);

        expect(numberEl).toBeInTheDocument();
        expect(numberEl).toHaveClass('Card__number');

        expect(titleEl).toBeInTheDocument();
        expect(titleEl.tagName).toBe('H3');
        expect(titleEl).toHaveClass('Card__title');
    });

    it('renders children inside the body element', () => {
        render(<Card {...defaultProps} />);
        const child = screen.getByText('Some body content');
        expect(child).toBeInTheDocument();

        const body = child.closest('div');
        expect(body).toHaveClass('Card__body');
    });

    it('applies the block class and forwards props', () => {
        render(
            <Card {...defaultProps} data-testid="card" title="custom-title" />
        );
        const wrapper = screen.getByTestId('card');
        expect(wrapper).toHaveClass('Card');
        expect(wrapper).toHaveAttribute('title', 'custom-title');
    });
});
