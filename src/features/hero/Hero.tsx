import { Button } from '@/ui/button/Button';
import {
    toBEM,
    registerBlockName,
    BaseComponentProps,
    getBaseComponentProps,
} from '@/utils';

import './Hero.scss';

export type HeroProps = BaseComponentProps;

const block = registerBlockName('Hero');
export const Hero = ({ ...props }: HeroProps) => {
    return (
        <section {...getBaseComponentProps({ ...props, block })}>
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
                    <Button variant="primary" onClick={() => {}}>
                        Uneix-te al club
                    </Button>
                    <Button variant="secondary" onClick={() => {}}>
                        Decobreix més
                    </Button>
                </div>
            </div>
        </section>
    );
};
