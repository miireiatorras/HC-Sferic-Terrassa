import type { Meta, StoryObj } from '@storybook/react';
import { InfoCard } from './InfoCard';
import './InfoCard.scss';

const meta: Meta<typeof InfoCard> = {
    title: 'Sferic/InfoCard',
    component: InfoCard,
    tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof InfoCard>;

export const Playground: Story = {
    args: {
        icon: 'archive',
        text: (
            <>
                Els orígens del club estan <strong>molt vinculats</strong> al
                barri de Ca n’Aurell de Terrassa i en concret a l’activitat de
                la seva <strong>parròquia</strong>, la Sagrada Família...{' '}
                <strong>SFERIC</strong>.
            </>
        ),
    },
};
