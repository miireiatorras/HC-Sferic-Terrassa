import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import { DefaultAccordion } from './DefaultAccordion';

describe('DefaultAccordion component', () => {
    const titleText = 'Section Title';
    const contentText = 'Hidden Content';

    it('renders with content visible by default', () => {
        render(
            <DefaultAccordion title={titleText}>{contentText}</DefaultAccordion>
        );

        // Header button with title
        const headerButton = screen.getByRole('button', { name: titleText });
        expect(headerButton).toBeInTheDocument();
        expect(headerButton).toHaveClass('DefaultAccordion__header');

        // Content should be visible initially
        const content = screen.getByText(contentText);
        expect(content).toBeInTheDocument();
        expect(content.parentElement).toHaveClass('DefaultAccordion__content');
    });

    it('toggles content visibility when header is clicked', () => {
        render(
            <DefaultAccordion title={titleText}>{contentText}</DefaultAccordion>
        );

        const headerButton = screen.getByRole('button', { name: titleText });

        // First click: collapse (hide content)
        fireEvent.click(headerButton);
        expect(screen.queryByText(contentText)).toBeNull();

        // Second click: expand (show content)
        fireEvent.click(headerButton);
        expect(screen.getByText(contentText)).toBeInTheDocument();
    });

    it('applies the "open" modifier class when expanded and removes it when collapsed', () => {
        const { container } = render(
            <DefaultAccordion title={titleText}>{contentText}</DefaultAccordion>
        );
        const wrapper = container.firstChild as HTMLElement;

        // Initially open
        expect(wrapper).toHaveClass('DefaultAccordion--open');

        // Collapse
        const headerButton = screen.getByRole('button', { name: titleText });
        fireEvent.click(headerButton);
        expect(wrapper).not.toHaveClass('DefaultAccordion--open');

        // Expand again
        fireEvent.click(headerButton);
        expect(wrapper).toHaveClass('DefaultAccordion--open');
    });
});
