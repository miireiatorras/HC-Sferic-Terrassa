import Footer from '@/features/footer/Footer';
import { Banner } from '@/ui/banner/Banner';
import Title from '@/ui/titles/Title';
import {
    registerBlockName,
    BaseComponentProps,
    getBaseComponentProps,
} from '@/utils';

export type BotigaProps = BaseComponentProps & {};

const block = registerBlockName('Botiga');
export const Botiga = ({ ...props }: BotigaProps) => {
    return (
        <div {...getBaseComponentProps({ ...props, block })}>
            <Banner variant="botiga" />
            <Title>Compra aquí el nostre material!</Title>
            <Footer />
        </div>
    );
};
