import React from 'react';
import data from './discover.json';

import Title from '@/ui/titles/Title';
import { Link } from 'react-router-dom';
import {
    toBEM,
    registerBlockName,
    BaseComponentProps,
    getBaseComponentProps,
} from '@/utils';
import './Discover.scss';

interface CardData {
    to: string;
    imageSrc: string;
    imageAlt: string;
    title: string;
    linkText: string;
}

interface DiscoverData {
    ariaLabel: string;
    header: string;
    leftCard: CardData;
    rightCards: CardData[];
}

const { ariaLabel, header, leftCard, rightCards } = data as DiscoverData;

const block = registerBlockName('Discover');

export const Discover: React.FC<BaseComponentProps> = (props) => {
    return (
        <section
            {...getBaseComponentProps({ ...props, block })}
            aria-label={ariaLabel}
        >
            <Title>{header}</Title>

            <div className={toBEM({ block, element: 'cards' })}>
                <Link
                    to={leftCard.to}
                    className={toBEM({ block, element: 'left-card' })}
                >
                    <img
                        loading="lazy"
                        src={leftCard.imageSrc}
                        alt={leftCard.imageAlt}
                        className={toBEM({ block, element: 'image' })}
                    />
                    <div className={toBEM({ block, element: 'overlay' })}>
                        <p className={toBEM({ block, element: 'card-title' })}>
                            {leftCard.title}
                        </p>
                        <span
                            className={toBEM({ block, element: 'card-link' })}
                        >
                            {leftCard.linkText}
                        </span>
                    </div>
                </Link>

                <div className={toBEM({ block, element: 'right-column' })}>
                    {rightCards.map((card, i) => (
                        <Link
                            key={i}
                            to={card.to}
                            className={toBEM({ block, element: 'card' })}
                        >
                            <img
                                loading="lazy"
                                src={card.imageSrc}
                                alt={card.imageAlt}
                                className={toBEM({ block, element: 'image' })}
                            />
                            <div
                                className={toBEM({ block, element: 'overlay' })}
                            >
                                <p
                                    className={toBEM({
                                        block,
                                        element: 'card-title',
                                    })}
                                >
                                    {card.title}
                                </p>
                                <span
                                    className={toBEM({
                                        block,
                                        element: 'card-link',
                                    })}
                                >
                                    {card.linkText}
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Discover;
