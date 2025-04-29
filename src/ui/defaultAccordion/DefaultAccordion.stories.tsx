import type { Meta, StoryObj } from '@storybook/react';
import { DefaultAccordion } from './DefaultAccordion';
import './DefaultAccordion.scss';

const meta: Meta<typeof DefaultAccordion> = {
    title: 'Sferic/DefaultAccordion',
    component: DefaultAccordion,
    tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof DefaultAccordion>;

export const Playground: Story = {
    args: {
        title: 'Title',
        children: <p>This is the content of the DefaultAccordion.</p>,
    },
};
