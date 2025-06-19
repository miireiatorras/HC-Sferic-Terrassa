import { Button } from '@/ui/button/Button';
import {
    toBEM,
    registerBlockName,
    BaseComponentProps,
    getBaseComponentProps,
} from '@/utils';
import landingPage from '/landing-page.webp';

import './Hero.scss';
import { NavLink } from 'react-router-dom';

export type HeroProps = BaseComponentProps;

const block = registerBlockName('Hero');
export const Hero = ({ ...props }: HeroProps) => {
    return (
        <header {...getBaseComponentProps({ ...props, block })}>
            <img
                src={landingPage}
                alt="HC Sferic Terrassa club de hockey sobre patines"
                className={toBEM({ block, element: 'bg-image' })}
                decoding="async"
                fetchPriority="high"
                style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    zIndex: 0,
                }}
            />
            <div className={toBEM({ block, element: 'gradient' })} />
            <div
                className={toBEM({
                    block,
                    element: 'content',
                })}
            >
                <h1 className={toBEM({ block, element: 'title' })}>
                    Benvinguts a <br /> HC. SFERIC Terrassa
                </h1>
                <div className={toBEM({ block, element: 'buttons' })}>
                    <Button
                        as={NavLink}
                        to="/inscripcions"
                        variant="primary-white"
                    >
                        Uneix-te al club
                    </Button>
                    <Button
                        as={NavLink}
                        to="/el-club"
                        variant="secondary-white"
                        icon="arrow-right"
                        iconPosition="right"
                    >
                        Decobreix més
                    </Button>
                </div>
            </div>
        </header>
    );
};
