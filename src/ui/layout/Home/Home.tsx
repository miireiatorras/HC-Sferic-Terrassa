import {
    registerBlockName,
    BaseComponentProps,
    getBaseComponentProps,
    toBEM,
} from '@/utils';
import { Hero } from '@/features/hero/Hero';
import Discover from '@/features/hero/Discover/Discover';
import { ReadyToJoin } from '@/features/ReadyToJoin/ReadyToJoin';
import { Caldendari } from '@/features/calendari/Calendari';
import { Instagram } from '@/features/instagram/Instagram';
import Patrocinadors from '@/features/patrocinadors/Patrocinadors';
import './Home.scss';

export type HomeProps = BaseComponentProps & {};

const block = registerBlockName('Home');
export const Home = ({ ...props }: HomeProps) => {
    return (
        <main
            {...getBaseComponentProps({
                ...props,
                block,
            })}
        >
            <Hero />
            <Discover />
            <ReadyToJoin />
            <Caldendari />
            <Instagram />
            <div
                className={toBEM({
                    block,
                    element: 'div',
                })}
            >
                <Patrocinadors />
            </div>
        </main>
    );
};
export default Home;
