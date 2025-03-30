import {
    registerBlockName,
    BaseComponentProps,
    getBaseComponentProps,
} from '@/utils';

export type InscripcionsProps = BaseComponentProps & {
    children?: React.ReactNode;
};

const block = registerBlockName('Inscripcions');
export const Inscripcions = ({ children, ...props }: InscripcionsProps) => {
    return (
        <div {...getBaseComponentProps({ ...props, block })}>{children}</div>
    );
};
