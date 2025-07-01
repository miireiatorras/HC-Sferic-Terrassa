import React, { useEffect, useRef } from 'react';
import './CookieConsent.scss';

interface CookieConsentProps {
    onAccept: () => void;
}

const CookieConsent: React.FC<CookieConsentProps> = ({ onAccept }) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        ref.current?.focus();
    }, []);

    return (
        <div
            className="cookie-consent-modal"
            role="dialog"
            aria-modal="true"
            tabIndex={-1}
            ref={ref}
        >
            <div className="cookie-consent-content">
                <h2>Consentiment de cookies</h2>
                <p>
                    Aquest lloc web utilitza únicament cookies tècnicament
                    necessàries per al correcte funcionament del servei. No fem
                    servir cookies d’anàlisi ni de publicitat i no es recullen
                    dades personals. En continuar navegant, consentiu l’ús
                    d’aquestes cookies.{' '}
                    <a
                        href="/cookies"
                        style={{
                            textDecoration: 'underline',
                            color: '#1976d2',
                        }}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Més informació a la nostra Política de Cookies.
                    </a>
                </p>
                <button onClick={onAccept} autoFocus>
                    Acceptar
                </button>
            </div>
        </div>
    );
};

export default CookieConsent;
