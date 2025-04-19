import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import {
    registerBlockName,
    BaseComponentProps,
    getBaseComponentProps,
} from '@/utils';
// import Footer from './features/footer/Footer';
import { Home } from './ui/layout/Home/Home';
import { Navbar } from './ui/layout/navbar/Navbar';
import { ElClub } from './pages/el-club/El-Club';
import { Seccions } from './pages/seccions/Seccions';
import { Equips } from './pages/equips/Equips';
import { Botiga } from './pages/botiga/Botiga';
import { Contacte } from './pages/contacte/Contacte';
import { Inscripcions } from './pages/inscripcions/Inscripcions';
import { Horari } from './pages/horari/Horari';

export type AppProps = BaseComponentProps & {
    children?: React.ReactNode;
};

const block = registerBlockName('App');

export const App = ({ children, ...props }: AppProps) => {
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

                    {/* <Route path="/results" element={<ResultsPage />} />
          <Route path="/details/:id" element={<DetailsPage />} />
          <Route path="/emotions" element={<EmotionsPage />} /> */}
                </Routes>
                {/* <Footer /> */}
                {children}
            </div>
        </Router>
    );
};
