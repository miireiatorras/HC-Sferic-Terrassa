import {
    toBEM,
    registerBlockName,
    BaseComponentProps,
    getBaseComponentProps,
} from '@/utils';
import './ReadyToJoin.scss';
import { useEffect, useState } from 'react';
import { Icon } from '@/ui/Icon/Icon';
import { Button } from '@/ui/button/Button';
import { NavLink } from 'react-router-dom';

const block = registerBlockName('ReadyToJoin');

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
export const ReadyToJoin = ({ ...props }: BaseComponentProps) => {
    return (
        <section {...getBaseComponentProps({ ...props, block })}>
            <div className={toBEM({ block, element: 'container' })}>
                <div className={toBEM({ block, element: 'bg' })} />
                <div className={toBEM({ block, element: 'image' })}>
                    <img src="/patinem-junts.jpg" alt="Patinem junts!" />
                </div>

                <div className={toBEM({ block, element: 'main' })}>
                    <h2 className={toBEM({ block, element: 'title' })}>
                        Preparat per unir-te a HC. Sferic Terrassa?
                    </h2>
                    <div
                        className={toBEM({
                            block,
                            element: 'wrapper',
                        })}
                    >
                        <p className={toBEM({ block, element: 'description' })}>
                            Formar part del nostre club és un orgull. Aquí
                            trobaràs un ambient familiar on gaudir de l’hoquei
                            patins, aprendre i créixer amb valors. Vine a
                            compartir la passió per l’esport en un club proper,
                            compromès i ple d’esperit d’equip!
                        </p>

                        <div className={toBEM({ block, element: 'stats' })}>
                            <div className={toBEM({ block, element: 'stat' })}>
                                <div
                                    className={toBEM({
                                        block,
                                        element: 'stat-wrapper',
                                    })}
                                >
                                    <Icon
                                        className={toBEM({
                                            block,
                                            element: 'Icon',
                                        })}
                                        icon="material-symbols-light_trophy-outline"
                                        size="xl"
                                    />
                                    <span
                                        className={toBEM({
                                            block,
                                            element: 'number',
                                        })}
                                    >
                                        <Counter end={75} />
                                    </span>
                                </div>
                                <span
                                    className={toBEM({
                                        block,
                                        element: 'span-text',
                                    })}
                                >
                                    anys d'història
                                </span>
                            </div>
                            <div className={toBEM({ block, element: 'stat' })}>
                                <div
                                    className={toBEM({
                                        block,
                                        element: 'stat-wrapper',
                                    })}
                                >
                                    <Icon
                                        className={toBEM({
                                            block,
                                            element: 'Icon',
                                        })}
                                        icon="mingcute_group-3-fill"
                                        size="xl"
                                    />
                                    <span
                                        className={toBEM({
                                            block,
                                            element: 'number',
                                        })}
                                    >
                                        + <Counter end={100} />
                                    </span>
                                </div>

                                <span
                                    className={toBEM({
                                        block,
                                        element: 'span-text',
                                    })}
                                >
                                    jugadors entrenats{' '}
                                </span>
                            </div>
                            <div className={toBEM({ block, element: 'stat' })}>
                                <div
                                    className={toBEM({
                                        block,
                                        element: 'stat-wrapper',
                                    })}
                                >
                                    <Icon
                                        className={toBEM({
                                            block,
                                            element: 'Icon',
                                        })}
                                        icon="material-symbols-light_sports-hockey-sharp"
                                        size="xl"
                                    />
                                    <span
                                        className={toBEM({
                                            block,
                                            element: 'number',
                                        })}
                                    >
                                        <Counter end={11} />
                                    </span>
                                </div>
                                <span
                                    className={toBEM({
                                        block,
                                        element: 'span-text',
                                    })}
                                >
                                    equips jugant
                                </span>
                            </div>
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
                                variant="secondary-green"
                                className={toBEM({
                                    block,
                                    element: 'secondary',
                                })}
                            >
                                Descobreix més →
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
