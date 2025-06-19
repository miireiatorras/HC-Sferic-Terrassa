import type { Meta, StoryObj } from '@storybook/react';
import './Equips.scss';
import { TeamCard } from '@/ui/team-card/TeamCard';
import { DefaultAccordion } from '@/ui/defaultAccordion/DefaultAccordion';

const meta: Meta = {
    title: 'Sferic/Features/Equips',
    component: TeamCard,
};
export default meta;
type Story = StoryObj;

const sampleTeams = [
    {
        imageSrc: '/fotos-grups/Escola-min.webp',
        title: 'Escola',
        members: [
            'Aimar Suárez',
            'Alma Ejea',
            'Lluc Soler',
            'Mar Villalba',
            'Anna',
        ],
    },
    {
        imageSrc: '/fotos-grups/Prebenjami-min.webp',
        title: 'Prebenjamí',
        members: [
            'Ibai Mirabet',
            'Clara López',
            'Abril Tallon',
            'Pol Reguant',
            'Aina Rediu',
            'Paula Río',
            'Ariadna Mirabet',
            'Roc Villalba',
        ],
    },
    {
        imageSrc: '/fotos-grups/BenjamiB-min.webp',
        title: 'Benjamí B',
        members: [
            'Paula Río',
            'Abril Tallon',
            'Clara López',
            'Dídac Río',
            'Marina Barrio',
            'Samuel Crespo',
            'Àlex Osuna',
            'Emilio Osuna',
        ],
    },
];

export const Playground: Story = {
    render: () => (
        <div className="Equips">
            <DefaultAccordion title="Iniciació">
                <div className="Equips__grid">
                    {sampleTeams.map((t, i) => (
                        <TeamCard
                            key={i}
                            imageSrc={t.imageSrc}
                            title={t.title}
                            members={t.members}
                        />
                    ))}
                </div>
            </DefaultAccordion>
        </div>
    ),
};
