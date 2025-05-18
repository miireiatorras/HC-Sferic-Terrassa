import { Helmet } from '@dr.pogodin/react-helmet';
import type { BannerVariant } from '@/ui/banner/Banner';
import seccionsJson from './seccions.json';
import { Banner } from '@/ui/banner/Banner';
import Title from '@/ui/titles/Title';
import {
    registerBlockName,
    BaseComponentProps,
    getBaseComponentProps,
    toBEM,
} from '@/utils';
import { ContentSection, Stat } from '@/ui/content-section/ContentSection';
import { Button, ButtonProps } from '@/ui/button/Button';
import './seccions.scss';

interface SectionData {
    title: string;
    description: string;
    stats: Stat[];
    linkText: string;
    linkHref: string;
    imageSrc: string;
    imagePosition: 'left' | 'right';
}

interface CTAButton {
    text: string;
    href: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    variant?: ButtonProps<any>['variant'];
}

interface CTAData {
    heading: string;
    text: string;
    buttons: CTAButton[];
}

interface SeccionsData {
    bannerVariant: BannerVariant;
    header: string;
    sections: SectionData[];
    cta: CTAData;
}

const seccionsData = seccionsJson as SeccionsData;

export type SeccionsProps = BaseComponentProps;

const block = registerBlockName('Seccions');

export const Seccions = (props: SeccionsProps) => {
    const { bannerVariant, header, sections, cta } = seccionsData;
    const description = `${header} del HC SFERIC Terrassa. Descobreix les nostres seccions, estadístiques i enllaços d'interès.`;

    return (
        <>
            <Helmet prioritizeSeoTags>
                <title>HC SFERIC Terrassa – Seccions</title>
                <meta name="description" content={description} />

                <link
                    rel="canonical"
                    href="https://oksfericterrassa.netlify.app/seccions"
                />

                <meta
                    property="og:url"
                    content="https://oksfericterrassa.netlify.app/seccions"
                />
                <meta
                    property="og:image"
                    content="https://oksfericterrassa.netlify.app/preview-seccions.png"
                />
                <meta
                    property="og:title"
                    content={`HC SFERIC Terrassa – ${header}`}
                />
                <meta property="og:description" content={description} />

                <meta name="twitter:card" content="summary_large_image" />
            </Helmet>

            <div {...getBaseComponentProps({ ...props, block })}>
                <Banner
                    variant={bannerVariant}
                    className={toBEM({ block, element: 'Banner' })}
                />
                <Title>{header}</Title>

                {sections.map((sec, idx) => (
                    <ContentSection
                        key={idx}
                        title={sec.title}
                        description={sec.description
                            .split('\n\n')
                            .map((p, pIdx) => (
                                <p key={pIdx}>{p}</p>
                            ))}
                        stats={sec.stats}
                        linkText={sec.linkText}
                        linkHref={sec.linkHref}
                        imageSrc={sec.imageSrc}
                        imagePosition={sec.imagePosition}
                    />
                ))}

                <div className={toBEM({ block, element: 'gradient' })}>
                    <h2 className={toBEM({ block, element: 'h2' })}>
                        {cta.heading}
                    </h2>
                    <p className={toBEM({ block, element: 'p' })}>{cta.text}</p>
                    <div
                        className={toBEM({
                            block,
                            element: 'buttons-container',
                        })}
                    >
                        {cta.buttons.map((btn, bIdx) => (
                            <Button
                                key={bIdx}
                                className={toBEM({ block, element: 'Button' })}
                                variant={btn.variant}
                                onClick={() =>
                                    (window.location.href = btn.href)
                                }
                            >
                                {btn.text}
                            </Button>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Seccions;
