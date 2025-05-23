import { Button } from '@/ui/button/Button';
import {
    toBEM,
    registerBlockName,
    BaseComponentProps,
    getBaseComponentProps,
} from '@/utils';

import './Hero.scss';
import { NavLink } from 'react-router-dom';

export type HeroProps = BaseComponentProps;

const block = registerBlockName('Hero');
export const Hero = ({ ...props }: HeroProps) => {
    return (
        <header {...getBaseComponentProps({ ...props, block })}>
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
                    >
                        Decobreix més
                    </Button>
                </div>
            </div>
        </header>
    );
};
