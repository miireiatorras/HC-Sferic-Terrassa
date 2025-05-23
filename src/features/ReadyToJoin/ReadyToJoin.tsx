import {
    toBEM,
    registerBlockName,
    BaseComponentProps,
    getBaseComponentProps,
} from '@/utils';
import './ReadyToJoin.scss';
import { useEffect, useState } from 'react';
import { Icon } from '@/ui/Icon/Icon';

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

                <div className={toBEM({ block, element: 'content' })}>
                    <h2 className={toBEM({ block, element: 'title' })}>
                        Preparat per unir-te a HC. Sferic Terrassa?
                    </h2>
                    <p className={toBEM({ block, element: 'description' })}>
                        Formar part del nostre club és un orgull. Aquí trobaràs
                        un ambient familiar on gaudir de l’hoquei, aprendre i
                        créixer amb valors. Vine a compartir la passió per
                        l’esport en un club proper, compromès i ple d’esperit
                        d’equip!
                    </p>

                    <div className={toBEM({ block, element: 'stats' })}>
                        <div className={toBEM({ block, element: 'stat' })}>
                            <div
                                className={toBEM({
                                    block,
                                    element: 'div',
                                })}
                            >
                                <Icon
                                    className={toBEM({
                                        block,
                                        element: 'Icon',
                                    })}
                                    icon="trophy"
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
                                    element: 'div',
                                })}
                            >
                                <Icon
                                    className={toBEM({
                                        block,
                                        element: 'Icon',
                                    })}
                                    icon="group-outline"
                                    size="xl"
                                />
                                <span
                                    className={toBEM({
                                        block,
                                        element: 'number',
                                    })}
                                >
                                    {/* posar un+ !! */}
                                    <Counter end={100} />
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
                                    element: 'div',
                                })}
                            >
                                <Icon
                                    className={toBEM({
                                        block,
                                        element: 'Icon',
                                    })}
                                    icon="hockey-stick"
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
                        <button className={toBEM({ block, element: 'cta' })}>
                            Uneix-te al club
                        </button>
                        <button
                            className={toBEM({ block, element: 'secondary' })}
                        >
                            Descobreix més →
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};
