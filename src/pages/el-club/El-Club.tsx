import React from 'react';
import data from './el-club.json';
import './el-club.scss';

import { Helmet } from '@dr.pogodin/react-helmet';
import {
    toBEM,
    registerBlockName,
    BaseComponentProps,
    getBaseComponentProps,
} from '@/utils';
import { Banner, BannerVariant } from '@/ui/banner/Banner';
import Title from '@/ui/titles/Title';
import { Card } from '@/ui/card/Card';
import { OrganisationTabs } from '@/features/organisation-tabs/OrganisationTabs';
import { ImageScrollGallery } from '@/ui/ImageScrollGallery/ImageScrollGallery';
import { TimelineCard } from '@/ui/timelineCard/TimelineCard';
import { InfoCard } from '@/ui/info-card/InfoCard';
import { IconNames } from '@/ui/Icon/Icon';

interface SEO {
    title: string;
    description: string;
    canonical: string;
    og: { url: string; image: string; title: string; description: string };
    twitter: { card: string };
}
interface MissionCard {
    number: string;
    title: string;
    content: string;
}
interface TimelineEntry {
    year: string;
    title: string;
    description: string;
}
interface InfoEntry {
    icon: IconNames;
    text: string;
}

interface ElClubData {
    seo: SEO;
    bannerVariant: string;
    missionSection: { title: string; cards: MissionCard[] };
    historySection: {
        title: string;
        images: string[];
        timeline: TimelineEntry[];
    };
    infoGrid: InfoEntry[];
    organisationSection: {
        title: string;
        paragraphs: string[];
        showTabs: boolean;
    };
}

const {
    seo,
    bannerVariant,
    missionSection,
    historySection,
    infoGrid,
    organisationSection,
} = data as ElClubData;

export type ElClubProps = BaseComponentProps;
const block = registerBlockName('ElClub');

export const ElClub: React.FC<ElClubProps> = (props) => {
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

            <Banner variant={bannerVariant as BannerVariant} />
            <Title>{missionSection.title}</Title>

            <section {...getBaseComponentProps({ ...props, block })}>
                <div className={toBEM({ block, element: 'grid' })}>
                    {missionSection.cards.map((card, i) => (
                        <Card key={i} number={card.number} title={card.title}>
                            <span
                                dangerouslySetInnerHTML={{
                                    __html: card.content,
                                }}
                            />
                        </Card>
                    ))}
                </div>

                <Title>{historySection.title}</Title>
                <ImageScrollGallery images={historySection.images} />

                <div className={toBEM({ block, element: 'timeline' })}>
                    {historySection.timeline.map((entry, i) => (
                        <TimelineCard
                            key={i}
                            year={entry.year}
                            title={entry.title}
                            description={entry.description}
                        />
                    ))}
                </div>

                <div className={toBEM({ block, element: 'info-grid' })}>
                    {infoGrid.map((item, i) => (
                        <InfoCard
                            key={i}
                            icon={item.icon}
                            text={
                                <span
                                    dangerouslySetInnerHTML={{
                                        __html: item.text,
                                    }}
                                />
                            }
                        />
                    ))}
                </div>

                <Title>{organisationSection.title}</Title>
                {organisationSection.paragraphs.map((p, i) => (
                    <p key={i} className={toBEM({ block, element: 'p' })}>
                        {p}
                    </p>
                ))}

                {organisationSection.showTabs && <OrganisationTabs />}
            </section>
        </>
    );
};

export default ElClub;
