import { motion } from 'framer-motion';
import './patrocinadors.scss';
import { Title } from '@/ui/titles/Title';

function Patrocinadors() {
    const logos = [
        'elymet_mail.png',
        'hockeyteam-logo.png',
        'moto-project-logo.jpg',
        'rmdislovall-logo.png',
        'storepack-logo.png',
        'caldereria-jocasa-logo.png',
    ];

    return (
        <>
            <Title>Patrocinadors</Title>

            <section className="logos-sponsors">
                {logos.map((src, index) => (
                    <motion.img
                        key={index}
                        src={`/logos-sponsors/${src}`}
                        alt={src.split('.')[0]}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                    />
                ))}
            </section>

            <div className="contacte-main">
                <p>Si t’agrada el que fem, suma-t’hi!</p>
                <span>
                    <a href="/contacte">Contacta’ns!</a>
                </span>
            </div>
        </>
    );
}

export default Patrocinadors;
