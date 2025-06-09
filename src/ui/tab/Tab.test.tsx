import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect, vi } from 'vitest';
import { Tab, TabProps } from './Tab';

describe('Tab component', () => {
    const defaultProps: TabProps = {
        label: 'Home',
    };

    it('renders the label text inside a button', () => {
        render(<Tab {...defaultProps} />);
        const button = screen.getByRole('button', { name: defaultProps.label });
        expect(button).toBeInTheDocument();
        expect(button).toHaveTextContent(defaultProps.label);
        expect(button).toHaveAttribute('type', 'button');
    });

    it('applies the default BEM class for the item element', () => {
        render(<Tab {...defaultProps} data-testid="tab" />);
        const button = screen.getByTestId('tab');
        expect(button).toHaveClass('Tab__item');
    });

    it('adds the active modifier class when active is true', () => {
        render(<Tab {...defaultProps} active data-testid="tab" />);
        const button = screen.getByTestId('tab');
        expect(button).toHaveClass('Tab__item', 'Tab__item--active');
    });

    it('calls the onClick handler when clicked', () => {
        const onClick = vi.fn();
        render(<Tab {...defaultProps} onClick={onClick} data-testid="tab" />);
        const button = screen.getByTestId('tab');
        fireEvent.click(button);
        expect(onClick).toHaveBeenCalledTimes(1);
    });
});
