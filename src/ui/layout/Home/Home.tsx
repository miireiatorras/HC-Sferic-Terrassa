import {
    registerBlockName,
    BaseComponentProps,
    getBaseComponentProps,
} from '@/utils';
import Patrocinadors from '@/features/patrocinadors/Patrocinadors';
import Footer from '@/features/footer/Footer';
import { Hero } from '@/features/hero/Hero';
import Discover from '@/features/hero/Discover/Discover';
import { ReadyToJoin } from '@/features/ReadyToJoin/ReadyToJoin';
import { Caldendari } from '@/features/calendari/Calendari';
import { Instagram } from '@/features/instagram/Instagram';

export type HomeProps = BaseComponentProps & {};

const block = registerBlockName('Home');
export const Home = ({ ...props }: HomeProps) => {
    return (
        <main {...getBaseComponentProps({ ...props, block })}>
            <Hero />
            <Discover />
            <ReadyToJoin />
            <Caldendari />
            <Instagram />
            <Patrocinadors />
            <Footer />
        </main>
    );
};
export default Home;
