import {
    registerBlockName,
    BaseComponentProps,
    getBaseComponentProps,
} from '@/utils';

import './Equips.scss';
import { Banner } from '@/ui/banner/Banner';

export type EquipsProps = BaseComponentProps & {};

const block = registerBlockName('Equips');
export const Equips = ({ ...props }: EquipsProps) => {
    return (
        <div {...getBaseComponentProps({ ...props, block })}>
            <Banner variant="equips" />
        </div>
    );
};
