import {
    registerBlockName,
    BaseComponentProps,
    getBaseComponentProps,
    toBEM,
} from '@/utils';
import { Link } from 'react-router-dom';

import './Navbar.scss';
import { Button } from '@/ui/button/Button';

export type NavbarProps = BaseComponentProps;

const block = registerBlockName('Navbar');

export const Navbar = (props: NavbarProps) => {
    return (
        <nav
            {...getBaseComponentProps({ ...props, block })}
            className={toBEM({ block })}
        >
            <div className={toBEM({ block, element: 'logo' })}>
                <Link to="/" className={toBEM({ block, element: 'logo-link' })}>
                    <img
                        src="/logo-tranp.png"
                        alt="logo"
                        className={toBEM({ block, element: 'logo-img' })}
                    />
                </Link>
            </div>
            <h1 className={toBEM({ block, element: 'title' })}>
                Sferic Hoquei Patins
            </h1>
            <ul className={toBEM({ block, element: 'menu' })}>
                <li className={toBEM({ block, element: 'menu-item' })}>
                    <Link
                        to="/"
                        className={toBEM({ block, element: 'menu-link' })}
                    >
                        Inici
                    </Link>
                </li>
                <li className={toBEM({ block, element: 'menu-item' })}>
                    <Link
                        to="/el-club"
                        className={toBEM({ block, element: 'menu-link' })}
                    >
                        El Club
                    </Link>
                </li>
                <li className={toBEM({ block, element: 'menu-item' })}>
                    <Link
                        to="/seccions"
                        className={toBEM({ block, element: 'menu-link' })}
                    >
                        Seccions
                    </Link>
                </li>
                <li className={toBEM({ block, element: 'menu-item' })}>
                    <Link
                        to="/equips"
                        className={toBEM({ block, element: 'menu-link' })}
                    >
                        Equips
                    </Link>
                </li>
                <li className={toBEM({ block, element: 'menu-item' })}>
                    <Link
                        to="/horari"
                        className={toBEM({ block, element: 'menu-link' })}
                    >
                        Horari
                    </Link>
                </li>
                <li className={toBEM({ block, element: 'menu-item' })}>
                    <Link
                        to="/botiga"
                        className={toBEM({ block, element: 'menu-link' })}
                    >
                        Botiga
                    </Link>
                </li>
                <li className={toBEM({ block, element: 'menu-item' })}>
                    <Link
                        to="/contacte"
                        className={toBEM({ block, element: 'menu-link' })}
                    >
                        Contacte
                    </Link>
                </li>
                <li className={toBEM({ block, element: 'menu-item' })}>
                    <Button
                        as={Link}
                        to="/inscripcions"
                        variant="primary"
                        className={toBEM({ block, element: 'menu-button' })}
                    >
                        Inscriu-te
                    </Button>
                </li>
            </ul>
        </nav>
    );
};
export default Navbar;
