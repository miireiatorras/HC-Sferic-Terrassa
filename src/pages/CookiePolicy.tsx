import React from 'react';
import './CookiePolicy.scss';

const CookiePolicy: React.FC = () => (
    <div className="cookie-policy-page">
        <h1>Política de Cookies</h1>
        <p>
            Aquesta web només utilitza cookies tècniques estrictament
            necessàries per al funcionament correcte del lloc. No utilitzem
            cookies d'anàlisi, publicitat ni recollim dades personals dels
            usuaris.
        </p>
        <ul>
            <li>
                <strong>Quines cookies utilitzem?</strong> Només cookies de
                sessió i preferències bàsiques per recordar l'acceptació del
                consentiment.
            </li>
            <li>
                <strong>Com pots gestionar les cookies?</strong> Pots eliminar o
                bloquejar les cookies des de la configuració del teu navegador,
                però algunes funcionalitats bàsiques podrien deixar de
                funcionar.
            </li>
            <li>
                <strong>Responsable:</strong> HC SFERIC Terrassa
            </li>
            <li>
                <strong>Contacte:</strong> info.sfericok@gmail.com
            </li>
        </ul>
        <p>Si tens dubtes, pots contactar amb nosaltres per email.</p>
    </div>
);

export default CookiePolicy;
