import {
    registerBlockName,
    BaseComponentProps,
    getBaseComponentProps,
} from '@/utils';

import './Equips.scss';
import { Banner } from '@/ui/banner/Banner';
import { Accordion } from '@/ui/accordion/Accordion';
import { TeamCard } from '@/ui/team-card/TeamCard';

const initiacioTeams = [
    {
        imageSrc: '/img/prebenjami.jpg',
        title: 'Escola',
        members: [
            'Ivet Esteve',
            'Marina Sans',
            'Èlia',
            'Adrián',
            'Guillem Giménez',
        ],
    },
    {
        imageSrc: '/img/levants.jpg',
        title: 'Prebenjamí',
        members: [
            'Ivet Esteve',
            'Marina Sans',
            'Èlia',
            'Adrián',
            'Guillem Giménez',
        ],
    },
    {
        imageSrc: '/img/other.jpg',
        title: 'Benjamí B',
        members: [
            'Ivet Esteve',
            'Marina Sans',
            'Èlia',
            'Adrián',
            'Guillem Giménez',
        ],
    },
];
const formatiuTeams = [
    {
        imageSrc: '/img/other.jpg',
        title: 'Benjamí A',
        members: [
            'Ivet Esteve',
            'Marina Sans',
            'Èlia',
            'Adrián',
            'Guillem Giménez',
        ],
    },
    {
        imageSrc: '/img/other.jpg',
        title: 'Juvenil',
        members: [
            'Ivet Esteve',
            'Marina Sans',
            'Èlia',
            'Adrián',
            'Guillem Giménez',
        ],
    },
    {
        imageSrc: '/img/other.jpg',
        title: 'Infantil',
        members: [
            'Ivet Esteve',
            'Marina Sans',
            'Èlia',
            'Adrián',
            'Guillem Giménez',
        ],
    },
    {
        imageSrc: '/img/other.jpg',
        title: 'Aleví',
        members: [
            'Ivet Esteve',
            'Marina Sans',
            'Èlia',
            'Adrián',
            'Guillem Giménez',
        ],
    },
];
const seniorTeams = [
    {
        imageSrc: '/img/other.jpg',
        title: 'Sènior masculí A',
        members: [
            'Ivet Esteve',
            'Marina Sans',
            'Èlia',
            'Adrián',
            'Guillem Giménez',
        ],
    },
    {
        imageSrc: '/img/other.jpg',
        title: 'Sènior masculí A',
        members: [
            'Ivet Esteve',
            'Marina Sans',
            'Èlia',
            'Adrián',
            'Guillem Giménez',
        ],
    },
    {
        imageSrc: '/img/other.jpg',
        title: 'Sènior femení',
        members: [
            'Ivet Esteve',
            'Marina Sans',
            'Èlia',
            'Adrián',
            'Guillem Giménez',
        ],
    },
    {
        imageSrc: '/img/other.jpg',
        title: 'Veterans',
        members: [
            'Ivet Esteve',
            'Marina Sans',
            'Èlia',
            'Adrián',
            'Guillem Giménez',
        ],
    },
];

export type EquipsProps = BaseComponentProps & {};

const block = registerBlockName('Equips');
export const Equips = ({ ...props }: EquipsProps) => {
    return (
        <div {...getBaseComponentProps({ ...props, block })}>
            <Banner variant="equips" />
            <div className="Equips">
                <Accordion title="Iniciació">
                    <div className="Equips__grid">
                        {initiacioTeams.map((t, i) => (
                            <TeamCard
                                key={i}
                                imageSrc={t.imageSrc}
                                title={t.title}
                                members={t.members}
                            />
                        ))}
                    </div>
                </Accordion>
                <Accordion title="Hoquei formatiu">
                    <div className="Equips__grid">
                        {formatiuTeams.map((t, i) => (
                            <TeamCard
                                key={i}
                                imageSrc={t.imageSrc}
                                title={t.title}
                                members={t.members}
                            />
                        ))}
                    </div>
                </Accordion>
                <Accordion title="Sèniors">
                    <div className="Equips__grid">
                        {seniorTeams.map((t, i) => (
                            <TeamCard
                                key={i}
                                imageSrc={t.imageSrc}
                                title={t.title}
                                members={t.members}
                            />
                        ))}
                    </div>
                </Accordion>
            </div>
        </div>
    );
};
