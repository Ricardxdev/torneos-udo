import { useState, useEffect } from "react";

export const Hero = () => {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="hero">
            <div className={isMobile ? "hero-content-mobile" : "hero-content"}>
                <h1 className="hero-title">Gran semana de <span>eventos</span></h1>
                <p className="hero-subtitle">Torneos toda la semana, y concierto al final.</p>
                <div className="container-button">
                    <button className="cta-button" onClick={() => window.scrollTo({ top: document.getElementById('tournament-section')?.offsetTop || 0, behavior: 'smooth' })}>Ver eventos</button>
                </div>
            </div>
        </div>
    );
};