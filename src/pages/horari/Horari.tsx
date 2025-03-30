import {
    registerBlockName,
    BaseComponentProps,
    getBaseComponentProps,
} from '@/utils';
import './Horari.scss';
export type HorariProps = BaseComponentProps & {
    children?: React.ReactNode;
};

const block = registerBlockName('Horari');
export const Horari = ({ children, ...props }: HorariProps) => {
    return (
        <div {...getBaseComponentProps({ ...props, block })}>{children}</div>
    );
};
