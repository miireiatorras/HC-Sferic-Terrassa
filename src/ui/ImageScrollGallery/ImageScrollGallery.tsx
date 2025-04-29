import {
    toBEM,
    registerBlockName,
    BaseComponentProps,
    getBaseComponentProps,
} from '@/utils';
import './ImageScrollGalery.scss';
import { Icon } from '../Icon/Icon';

export type Props = BaseComponentProps & {
    /** Array of image URLs to be displayed in the gallery. */
    images: string[];
};

const block = registerBlockName('ImageScrollGallery');

export type ImageScrollGalleryProps = Props;

/**
 * ImageScrollGallery renders a horizontal, scrollable list of images
 * with an arrow icon indicating scroll direction.
 */
export const ImageScrollGallery = ({
    images,
    ...props
}: ImageScrollGalleryProps): JSX.Element => {
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
