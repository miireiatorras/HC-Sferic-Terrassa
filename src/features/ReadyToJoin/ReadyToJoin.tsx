// ReadyToJoin.tsx
import React, { useEffect, useState, useRef } from 'react';
import data from './readyToJoin.json';
import {
    toBEM,
    registerBlockName,
    BaseComponentProps,
    getBaseComponentProps,
} from '@/utils';
import { Icon, IconNames } from '@/ui/Icon/Icon';
import { Button, ButtonProps } from '@/ui/button/Button';
import { NavLink } from 'react-router-dom';
import './ReadyToJoin.scss';

interface StatItemData {
    end: number;
    icon: IconNames;
    label: string;
    plus?: boolean;
}
interface ActionData {
    text: string;
    href: string;
    variant: ButtonProps<object>['variant'];
    icon?: IconNames;
    iconPosition?: 'left' | 'right';
}
interface ReadyToJoinData {
    image: { src: string; alt: string };
    title: string;
    description: string;
    stats: StatItemData[];
    actions: ActionData[];
}

const { image, title, description, stats, actions } = data as ReadyToJoinData;

const block = registerBlockName('ReadyToJoin');

function useOnScreen<T extends HTMLElement>(
    ref: React.RefObject<T | null>,
    rootMargin = '0px'
) {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => entry.isIntersecting && setIsVisible(true),
            { rootMargin }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [ref, rootMargin]);
    return isVisible;
}

const Counter = ({ end }: { end: number }) => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        let start = 0;
        const duration = 2000;
        const step = end / (duration / 16);
        const interval = setInterval(() => {
            start += step;
            if (start >= end) {
                setCount(end);
                clearInterval(interval);
            } else {
                setCount(Math.ceil(start));
            }
        }, 16);
        return () => clearInterval(interval);
    }, [end]);
    return <span>{count}</span>;
};

const StatItem = ({
    end,
    icon,
    label,
    plus = false,
}: StatItemData & { plus?: boolean }) => {
    const ref = useRef<HTMLDivElement | null>(null);
    const visible = useOnScreen(ref, '-50px');
    const [started, setStarted] = useState(false);
    useEffect(() => {
        if (visible) setStarted(true);
    }, [visible]);
    return (
        <div ref={ref} className={toBEM({ block, element: 'stat' })}>
            <div className={toBEM({ block, element: 'stat-wrapper' })}>
                <Icon
                    className={toBEM({ block, element: 'Icon' })}
                    icon={icon}
                    size="xl"
                />
                <span className={toBEM({ block, element: 'number' })}>
                    {started ? (
                        <>
                            {plus && '+'}
                            <Counter end={end} />
                        </>
                    ) : plus ? (
                        '+0'
                    ) : (
                        '0'
                    )}
                </span>
            </div>
            <span className={toBEM({ block, element: 'span-text' })}>
                {label}
            </span>
        </div>
    );
};

export const ReadyToJoin: React.FC<BaseComponentProps> = ({ ...props }) => {
    return (
        <section
            {...getBaseComponentProps({ ...props, block })}
            aria-labelledby="ready-to-join-title"
        >
            <div className={toBEM({ block, element: 'container' })}>
                <div className={toBEM({ block, element: 'bg' })} />
                <div className={toBEM({ block, element: 'image' })}>
                    <img
                        loading="lazy"
                        src={image.src}
                        alt={image.alt}
                        role="img"
                        aria-label={image.alt}
                    />
                </div>

                <div className={toBEM({ block, element: 'main' })}>
                    <h2
                        id="ready-to-join-title"
                        className={toBEM({ block, element: 'title' })}
                    >
                        {title}
                    </h2>
                    <div className={toBEM({ block, element: 'wrapper' })}>
                        <p className={toBEM({ block, element: 'description' })}>
                            {description}
                        </p>

                        <div
                            role="list"
                            aria-label="Estadístiques del club"
                            className={toBEM({ block, element: 'stats' })}
                        >
                            {stats.map((s, i) => (
                                <StatItem key={i} {...s} />
                            ))}
                        </div>

                        <div className={toBEM({ block, element: 'actions' })}>
                            {actions.map((act, i) => (
                                <Button
                                    key={i}
                                    as={NavLink}
                                    to={act.href}
                                    variant={act.variant}
                                    icon={act.icon}
                                    iconPosition={act.iconPosition}
                                    className={toBEM({
                                        block,
                                        element:
                                            act.variant === 'secondary-green'
                                                ? 'secondary'
                                                : 'cta',
                                    })}
                                >
                                    {act.text}
                                </Button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ReadyToJoin;
