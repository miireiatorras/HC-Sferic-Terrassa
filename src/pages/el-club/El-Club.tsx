import {
    registerBlockName,
    BaseComponentProps,
    getBaseComponentProps,
} from '@/utils';

export type ElClubProps = BaseComponentProps & {
    children?: React.ReactNode;
};

const block = registerBlockName('ElClub');
export const ElClub = ({ children, ...props }: ElClubProps) => {
    return (
        <div {...getBaseComponentProps({ ...props, block })}>{children}</div>
    );
};
