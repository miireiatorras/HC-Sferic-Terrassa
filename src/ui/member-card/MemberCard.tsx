import {
    toBEM,
    registerBlockName,
    BaseComponentProps,
    getBaseComponentProps,
} from '@/utils';
import './MemberCard.scss';

export type MemberCardProps = BaseComponentProps & {
    initials: string;
    name: string;
};

const block = registerBlockName('MemberCard');

export const MemberCard = ({ initials, name, ...props }: MemberCardProps) => {
    return (
        <div {...getBaseComponentProps({ ...props, block })}>
            <div className={toBEM({ block, element: 'avatar' })}>
                {initials}
            </div>
            <div className={toBEM({ block, element: 'name' })}>{name}</div>
        </div>
    );
};
