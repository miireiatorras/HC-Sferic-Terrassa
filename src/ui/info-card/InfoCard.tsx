import {
    toBEM,
    registerBlockName,
    BaseComponentProps,
    getBaseComponentProps,
} from '@/utils';

import './InfoCard.scss';
import { Icon, IconNames } from '../Icon/Icon';

export type Props = BaseComponentProps & {
    icon: IconNames;
    text: React.ReactNode;
};

const block = registerBlockName('InfoCard');

export const InfoCard = ({ icon, text, ...props }: Props) => {
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
