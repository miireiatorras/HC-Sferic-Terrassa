import {
    registerBlockName,
    BaseComponentProps,
    getBaseComponentProps,
} from '@/utils';

export type MapaProps = BaseComponentProps & {
    children?: React.ReactNode;
};

const block = registerBlockName('Mapa');
export const Mapa = ({ children, ...props }: MapaProps) => {
    return (
        <div {...getBaseComponentProps({ ...props, block })}>{children}</div>
    );
};
