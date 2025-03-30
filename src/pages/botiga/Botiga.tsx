import {
    registerBlockName,
    BaseComponentProps,
    getBaseComponentProps,
} from '@/utils';

export type BotigaProps = BaseComponentProps & {
    children?: React.ReactNode;
};

const block = registerBlockName('Botiga');
export const Botiga = ({ children, ...props }: BotigaProps) => {
    return (
        <div {...getBaseComponentProps({ ...props, block })}>{children}</div>
    );
};
