import {
    toBEM,
    registerBlockName,
    BaseComponentProps,
    getBaseComponentProps,
} from '@/utils';

import './Discover.scss';
import Title from '@/ui/titles/Title';

export type DiscoverProps = BaseComponentProps;

const block = registerBlockName('Discover');
export const Discover = ({ ...props }: DiscoverProps) => {
    return (
        <section {...getBaseComponentProps({ ...props, block })}>
            <Title>Descobreix el nostre club</Title>

            <div className={toBEM({ block, element: 'cards' })}>
                <div className={toBEM({ block, element: 'left-card' })}>
                    <img
                        src="/seccions.jpg"
                        alt="Seccions"
                        className={toBEM({ block, element: 'image' })}
                    />
                    <div className={toBEM({ block, element: 'overlay' })}>
                        <h3 className={toBEM({ block, element: 'card-title' })}>
                            Seccions
                        </h3>
                        <span
                            className={toBEM({ block, element: 'card-link' })}
                        >
                            Aprèn més &gt;
                        </span>
                    </div>
                </div>

                <div className={toBEM({ block, element: 'right-column' })}>
                    <div className={toBEM({ block, element: 'card' })}>
                        <img
                            src="/equips.jpg"
                            alt="Equips"
                            className={toBEM({ block, element: 'image' })}
                        />
                        <div className={toBEM({ block, element: 'overlay' })}>
                            <h3
                                className={toBEM({
                                    block,
                                    element: 'card-title',
                                })}
                            >
                                Equips
                            </h3>
                            <span
                                className={toBEM({
                                    block,
                                    element: 'card-link',
                                })}
                            >
                                Aprèn més &gt;
                            </span>
                        </div>
                    </div>

                    <div className={toBEM({ block, element: 'card' })}>
                        <img
                            src="/botiga.png"
                            alt="Botiga"
                            className={toBEM({ block, element: 'image' })}
                        />
                        <div className={toBEM({ block, element: 'overlay' })}>
                            <h3
                                className={toBEM({
                                    block,
                                    element: 'card-title',
                                })}
                            >
                                Botiga
                            </h3>
                            <span
                                className={toBEM({
                                    block,
                                    element: 'card-link',
                                })}
                            >
                                Aprèn més &gt;
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Discover;
