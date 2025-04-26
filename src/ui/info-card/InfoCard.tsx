import {
    toBEM,
    registerBlockName,
    BaseComponentProps,
    getBaseComponentProps,
} from '@/utils';
import './InfoCard.scss';
import { Icon, IconNames } from '../Icon/Icon';

const block = registerBlockName('InfoCard');

export type Props = BaseComponentProps & {
    /** Icon name from the Icon component. */
    icon: IconNames;
    /** Text to be displayed in the card. */
    text: React.ReactNode;
};

/**
 * InfoCard component renders a circular icon wrapper and a block of text,
 * all within a styled card container.
 */
export const InfoCard = ({ icon, text, ...props }: Props): JSX.Element => {
    return (
        <div {...getBaseComponentProps({ ...props, block })}>
            <div className={toBEM({ block, element: 'icon-wrapper' })}>
                <Icon
                    icon={icon}
                    className={toBEM({ block, element: 'icon' })}
                />
            </div>
            <p className={toBEM({ block, element: 'text' })}>{text}</p>
        </div>
    );
};
