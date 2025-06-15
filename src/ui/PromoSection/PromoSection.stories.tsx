import type { Meta, StoryObj } from '@storybook/react';
import { PromoSection } from './PromoSection';
import './PromoSection.scss';
import { MemoryRouter } from 'react-router-dom';

const meta: Meta<typeof PromoSection> = {
    title: 'Sferic/UI/PromoSection',
    component: PromoSection,
    tags: ['autodocs'],
    decorators: [
        (Story) => (
            <MemoryRouter>
                <Story />
            </MemoryRouter>
        ),
    ],
    argTypes: {
        imageSrc: { control: 'text', description: 'URL of the top image' },
        imageAlt: { control: 'text', description: 'Alt text for the image' },
        heading: { control: 'text', description: 'Main heading text' },
        children: {
            control: 'text',
            description: 'Body content of the section',
        },
        buttonText: { control: 'text', description: 'CTA button label' },
        onButtonClick: {
            action: 'clicked',
            description: 'Click handler for button',
        },
        buttonHref: {
            control: 'text',
            description: 'If set, renders the button as a link',
        },
    },
};
export default meta;

type Story = StoryObj<typeof PromoSection>;

export const Playground: Story = {
    args: {
        imageSrc: '/inscripcions-full.png',
        imageAlt: 'Season 2024-2025 Flyer',
        heading:
            'Ja estan OBERTES les inscripcions de la TEMPORADA 2025-2026 🎉!',
        children:
            'No et quedis fora! Uneix-te a la família Sferic Hoquei Patins Terrassa i viu la passió de l’hoquei en un ambient únic, amb els millors entrenadors i companys 💪',
        buttonText: "Apunta't ara!",
    },
};
