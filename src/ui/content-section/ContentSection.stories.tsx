// src/components/ContentSection/ContentSection.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { ContentSection, ContentSectionProps, Stat } from './ContentSection';
import './ContentSection.scss';

const meta: Meta<typeof ContentSection> = {
    title: 'Sferic/ContentSection',
    component: ContentSection,
    tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof ContentSection>;

// Ejemplo de stats para las historias
const schoolStats: Stat[] = [
    { icon: 'trophy', value: '3‑6', label: 'Anys d’edat' },
    { icon: 'trophy', label: 'Categoria Escola' },
    { icon: 'trophy', label: 'Equips mixtos' },
];

export const Playground: Story = {
    args: {
        title: 'Escola hoquei patins',
        description: (
            <>
                <p>
                    Aprenen a patinar i a utilitzar l’estic i la bola mentre
                    desenvolupen les habilitats bàsiques de l’hoquei patins. Es
                    treballen aspectes tècnics com l’equilibri, la coordinació i
                    l’agilitat, i es fomenten valors com el respecte, l’esforç,
                    el treball en equip i l’autosuperació.
                </p>
                <p>
                    Mitjançant el joc dirigit, adquireixen hàbits i coneixements
                    essencials per a la pràctica de l’hoquei patins.
                </p>
            </>
        ),
        stats: schoolStats,
        linkText: 'Consultar equips',
        linkHref: '/equips',
        imageSrc: '/escola-hoquei-patins.jpg',
        imageAlt: 'Escola hoquei patins',
        imagePosition: 'right',
    },
};

export const WithImageLeft: Story = {
    args: {
        ...Playground.args,
        imagePosition: 'left',
    } as ContentSectionProps,
};

export const WithoutStats: Story = {
    args: {
        title: 'Informació general',
        description: 'Aquí pots posar qualsevol contingut sense estadístiques.',
        linkText: 'Més informació',
        linkHref: '/info',
        imageSrc: '/banners/presentacio-nen.jpg',
        imageAlt: 'Contingut genèric',
        imagePosition: 'right',
    },
};
