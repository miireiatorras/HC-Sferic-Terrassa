import {
    toBEM,
    registerBlockName,
    BaseComponentProps,
    getBaseComponentProps,
} from '@/utils';

import './Instagram.scss';
import Title from '@/ui/titles/Title';

export type InstagramProps = BaseComponentProps & {};

const block = registerBlockName('Instagram');
export const Instagram = ({ ...props }: InstagramProps) => {
    return (
        <div {...getBaseComponentProps({ ...props, block })}>
            <Title>Troba'ns a Instagram!</Title>
        </div>
    );
};
