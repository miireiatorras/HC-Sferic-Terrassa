import {
    registerBlockName,
    BaseComponentProps,
    getBaseComponentProps,
    toBEM,
} from '@/utils';
// import IcomoonReact from 'icomoon-react';
// import iconSet from '@/config/icons/selection.json';

import './footer.scss';
import { Icon } from '@/ui/Icon/Icon';

export type FooterProps = BaseComponentProps;

const block = registerBlockName('footer');

export const Footer = (props: FooterProps) => {
    return (
        <div {...getBaseComponentProps({ ...props, block })}>
            <div className={toBEM({ block, element: 'contacte' })}>
                <h2 className={toBEM({ block, element: 'contacte-title' })}>
                    CONTACTE
                </h2>
                <div className={toBEM({ block, element: 'email' })}>
                    <Icon icon={'email'} size="lg" />
                    <a href="mailto:info.sfericok@gmail.com">
                        info.sfericok@gmail.com
                    </a>
                </div>
                <div className={toBEM({ block, element: 'telefon' })}>
                    <Icon icon={'call'} size="lg" />
                    <p>+ (34) 609 061 492 / 616 860 388</p>
                </div>
                <div className={toBEM({ block, element: 'instagram' })}>
                    <Icon icon={'instagram'} size="lg" />
                    <a href="https://www.instagram.com/oksfericterrassa/">
                        @oksfericterrassa
                    </a>
                </div>
                <div className={toBEM({ block, element: 'ubicacio' })}>
                    <Icon icon={'location_on'} size="lg" />
                    <p>
                        Pavelló Municipal de “La Maurina” Carrer Sardenya, 34,
                        Terrassa, 08224 Barcelona
                    </p>
                </div>
            </div>
            <img
                src="/logo-sferic-footer.png"
                alt="logo"
                className={toBEM({ block, element: 'foto-footer' })}
            />
            <div className={toBEM({ block, element: 'copyright' })}>
                <small>
                    © 2025 Sferic Hoquei patins Terrassa. Dissenyat per Mireia
                    Torras
                </small>
                <img
                    src="/logo-ajuntament.png"
                    alt="logo"
                    className={toBEM({ block, element: 'ajuntament' })}
                />
            </div>
        </div>
    );
};

export default Footer;
