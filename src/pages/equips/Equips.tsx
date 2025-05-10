import { Helmet } from '@dr.pogodin/react-helmet';
import {
    registerBlockName,
    BaseComponentProps,
    getBaseComponentProps,
    toBEM,
} from '@/utils';

import './equips.scss';
import { Banner } from '@/ui/banner/Banner';
import { TeamCard } from '@/ui/team-card/TeamCard';
import { DefaultAccordion } from '@/ui/defaultAccordion/DefaultAccordion';

const initiacioTeams = [
    {
        imageSrc: '/fotos-grups/Escola.jpg',
        title: 'Escola',
        members: [
            'Michael Brown',
            'David Brown',
            'Emily Miller',
            'Alex Sanchez',
            'Emily Williams',
        ],
    },
    {
        imageSrc: '/fotos-grups/Prebenjami.jpg',
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
        imageSrc: '/fotos-grups/BenjamiB.jpg',
        title: 'Benjamí B',
        members: [
            'Michael Brown',
            'David Brown',
            'Emily Miller',
            'Alex Sanchez',
            'Emily Williams',
        ],
    },
];

const formatiuTeams = [
    {
        imageSrc: '/fotos-grups/BenjamiA.jpg',
        title: 'Benjamí A',
        members: [
            'Ivet Esteve',
            'Marina Sans',
            'Èlia',
            'Adrián',
            'Guillem Giménez',
            'Oliver García',
        ],
    },
    {
        imageSrc: '/fotos-grups/Alevi.jpg',
        title: 'Aleví',
        members: [
            'Emma Giménez',
            'Marina Álvarez',
            'Laia Bellmunt',
            'Llorenç Salvador',
            'Arlet',
            'Laia Álvarez',
            'Mireia Ribas',
            'Miquel Sánchez',
            'Mima Campos',
            'Melanie Garcia',
        ],
    },
    {
        imageSrc: '/fotos-grups/Infantil.jpg',
        title: 'Infantil',
        members: [
            'Laia Bellmunt',
            'Llorenç Salvador',
            'Emma Giménez',
            'Luna',
            'Arlet',
            'Mireia Ribas',
            'Mima Campos',
            'Laia Álvarez',
            'Quim Agudo',
            'Marina Álvarez',
        ],
    },
    {
        imageSrc: '/fotos-grups/Juvenil.jpg',
        title: 'Juvenil',
        members: [
            'Jan Bellmunt',
            'Iu Campos',
            'Luna',
            'Júlia Codinas',
            'Quim Agudo',
            'Emma Escobar',
        ],
    },
];

const seniorTeams = [
    {
        imageSrc: '/fotos-grups/SeniorMasculiB.jpg',
        title: 'Sènior masculí B',
        members: [
            'Pol Fargas',
            'Roger Sallent',
            'Genís Martínez',
            'Pol Costa',
            'Albert Segura',
            'Enric Amadeo',
            'Jaume Collell',
        ],
    },
    {
        imageSrc: '/fotos-grups/SeniorMasculiA.jpg',
        title: 'Sènior masculí A',
        members: [
            'Iu Campos',
            'David Boces',
            'Ivan Alegre',
            'Nacho Hortal',
            'Jan Bellmunt',
            'Adri Hortal',
            'Gerard Puig',
            'Guiu Puignenllat',
            'Júlia Codinas',
        ],
    },
    {
        imageSrc: '/fotos-grups/SeniorFemeni.jpg',
        title: 'Sènior femení',
        members: [
            'Maite Rosique',
            'Gemma Cortés',
            'Lara',
            'Laura Manzanares',
            'Emma Escobar',
            'Alba',
            'Ingrid Mariscal',
            'Marta Alonso',
            'Ona Puignenllat',
            'Maria',
        ],
    },
    {
        imageSrc: '/fotos-grups/Veterans.jpg',
        title: 'Veterans',
        members: [
            'Joan Morral',
            'Sergio Gatón',
            'Iu Campos',
            'Francesc Cortés',
            'Carlos Moya',
            'Marc Esteve',
            'Oscar Anglada',
            'Albert De Rueda',
            'Santi Lleonart',
            'Edu Villalba',
        ],
    },
];

export type EquipsProps = BaseComponentProps;

const block = registerBlockName('Equips');

export const Equips = ({ ...props }: EquipsProps) => {
    const description = `Descobreix tots els equips del HC SFERIC Terrassa: iniciació, formació i sèniors. Consulta jugadors, fotos i detalls de cada categoria.`;

    return (
        <>
            <Helmet prioritizeSeoTags>
                <title>HC SFERIC Terrassa – Equips</title>
                <meta name="description" content={description} />

                <link
                    rel="canonical"
                    href="https://oksfericterrassa.netlify.app/equips"
                />

                <meta
                    property="og:url"
                    content="https://oksfericterrassa.netlify.app/equips"
                />
                <meta
                    property="og:image"
                    content="https://oksfericterrassa.netlify.app/preview-equips.png"
                />
                <meta
                    property="og:title"
                    content="HC SFERIC Terrassa – Equips"
                />
                <meta property="og:description" content={description} />

                <meta name="twitter:card" content="summary_large_image" />
            </Helmet>

            <div {...getBaseComponentProps({ ...props, block })}>
                <Banner
                    variant="equips"
                    className={toBEM({ block, element: 'Banner' })}
                />
                <div className="Equips">
                    <DefaultAccordion title="Iniciació">
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
                    </DefaultAccordion>
                    <DefaultAccordion title="Hoquei formatiu">
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
                    </DefaultAccordion>
                    <DefaultAccordion title="Sèniors">
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
                    </DefaultAccordion>
                </div>
            </div>
        </>
    );
};

export default Equips;
