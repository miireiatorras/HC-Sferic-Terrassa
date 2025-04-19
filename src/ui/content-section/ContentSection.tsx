import React from 'react';
import {
    toBEM,
    registerBlockName,
    BaseComponentProps,
    getBaseComponentProps,
} from '@/utils';
import { Icon, IconNames } from '@/ui/Icon/Icon';

import './ContentSection.scss';

export type Stat = {
    icon: IconNames;
    value?: string | React.ReactNode;
    label: string;
};

export type ContentSectionProps = BaseComponentProps & {
    title: string;
    description?: React.ReactNode;
    stats?: Stat[];
    linkText?: string;
    linkHref?: string;
    imageSrc: string;
    imageAlt?: string;
    /** 'right' (default) o 'left' */
    imagePosition?: 'left' | 'right';
};

const block = registerBlockName('ContentSection');

export const ContentSection = ({
    title,
    description,
    stats = [],
    linkText,
    linkHref,
    imageSrc,
    imageAlt,
    imagePosition = 'right',
    ...props
}: ContentSectionProps) => {
    // BEM modifier per canviar l'ordre de flex
    const modifiers = imagePosition === 'left' ? ['image-left'] : [];

    return (
        <section {...getBaseComponentProps({ ...props, block, modifiers })}>
            <div className={toBEM({ block, element: 'container' })}>
                {/* TEXT */}
                <div className={toBEM({ block, element: 'content' })}>
                    <h2 className={toBEM({ block, element: 'title' })}>
                        {title}
                    </h2>
                    {description && (
                        <div
                            className={toBEM({ block, element: 'description' })}
                        >
                            {description}
                        </div>
                    )}

                    {stats.length > 0 && (
                        <div className={toBEM({ block, element: 'stats' })}>
                            {stats.map((s, i) => (
                                <div
                                    key={i}
                                    className={toBEM({
                                        block,
                                        element: 'stat',
                                    })}
                                >
                                    <Icon
                                        icon={s.icon}
                                        size="lg"
                                        className={toBEM({
                                            block,
                                            element: 'statIcon',
                                        })}
                                    />
                                    <div
                                        className={toBEM({
                                            block,
                                            element: 'statText',
                                        })}
                                    >
                                        {s.value !== undefined && (
                                            <span
                                                className={toBEM({
                                                    block,
                                                    element: 'statValue',
                                                })}
                                            >
                                                {s.value}
                                            </span>
                                        )}
                                        <span
                                            className={toBEM({
                                                block,
                                                element: 'statLabel',
                                            })}
                                        >
                                            {s.label}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {linkText && linkHref && (
                        <a
                            href={linkHref}
                            className={toBEM({ block, element: 'link' })}
                        >
                            {linkText}
                        </a>
                    )}
                </div>

                <div className={toBEM({ block, element: 'image' })}>
                    <img src={imageSrc} alt={imageAlt ?? title} />
                </div>
            </div>
        </section>
    );
};
