import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import { InfoCard } from './InfoCard';
import { IconNames } from '../Icon/Icon';

describe('InfoCard component', () => {
    const defaultProps = {
        icon: 'location_on' as IconNames,
        text: 'Some info text',
    };

    it('renders the outer container with the block class and supports extra props', () => {
        render(<InfoCard {...defaultProps} data-testid="card" />);
        const card = screen.getByTestId('card');
        expect(card).toHaveClass('InfoCard');
    });

    it('renders the icon wrapper and icon with correct BEM classes', () => {
        const { container } = render(<InfoCard {...defaultProps} />);
        const wrapper = container.querySelector('.InfoCard__icon-wrapper');
        expect(wrapper).toBeInTheDocument();

        const iconElem = container.querySelector('.InfoCard__icon');
        expect(iconElem).toBeInTheDocument();
    });

    it('renders the text inside a <p> with the text element class', () => {
        render(<InfoCard {...defaultProps} />);
        const textElem = screen.getByText(defaultProps.text);
        expect(textElem).toBeInTheDocument();
        expect(textElem.tagName).toBe('P');
        expect(textElem).toHaveClass('InfoCard__text');
    });
});
