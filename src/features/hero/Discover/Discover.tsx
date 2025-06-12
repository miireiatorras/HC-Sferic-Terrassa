import {
    toBEM,
    registerBlockName,
    BaseComponentProps,
    getBaseComponentProps,
} from '@/utils';

import './Discover.scss';
import Title from '@/ui/titles/Title';
import { Link } from 'react-router-dom';

export type DiscoverProps = BaseComponentProps;

const block = registerBlockName('Discover');
export const Discover = ({ ...props }: DiscoverProps) => {
    return (
        <section
            {...getBaseComponentProps({ ...props, block })}
            aria-label="Descobreix el nostre club"
        >
            <Title>Descobreix el nostre club</Title>

            <div className={toBEM({ block, element: 'cards' })}>
                <Link
                    to="/seccions"
                    className={toBEM({ block, element: 'left-card' })}
                >
                    <img
                        loading="lazy"
                        src="/seccions.jpg"
                        alt="Seccions"
                        className={toBEM({ block, element: 'image' })}
                    />
                    <div className={toBEM({ block, element: 'overlay' })}>
                        <p
                            className={toBEM({
                                block,
                                element: 'card-title',
                            })}
                        >
                            Seccions
                        </p>
                        <span
                            className={toBEM({
                                block,
                                element: 'card-link',
                            })}
                        >
                            Aprèn més &gt;
                        </span>
                    </div>
                </Link>

                <div className={toBEM({ block, element: 'right-column' })}>
                    <Link
                        to="/equips"
                        className={toBEM({ block, element: 'card' })}
                    >
                        <img
                            loading="lazy"
                            src="/equips.webp"
                            alt="Equips"
                            className={toBEM({ block, element: 'image' })}
                        />
                        <div className={toBEM({ block, element: 'overlay' })}>
                            <p
                                className={toBEM({
                                    block,
                                    element: 'card-title',
                                })}
                            >
                                Equips
                            </p>
                            <span
                                className={toBEM({
                                    block,
                                    element: 'card-link',
                                })}
                            >
                                Aprèn més &gt;
                            </span>
                        </div>
                    </Link>

                    <Link
                        to="/botiga"
                        className={toBEM({ block, element: 'card' })}
                    >
                        <img
                            loading="lazy"
                            src="/botiga.png"
                            alt="Botiga"
                            className={toBEM({ block, element: 'image' })}
                        />
                        <div className={toBEM({ block, element: 'overlay' })}>
                            <p
                                className={toBEM({
                                    block,
                                    element: 'card-title',
                                })}
                            >
                                Botiga
                            </p>
                            <span
                                className={toBEM({
                                    block,
                                    element: 'card-link',
                                })}
                            >
                                Aprèn més &gt;
                            </span>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
};
export default Discover;
