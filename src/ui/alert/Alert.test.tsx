import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect, vi } from 'vitest';

vi.mock('../Icon/Icon', () => ({
    __esModule: true,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Icon: ({ icon, className, ...rest }: any) => (
        <svg data-testid={`icon-${icon}`} className={className} {...rest} />
    ),
}));

import { Alert } from './Alert';

describe('Alert component', () => {
    it('renders children inside the content element with correct class', () => {
        render(<Alert>Test message</Alert>);
        const content = screen.getByText('Test message');
        expect(content).toBeInTheDocument();
        expect(content).toHaveClass('Alert__content');
    });

    it('renders the default "launch" icon when no icon prop is provided', () => {
        render(<Alert>Message</Alert>);
        const icon = screen.getByTestId('icon-launch');
        expect(icon).toBeInTheDocument();
        expect(icon).toHaveClass('Alert__icon');
    });

    it('renders the provided icon when icon prop is set', () => {
        render(<Alert icon="location_on">Location message</Alert>);
        const icon = screen.getByTestId('icon-location_on');
        expect(icon).toBeInTheDocument();
        expect(icon).toHaveClass('Alert__icon');
    });

    it('applies the default "info" variant class', () => {
        render(<Alert>Info message</Alert>);
        const wrapper = screen.getByText('Info message').parentElement;
        expect(wrapper).toHaveClass('Alert', 'Alert--info');
    });

    it('applies a custom variant class when variant prop is provided', () => {
        render(<Alert variant="error">Error occurred</Alert>);
        const wrapper = screen.getByText('Error occurred').parentElement;
        expect(wrapper).toHaveClass('Alert', 'Alert--error');
    });

    it('forwards arbitrary props to the wrapper element', () => {
        render(<Alert data-testid="alert">Hello</Alert>);
        const wrapper = screen.getByTestId('alert');
        expect(wrapper).toHaveAttribute('title', 'my-alert');
    });
});
