import {
    registerBlockName,
    BaseComponentProps,
    getBaseComponentProps,
} from '@/utils';

export type SeccionsProps = BaseComponentProps & {
    children?: React.ReactNode;
};

const block = registerBlockName('Seccions');
export const Seccions = ({ children, ...props }: SeccionsProps) => {
    return (
        <div {...getBaseComponentProps({ ...props, block })}>{children}</div>
    );
};
