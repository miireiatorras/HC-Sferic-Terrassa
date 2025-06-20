import {
    registerBlockName,
    BaseComponentProps,
    getBaseComponentProps,
    toBEM,
} from '@/utils';

import './Instagram.scss';
import Title from '@/ui/titles/Title';
import { Icon } from '@/ui/Icon/Icon';

export type InstagramProps = BaseComponentProps & {};

const block = registerBlockName('Instagram');
export const Instagram = ({ ...props }: InstagramProps) => {
    return (
        <div {...getBaseComponentProps({ ...props, block })}>
            <Title>Troba'ns a Instagram!</Title>
            <div
                className={toBEM({
                    block,
                    element: 'div',
                })}
            >
                <Icon
                    icon="instagram"
                    size="lg"
                    className={toBEM({
                        block,
                        element: 'Icon',
                    })}
                />
                <a
                    href="https://www.instagram.com/oksfericterrassa/"
                    className={toBEM({
                        block,
                        element: 'link',
                    })}
                >
                    @oksfericterrassa
                </a>
            </div>

            <iframe
                className="responsive-iframe"
                src="https://widget.tagembed.com/2170172"
                style={{ width: '100%', height: '420px', border: 'none' }}
                title="Instagram feed de HC Sferic Terrassa"
                aria-label="Instagram feed de HC Sferic Terrassa"
                loading="lazy"
                tabIndex={0}
                allowFullScreen
            ></iframe>
        </div>
    );
};
