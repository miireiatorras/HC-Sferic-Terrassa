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
    /** Array of icons to display. */
    icons?: IconNames[];
    /** Single icon to display. */
    icon?: IconNames;
    /** Value of the stat. */
    value?: string | React.ReactNode;
    /** Label describing the stat. */
    label: string;
};

export type ContentSectionProps = BaseComponentProps & {
    /** Title of the section. */
    title: string;
    /** Optional description text or element. */
    description?: React.ReactNode;
    /** Optional array of stat blocks. */
    stats?: Stat[];
    /** Text to display in the link. */
    linkText?: string;
    /** URL of the link. */
    linkHref?: string;
    /** Image source URL. */
    imageSrc: string;
    /** Alternative text for the image. */
    imageAlt?: string;
    /** Position of the image relative to the content. */
    imagePosition?: 'left' | 'right';
};

const block = registerBlockName('ContentSection');

/**
 * `ContentSection` is a layout component that displays a title,
 * description, optional statistics, a link, and an image.
 */
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
    const modifiers = imagePosition === 'left' ? ['image-left'] : [];

    return (
        <section {...getBaseComponentProps({ ...props, block, modifiers })}>
            <div className={toBEM({ block, element: 'container' })}>
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
                                    <div
                                        className={toBEM({
                                            block,
                                            element: 'statContent',
                                        })}
                                    >
                                        {(s.icon || s.icons) && (
                                            <div
                                                className={toBEM({
                                                    block,
                                                    element: 'statIcon',
                                                })}
                                                // aria-hidden="true"
                                            >
                                                {s.icon && (
                                                    <Icon
                                                        icon={s.icon}
                                                        size="lg"
                                                    />
                                                )}
                                                {s.icons &&
                                                    s.icons.map(
                                                        (icon, index) => (
                                                            <Icon
                                                                key={index}
                                                                icon={icon}
                                                                size="lg"
                                                            />
                                                        )
                                                    )}
                                            </div>
                                        )}

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
                    <img
                        loading="lazy"
                        src={imageSrc}
                        alt={imageAlt ?? title}
                    />
                </div>
            </div>
        </section>
    );
};
