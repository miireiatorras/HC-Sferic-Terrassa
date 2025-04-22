import {
    registerBlockName,
    BaseComponentProps,
    getBaseComponentProps,
} from '@/utils';

import './Contacte.scss';
import Title from '@/ui/titles/Title';
import { Banner } from '@/ui/banner/Banner';
import Footer from '@/features/footer/Footer';

export type ContacteProps = BaseComponentProps & {};

const block = registerBlockName('Contacte');
export const Contacte = ({ ...props }: ContacteProps) => {
    return (
        <div {...getBaseComponentProps({ ...props, block })}>
            <Banner variant="contacte" />
            <Title>On ens trobem?</Title>
            <Title variant="light">Parlem?</Title>
            <Title>Et llegim</Title>
            <Footer />
        </div>
    );
};
