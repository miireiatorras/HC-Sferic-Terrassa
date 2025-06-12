import {
    registerBlockName,
    BaseComponentProps,
    getBaseComponentProps,
    toBEM,
} from '@/utils';
import './footer.scss';
import { Icon } from '@/ui/Icon/Icon';
import { Link } from 'react-router-dom';

export type FooterProps = BaseComponentProps;

const block = registerBlockName('footer');

export const Footer = (props: FooterProps) => {
    return (
        <footer {...getBaseComponentProps({ ...props, block })}>
            <section className={toBEM({ block, element: 'section' })}>
                <div className={toBEM({ block, element: 'col-img' })}>
                    <img
                        loading="lazy"
                        src="/favicon.ico"
                        alt="logo"
                        className={toBEM({ block, element: 'logo' })}
                    />
                </div>
                <div className={toBEM({ block, element: 'col' })}>
                    <p
                        className={toBEM({
                            block,
                            element: 'title',
                        })}
                    >
                        HC. SFERIC Terrassa
                    </p>
                    <div className={toBEM({ block, element: 'ubicacio' })}>
                        <Icon icon="location_on" size="lg" />
                        <p>
                            Pavelló Municipal de “La Maurina”
                            <br />
                            Carrer Sardenya, 34, Terrassa, 08224 Barcelona
                        </p>
                    </div>
                    <div className={toBEM({ block, element: 'email' })}>
                        <Icon icon="email" size="lg" />
                        <a href="mailto:info.sfericok@gmail.com">
                            info.sfericok@gmail.com
                        </a>
                    </div>
                    <div className={toBEM({ block, element: 'telefon' })}>
                        <Icon icon="call" size="lg" />
                        <p>(+34) 609 061 492 / 616 860 388</p>
                    </div>
                </div>

                <div className={toBEM({ block, element: 'col' })}>
                    <p
                        className={toBEM({
                            block,
                            element: 'title',
                        })}
                    >
                        Enllaços ràpids
                    </p>
                    <ul className={toBEM({ block, element: 'menu' })}>
                        <li>
                            <Link to="/">Inici</Link>
                        </li>
                        <li>
                            <Link to="/el-club">El Club</Link>
                        </li>
                        <li>
                            <Link to="/seccions">Seccions</Link>
                        </li>
                        <li>
                            <Link to="/equips">Equips</Link>
                        </li>
                        <li>
                            <Link to="/horari-entrenaments">Horari</Link>
                        </li>
                        <li>
                            <Link to="/botiga">Botiga</Link>
                        </li>
                        <li>
                            <Link to="/contacte">Contacte</Link>
                        </li>
                        <li>
                            <Link to="/inscripcions">Inscriu-te</Link>
                        </li>
                    </ul>
                </div>

                <div className={toBEM({ block, element: 'col' })}>
                    <p
                        className={toBEM({
                            block,
                            element: 'title',
                        })}
                    >
                        Segueix-nos!
                    </p>
                    <div className={toBEM({ block, element: 'instagram' })}>
                        <Icon icon="instagram" size="lg" />
                        <a
                            href="https://www.instagram.com/oksfericterrassa/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            @oksfericterrassa
                        </a>
                    </div>
                </div>
                <div className={toBEM({ block, element: 'col-img' })}>
                    <img
                        loading="lazy"
                        src="/logo-sferic-footer.png"
                        alt="logo"
                        className={toBEM({ block, element: 'logo-sferic' })}
                    />
                </div>
            </section>

            <div className={toBEM({ block, element: 'copyright' })}>
                <small>
                    © 2025 Sferic Hoquei patins Terrassa. Dissenyat per Mireia
                    Torras
                </small>
                <img
                    loading="lazy"
                    src="/logo-ajuntament.png"
                    alt="Ajuntament"
                    className={toBEM({ block, element: 'ajuntament' })}
                />
            </div>
        </footer>
    );
};

export default Footer;
