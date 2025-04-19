import type { Meta, StoryObj } from '@storybook/react';
import { Accordion } from './Accordion';
import './Accordion.scss';

const meta: Meta<typeof Accordion> = {
    title: 'Sferic/Accordion',
    component: Accordion,
};
export default meta;
type Story = StoryObj<typeof Accordion>;

export const Closed: Story = {
    args: {
        title: 'Iniciació',
        children: <p>Contingut ocult quan està tancat.</p>,
    },
};

export const Open: Story = {
    args: {
        title: 'Iniciació',
        children: (
            <p>Ara el contingut està visible perquè obrim l’accordion.</p>
        ),
    },
    //   play: async ({ canvasElement }) => {
    //     // Obert per defecte: podries forçar l’estat si volguessis usar controls.
    //   },
};
