import {
    toBEM,
    registerBlockName,
    BaseComponentProps,
    getBaseComponentProps,
} from '@/utils';
import './Tab.scss';

export type TabProps = BaseComponentProps & {
    /** Label text to display inside the tab. */
    label: string;
    /** Whether the tab is currently active. */
    active?: boolean;
    /** Function to call when the tab is clicked. */
    onClick?: () => void;
};

const block = registerBlockName('Tab');

/**
 * `Tab` is a UI component used for navigation between views or sections.
 */
export const Tab = ({ label, active = false, onClick, ...props }: TabProps) => {
    return (
        <button
            {...getBaseComponentProps({
                ...props,
                block,
                modifiers: [active && 'active'],
            })}
            type="button"
            onClick={onClick}
            className={toBEM({
                block,
                element: 'item',
                modifiers: active ? ['active'] : [],
            })}
        >
            {label}
        </button>
    );
};
