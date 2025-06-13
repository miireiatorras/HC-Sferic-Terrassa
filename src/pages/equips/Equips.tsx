import React from 'react';
import data from './equips.json';
import './equips.scss';

import { Helmet } from '@dr.pogodin/react-helmet';
import { Banner } from '@/ui/banner/Banner';
import { TeamCard, TeamCardProps } from '@/ui/team-card/TeamCard';
import { DefaultAccordion } from '@/ui/defaultAccordion/DefaultAccordion';
import {
    registerBlockName,
    BaseComponentProps,
    getBaseComponentProps,
    toBEM,
} from '@/utils';

interface SEO {
    title: string;
    description: string;
    canonical: string;
    og: { url: string; image: string; title: string; description: string };
    twitter: { card: string };
}

interface Category {
    title: string;
    teams: TeamCardProps[];
}

interface EquipsData {
    seo: SEO;
    bannerVariant: string;
    categories: Category[];
}

const { seo, bannerVariant, categories } = data as EquipsData;
const block = registerBlockName('Equips');

export type EquipsProps = BaseComponentProps;

export const Equips: React.FC<EquipsProps> = (props) => {
    return (
        <>
            <Helmet prioritizeSeoTags>
                <title>{seo.title}</title>
                <meta name="description" content={seo.description} />
                <link rel="canonical" href={seo.canonical} />

                <meta property="og:url" content={seo.og.url} />
                <meta property="og:image" content={seo.og.image} />
                <meta property="og:title" content={seo.og.title} />
                <meta property="og:description" content={seo.og.description} />
                <meta name="twitter:card" content={seo.twitter.card} />
            </Helmet>

            <div {...getBaseComponentProps({ ...props, block })}>
                <Banner
                    variant={
                        bannerVariant as React.ComponentProps<
                            typeof Banner
                        >['variant']
                    }
                    className={toBEM({ block, element: 'Banner' })}
                />

                {categories.map((cat, i) => (
                    <DefaultAccordion key={i} title={cat.title}>
                        <div className={toBEM({ block, element: 'grid' })}>
                            {cat.teams.map((team, j) => (
                                <TeamCard key={j} {...team} />
                            ))}
                        </div>
                    </DefaultAccordion>
                ))}
            </div>
        </>
    );
};

export default Equips;
