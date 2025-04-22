import {
    toBEM,
    registerBlockName,
    BaseComponentProps,
    getBaseComponentProps,
} from '@/utils';

import './ImageScrollGalery.scss';
import { Icon } from '../Icon/Icon';

export type Props = BaseComponentProps & {
    images: string[];
};

const block = registerBlockName('ImageScrollGallery');

export const ImageScrollGallery = ({ images, ...props }: Props) => {
    return (
        <div {...getBaseComponentProps({ ...props, block })}>
            <div className={toBEM({ block, element: 'container' })}>
                {images.map((src, idx) => (
                    <img
                        key={idx}
                        src={src}
                        className={toBEM({ block, element: 'image' })}
                    />
                ))}
            </div>
            <Icon
                icon="chevron-up"
                size="lg"
                className={toBEM({ block, element: 'arrow' })}
            />
        </div>
    );
};
