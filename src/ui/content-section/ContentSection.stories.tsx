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

const schoolStats: Stat[] = [
    { icon: 'trophy', value: '3-6', label: 'Anys d’edat' },
    { icon: 'trophy', label: 'Categoria Escola' },
    { icon: 'trophy', label: 'Equips mixtos' },
];

const baseArgs: ContentSectionProps = {
    title: 'Escola hoquei patins',
    description: (
        <>
            <p>
                Aprenen a patinar i a utilitzar l’estic i la bola mentre
                desenvolupen les habilitats bàsiques de l’hoquei patins. Es
                treballen aspectes tècnics com l’equilibri, la coordinació i
                l’agilitat, i es fomenten valors com el respecte, l’esforç, el
                treball en equip i l’autosuperació.
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
};

export const Playground: Story = {
    args: {
        ...baseArgs,
    },
};

export const Variants: Story = {
    render: () => (
        <div
            style={{
                padding: '1rem',
                backgroundColor: '#f9f9f9',
                boxSizing: 'border-box',
            }}
        >
            <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                ContentSection Variants
            </h2>
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr',
                    gap: '2rem',
                    width: '100%',
                }}
            >
                <div>
                    <h3 style={{ marginBottom: '0.75rem' }}>
                        Image Right (with stats)
                    </h3>
                    <ContentSection {...baseArgs} />
                </div>

                <div>
                    <h3 style={{ marginBottom: '0.75rem' }}>
                        Image Left (with stats)
                    </h3>
                    <ContentSection {...baseArgs} imagePosition="left" />
                </div>
            </div>
        </div>
    ),
};
