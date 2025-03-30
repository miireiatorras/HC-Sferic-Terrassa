import {
    registerBlockName,
    BaseComponentProps,
    getBaseComponentProps,
} from '@/utils';
import IcomoonReact from 'icomoon-react';
import iconSet from '@/config/icons/selection.json';

export type FooterProps = BaseComponentProps;

const block = registerBlockName('Footer');

export const Footer = (props: FooterProps) => {
    return (
        <div {...getBaseComponentProps({ ...props, block })} id="contacte">
            <div className="footer__contacte">
                <h2>CONTACTE</h2>
                <div className="footer__email">
                    <IcomoonReact icon={'email'} size="md" iconSet={iconSet} />
                    <a href="mailto:info.sfericok@gmail.com">
                        info.sfericok@gmail.com
                    </a>
                </div>
                <div className="footer__telefon">
                    <IcomoonReact icon={'call'} size="md" iconSet={iconSet} />
                    <p>+ (34) 609 061 492 / 616 860 388</p>
                </div>
                <div className="footer__instagram">
                    <IcomoonReact
                        icon={'instagram'}
                        size="md"
                        iconSet={iconSet}
                    />
                    <a href="https://www.instagram.com/oksfericterrassa/">
                        @oksfericterrassa
                    </a>
                </div>
                <div className="footer__ubicacio">
                    <IcomoonReact
                        icon={'location_on'}
                        size="md"
                        iconSet={iconSet}
                    />
                    <p>
                        Pavelló Municipal de “La Maurina” Carrer Sardenya, 34,
                        Terrassa, 08224 Barcelona
                    </p>
                </div>
            </div>

            <div className="footer__copyright">
                <small>© 2024 Sferic Hoquei patins Terrassa</small>
                <img
                    src="/logo-ajuntament.png"
                    alt="logo"
                    className="footer__ajuntament"
                />
            </div>
        </div>
    );
};
export default Footer;
