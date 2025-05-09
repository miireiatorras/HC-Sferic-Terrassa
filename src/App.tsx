import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import {
    registerBlockName,
    BaseComponentProps,
    getBaseComponentProps,
} from '@/utils';
import { Home } from './ui/layout/Home/Home';
import { Navbar } from './ui/layout/navbar/Navbar';
import { ElClub } from './pages/el-club/El-Club';
import { Seccions } from './pages/seccions/Seccions';
import { Equips } from './pages/equips/Equips';
import { Botiga } from './pages/botiga/Botiga';
import { Contacte } from './pages/contacte/Contacte';
import { Inscripcions } from './pages/inscripcions/Inscripcions';
import { Horari } from './pages/horari/Horari';
import Footer from './features/footer/Footer';
import { ScrollButton } from './ui/scroll-button/ScrollButton';

export type AppProps = BaseComponentProps & {};

const block = registerBlockName('App');

export const App = ({ ...props }: AppProps) => {
    return (
        <Router>
            <div {...getBaseComponentProps({ ...props, block })}>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/el-club" element={<ElClub />} />
                    <Route path="/seccions" element={<Seccions />} />
                    <Route path="/equips" element={<Equips />} />
                    <Route path="/horari" element={<Horari />} />
                    <Route path="/botiga" element={<Botiga />} />
                    <Route path="/contacte" element={<Contacte />} />
                    <Route path="/inscripcions" element={<Inscripcions />} />
                </Routes>
                <ScrollButton />

                <Footer />
            </div>
        </Router>
    );
};
