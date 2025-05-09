import {
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
            {/* Aquí insertas tu iframe */}
            {/* <iframe
                src="//lightwidget.com/widgets/adabcc9a52015867b38dfac5623e9ef8.html"
                className="lightwidget-widget w-full"
                style={{
                    width: '100%',
                    height: '100vh',
                    border: 0,
                    overflow: 'hidden',
                }}
            /> */}
            {/* <iframe
                src="https://widgets.sociablekit.com/instagram-feed/iframe/25555324"
                width="100%"
                height="1000"
                style={{ border: '0' }}
            ></iframe> */}
            {/* <iframe
                src="https://widget.tagembed.com/2170172"
                style={{ width: '100%', height: '600px', border: 'none' }}
            ></iframe> */}
        </div>
    );
};
