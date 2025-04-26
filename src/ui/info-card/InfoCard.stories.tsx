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

export const Default: Story = {
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

export const WithFamilyIcon: Story = {
    args: {
        icon: 'family_restroom',
        text: (
            <>
                L’SFERIC és una de les entitats de referència i realitza una
                tasca <strong>educativa, social, cultural i esportiva</strong>{' '}
                d’important rellevància, esdevenint element clau en la cohesió
                del barri.
            </>
        ),
    },
};
