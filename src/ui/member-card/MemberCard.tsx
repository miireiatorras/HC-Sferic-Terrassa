import {
    toBEM,
    registerBlockName,
    BaseComponentProps,
    getBaseComponentProps,
} from '@/utils';
import './MemberCard.scss';

export type MemberCardProps = BaseComponentProps & {
    /** Initials of the member to show in the avatar. */
    initials: string;
    /** Full name of the member. */
    name: string;
};

const block = registerBlockName('MemberCard');

/**
 * `MemberCard` is a UI component that displays a user avatar with initials
 * and the member's full name.
 */
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
