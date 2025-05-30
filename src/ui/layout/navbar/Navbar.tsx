import { useState } from 'react';
import {
    registerBlockName,
    BaseComponentProps,
    getBaseComponentProps,
    toBEM,
} from '@/utils';
import { NavLink } from 'react-router-dom';
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

    return (
        <nav
            {...getBaseComponentProps({ ...props, block })}
            className={toBEM({ block })}
        >
            {/* 1. Branding */}
            <div className={toBEM({ block, element: 'brand' })}>
                <NavLink
                    to="/"
                    className={toBEM({ block, element: 'logo-link' })}
                >
                    <img
                        src="/logo-tranp.png"
                        alt="logo"
                        className={toBEM({ block, element: 'logo-img' })}
                    />
                </NavLink>
                <h1 className={toBEM({ block, element: 'title' })}>
                    HC. SFERIC TERRASSA
                </h1>
            </div>

            {/* 2. Toggle móvil */}
            <button
                className={toBEM({ block, element: 'toggle' })}
                onClick={() => setIsOpen((o) => !o)}
                aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
                {isOpen ? (
                    <Icon icon="group" size="sm" />
                ) : (
                    <Icon icon="filter" size="sm" />
                )}
            </button>

            {/* 3. Menú desktop */}
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

            {/* 4. CTA desktop */}
            <div className={toBEM({ block, element: 'cta' })}>
                <Button
                    as={NavLink}
                    to="/inscripcions"
                    variant="primary"
                    className={toBEM({ block, element: 'menu-button' })}
                >
                    Inscriu-te
                </Button>
            </div>

            {/* 5. Panel móvil */}
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
                        onClick={() => setIsOpen(false)}
                        variant="primary"
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
