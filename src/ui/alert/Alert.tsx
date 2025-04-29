import {
    toBEM,
    registerBlockName,
    BaseComponentProps,
    getBaseComponentProps,
} from '@/utils';
import { Icon, IconNames } from '../Icon/Icon';
import './Alert.scss';
import { JSX } from 'react';

const block = registerBlockName('Alert');

export type Props = BaseComponentProps & {
    /** The message or content to display inside the alert. */
    children: React.ReactNode;
    /** Which icon to show on the left side. */
    icon: IconNames;
    /** The color variant of the alert. */
    variant?: 'success' | 'info' | 'warning' | 'error' | 'open-in-new-tab';
};

/**
 * Alert displays a short message with an icon, styled according to its variant.
 */
export const Alert = ({
    children,
    icon,
    variant = 'info',
    ...props
}: Props): JSX.Element => {
    return (
        <div
            {...getBaseComponentProps({
                ...props,
                block,
                modifiers: [variant],
            })}
        >
            <Icon icon={icon} className={toBEM({ block, element: 'icon' })} />
            <div className={toBEM({ block, element: 'content' })}>
                {children}
            </div>
        </div>
    );
};
