import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect, vi } from 'vitest';

vi.mock('@/ui/Icon/Icon', () => ({
    __esModule: true,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Icon: ({ icon, className, ...rest }: any) => (
        <svg data-testid={`icon-${icon}`} className={className} {...rest} />
    ),
}));

import { Button } from './Button';

describe('Button component', () => {
    it('renders children and default variant classes', () => {
        render(<Button data-testid="btn">Click me</Button>);
        const btn = screen.getByTestId('btn');
        expect(btn.tagName).toBe('BUTTON');
        expect(btn).toHaveClass('Button', 'Button--primary-green');
        expect(btn).toHaveTextContent('Click me');
    });

    it('forwards onClick to button', () => {
        const onClick = vi.fn();
        render(
            <Button data-testid="btn" onClick={onClick}>
                Press
            </Button>
        );
        const btn = screen.getByTestId('btn');
        fireEvent.click(btn);
        expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('renders as a link when `as="a"` and applies the `to` prop', () => {
        render(
            <Button as="a" to="/home" data-testid="lnk">
                Home
            </Button>
        );
        const link = screen.getByTestId('lnk');
        expect(link.tagName).toBe('A');
        expect(link).toHaveAttribute('to', '/home');
        expect(link).toHaveClass('Button', 'Button--primary-green');
    });

    it('renders an icon when `icon` prop is provided and applies iconPosition classes', () => {
        render(
            <Button
                icon="location_on"
                iconPosition="right"
                data-testid="btn-icon"
            >
                Label
            </Button>
        );
        const btn = screen.getByTestId('btn-icon');
        expect(btn).toHaveClass('Button--with-icon', 'Button--icon-right');

        const iconContainer = btn.querySelector('.Button__icon-container');
        expect(iconContainer).toBeInTheDocument();

        const svg = screen.getByTestId('icon-location_on');
        expect(svg).toBeInTheDocument();
        expect(svg).toHaveClass('Button__icon');
    });

    it('forwards arbitrary props to the rendered element', () => {
        render(
            <Button data-testid="btn-attrs" aria-label="button-label">
                Test
            </Button>
        );
        const btn = screen.getByTestId('btn-attrs');
        expect(btn).toHaveAttribute('title', 'my-button');
        expect(btn).toHaveAttribute('aria-label', 'button-label');
    });
});
