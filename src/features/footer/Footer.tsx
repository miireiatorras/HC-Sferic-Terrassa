import React from 'react';
import './footer.scss';
import data from './footer.json';
import { Icon } from '@/ui/Icon/Icon';
import { Link, NavLink } from 'react-router-dom';
import {
    toBEM,
    registerBlockName,
    BaseComponentProps,
    getBaseComponentProps,
} from '@/utils';

const block = registerBlockName('footer');

export const Footer = (props: BaseComponentProps) => {
    const {
        ubicacio,
        email,
        telefon,
        menu,
        instagram,
        logoFooterSrc,
        logoLinkHref,
        logoSrc,
        copyright,
        ajuntamentSrc,
    } = data;

    return (
        <footer {...getBaseComponentProps({ ...props, block })}>
            <section className={toBEM({ block, element: 'section' })}>
                <div className={toBEM({ block, element: 'col-img' })}>
                    <NavLink
                        to={logoLinkHref}
                        className={toBEM({ block, element: 'logo-link' })}
                        aria-label="Inici"
                    >
                        <img
                            loading="lazy"
                            src={logoSrc}
                            alt="logo"
                            className={toBEM({ block, element: 'logo' })}
                        />
                    </NavLink>
                </div>

                <div className={toBEM({ block, element: 'col' })}>
                    <p className={toBEM({ block, element: 'title' })}>
                        {ubicacio.title}
                    </p>
                    <div className={toBEM({ block, element: 'ubicacio' })}>
                        <Icon icon="location_on" size="lg" aria-hidden="true" />
                        <p>{ubicacio.text}</p>
                    </div>
                    <div className={toBEM({ block, element: 'email' })}>
                        <Icon icon="email" size="lg" aria-hidden="true" />
                        <a
                            href={`mailto:${email.user}@${email.domain}`}
                            aria-label={`Enviar correu a ${email.user}@${email.domain}`}
                        >
                            {email.user}@{email.domain}
                        </a>
                    </div>
                    <div className={toBEM({ block, element: 'telefon' })}>
                        <Icon icon="call" size="lg" aria-hidden="true" />
                        {telefon.map((tel, i) => (
                            <React.Fragment key={i}>
                                {i > 0 && ' / '}
                                <a
                                    href={`tel:${tel}`}
                                    aria-label={`Trucar al telèfon ${tel.replace(
                                        '+34',
                                        '(+34) '
                                    )}`}
                                >
                                    {tel.replace('+34', '(+34) ')}
                                </a>
                            </React.Fragment>
                        ))}
                    </div>
                </div>

                <div className={toBEM({ block, element: 'col' })}>
                    <p className={toBEM({ block, element: 'title' })}>
                        Enllaços ràpids
                    </p>
                    <ul className={toBEM({ block, element: 'menu' })}>
                        {menu.map(({ text, href }, i) => (
                            <li key={i}>
                                <Link to={href}>{text}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className={toBEM({ block, element: 'col' })}>
                    <p className={toBEM({ block, element: 'title' })}>
                        Segueix-nos!
                    </p>
                    <div className={toBEM({ block, element: 'instagram' })}>
                        <Icon icon="instagram" size="lg" aria-hidden="true" />
                        <a
                            href={instagram.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Instagram de ${instagram.username}`}
                        >
                            {instagram.username}
                        </a>
                    </div>
                </div>

                <div className={toBEM({ block, element: 'col-img' })}>
                    <img
                        loading="lazy"
                        src={logoFooterSrc}
                        alt="logo HC SFERIC Terrassa"
                        className={toBEM({ block, element: 'logo-sferic' })}
                    />
                </div>
            </section>

            <div className={toBEM({ block, element: 'copyright' })}>
                <small>{copyright}</small>
                <img
                    loading="lazy"
                    src={ajuntamentSrc}
                    alt="Ajuntament"
                    className={toBEM({ block, element: 'ajuntament' })}
                />
            </div>
        </footer>
    );
};

export default Footer;
