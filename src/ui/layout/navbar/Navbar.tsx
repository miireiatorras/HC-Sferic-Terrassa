import { useEffect, useState } from 'react';
import {
    registerBlockName,
    BaseComponentProps,
    getBaseComponentProps,
    toBEM,
} from '@/utils';
import { NavLink, useLocation } from 'react-router-dom';
import { Button } from '@/ui/button/Button';
import './Navbar.scss';
import { Icon } from '@/ui/Icon/Icon';

export type NavbarProps = BaseComponentProps;
const block = registerBlockName('Navbar');

const links = [
    { to: '/', label: 'Inici' },
    { to: '/el-club', label: 'El Club' },
    { to: '/seccions', label: 'Seccions' },
    { to: '/equips', label: 'Equips' },
    { to: '/horari', label: 'Horari' },
    { to: '/botiga', label: 'Botiga' },
    { to: '/contacte', label: 'Contacte' },
];

export const Navbar = (props: NavbarProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setIsOpen(false);
    }, [location.pathname]);
    return (
        <nav
            {...getBaseComponentProps({ ...props, block })}
            className={toBEM({ block })}
        >
            <div className={toBEM({ block, element: 'brand' })}>
                <NavLink
                    to="/"
                    className={toBEM({ block, element: 'logo-link' })}
                >
                    <img
                        loading="lazy"
                        src="/logo-tranp.png"
                        alt="logo"
                        className={toBEM({ block, element: 'logo-img' })}
                    />
                </NavLink>
                <NavLink
                    to="/"
                    className={toBEM({ block, element: 'title-link' })}
                >
                    <h2 className={toBEM({ block, element: 'title' })}>
                        HC. SFERIC TERRASSA
                    </h2>
                </NavLink>
            </div>

            <button
                className={toBEM({ block, element: 'toggle' })}
                onClick={() => setIsOpen((o) => !o)}
                aria-label={isOpen ? 'Tancar menú' : 'Obrir menú'}
            >
                {isOpen ? (
                    <Icon icon="clear" size="lg" />
                ) : (
                    <Icon icon="menu" size="lg" />
                )}
            </button>

            <ul className={toBEM({ block, element: 'menu' })}>
                {links.map(({ to, label }) => (
                    <li
                        key={to}
                        className={toBEM({ block, element: 'menu-item' })}
                    >
                        <NavLink
                            to={to}
                            className={({ isActive }) =>
                                toBEM({
                                    block,
                                    element: 'menu-link',
                                    modifiers: isActive ? ['active'] : [],
                                })
                            }
                        >
                            {label}
                        </NavLink>
                    </li>
                ))}
            </ul>

            <div className={toBEM({ block, element: 'cta' })}>
                <Button
                    as={NavLink}
                    to="/inscripcions"
                    variant="primary-white"
                    className={toBEM({ block, element: 'menu-button' })}
                >
                    Inscriu-te
                </Button>
            </div>

            <div
                className={toBEM({
                    block,
                    element: 'mobile-menu',
                    modifiers: isOpen ? ['open'] : [],
                })}
            >
                <ul className={toBEM({ block, element: 'mobile-list' })}>
                    {links.map(({ to, label }) => (
                        <li
                            key={to}
                            className={toBEM({ block, element: 'mobile-item' })}
                        >
                            <NavLink
                                to={to}
                                onClick={() => setIsOpen(false)}
                                className={({ isActive }) =>
                                    toBEM({
                                        block,
                                        element: 'mobile-link',
                                        modifiers: isActive ? ['active'] : [],
                                    })
                                }
                            >
                                {label}
                            </NavLink>
                        </li>
                    ))}
                </ul>
                <div className={toBEM({ block, element: 'mobile-cta' })}>
                    <Button
                        as={NavLink}
                        to="/inscripcions"
                        variant="primary-white"
                        className={toBEM({ block, element: 'mobile-button' })}
                    >
                        Inscriu-te
                    </Button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
