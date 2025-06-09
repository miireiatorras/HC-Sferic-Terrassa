import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import { Input, Props as InputProps } from './Input';

describe('Input component', () => {
    const baseProps: Omit<InputProps, 'label' | 'id' | 'name'> = {
        placeholder: 'Enter value',
        fullWidth: false,
        required: false,
    };

    it('renders a text input with label', () => {
        render(
            <Input
                {...baseProps}
                id="test-input"
                name="test"
                label="Test Label"
            />
        );

        // Label is linked to the input
        const label = screen.getByText('Test Label');
        expect(label).toBeInTheDocument();
        expect(label).toHaveAttribute('for', 'test-input');

        // Input element is in the document
        const input = screen.getByRole('textbox');
        expect(input).toBeInTheDocument();
        expect(input).toHaveAttribute('id', 'test-input');
        expect(input).toHaveAttribute('name', 'test');
        expect(input).toHaveAttribute('placeholder', 'Enter value');
        expect(input).not.toHaveAttribute('required');
    });

    it('renders an email input when type="email"', () => {
        render(
            <Input
                {...baseProps}
                id="email-input"
                name="email"
                label="Email"
                type="email"
                required
            />
        );

        const input = screen.getByRole('textbox', { name: /email/i });
        expect(input).toBeInTheDocument();
        expect(input).toHaveAttribute('type', 'email');
        expect(input).toHaveAttribute('required');
    });

    it('renders a textarea when type="textarea"', () => {
        render(
            <Input
                {...baseProps}
                id="desc"
                name="desc"
                label="Description"
                type="textarea"
                placeholder="Describe..."
            />
        );

        const textarea = screen.getByRole('textbox');
        expect(textarea.tagName).toBe('TEXTAREA');
        expect(textarea).toHaveAttribute('id', 'desc');
        expect(textarea).toHaveAttribute('name', 'desc');
        expect(textarea).toHaveAttribute('placeholder', 'Describe...');
    });

    it('applies fullWidth modifier class when fullWidth=true', () => {
        render(
            <Input
                {...baseProps}
                id="wide"
                name="wide"
                label="Wide"
                fullWidth
            />
        );

        const wrapper = screen.getByLabelText('Wide').closest('div');
        expect(wrapper).toHaveClass('Input', 'Input--full');
    });

    it('applies BEM class to control element', () => {
        render(<Input {...baseProps} id="ctrl" name="ctrl" label="Control" />);

        const input = screen.getByRole('textbox');
        expect(input).toHaveClass('Input__control');
    });
});
