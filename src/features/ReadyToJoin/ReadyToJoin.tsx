import {
    toBEM,
    registerBlockName,
    BaseComponentProps,
    getBaseComponentProps,
} from '@/utils';
import './ReadyToJoin.scss';
import { useEffect, useState, useRef } from 'react';
import { Icon, IconNames } from '@/ui/Icon/Icon';
import { Button } from '@/ui/button/Button';
import { NavLink } from 'react-router-dom';

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
}: {
    end: number;
    icon: IconNames;
    label: string;
    plus?: boolean;
}) => {
    const ref = useRef<HTMLDivElement | null>(null);
    const visible = useOnScreen(ref, '-50px');
    const [started, setStarted] = useState(false);

    useEffect(() => {
        if (visible) {
            setStarted(true);
        }
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
export const ReadyToJoin = ({ ...props }: BaseComponentProps) => {
    return (
        <section {...getBaseComponentProps({ ...props, block })}>
            <div className={toBEM({ block, element: 'container' })}>
                <div className={toBEM({ block, element: 'bg' })} />
                <div className={toBEM({ block, element: 'image' })}>
                    <img
                        loading="lazy"
                        src="/patinem-junts.jpg"
                        alt="Patinem junts!"
                    />
                </div>

                <div className={toBEM({ block, element: 'main' })}>
                    <h2 className={toBEM({ block, element: 'title' })}>
                        Preparat per unir-te a HC. Sferic Terrassa?
                    </h2>
                    <div className={toBEM({ block, element: 'wrapper' })}>
                        <p className={toBEM({ block, element: 'description' })}>
                            Formar part del nostre club és un orgull. Aquí
                            trobaràs un ambient familiar on gaudir de l’hoquei,
                            aprendre i créixer amb valors. Vine a compartir la
                            passió per l’esport en un club proper, compromès i
                            ple d’esperit d’equip!
                        </p>

                        <div className={toBEM({ block, element: 'stats' })}>
                            <StatItem
                                end={75}
                                icon="material-symbols-light_trophy-outline"
                                label="anys d'història"
                            />
                            <StatItem
                                end={100}
                                icon="mingcute_group-3-fill"
                                label="jugadors entrenats"
                                plus
                            />
                            <StatItem
                                end={11}
                                icon="material-symbols-light_sports-hockey-sharp"
                                label="equips jugant"
                            />
                        </div>

                        <div className={toBEM({ block, element: 'actions' })}>
                            <Button
                                as={NavLink}
                                to="/inscripcions"
                                variant="primary-green"
                                className={toBEM({ block, element: 'cta' })}
                            >
                                Uneix-te al club
                            </Button>
                            <Button
                                as={NavLink}
                                to="/el-club"
                                icon="arrow-right"
                                iconPosition="right"
                                variant="secondary-green"
                                className={toBEM({
                                    block,
                                    element: 'secondary',
                                })}
                            >
                                Descobreix més
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
