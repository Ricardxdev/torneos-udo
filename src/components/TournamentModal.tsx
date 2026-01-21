import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, MapPin, Trophy, MessageCircle, QrCode, ArrowLeft, Monitor, Gamepad2, Swords } from 'lucide-react';
import type { Tournament } from '../data/tournaments';

interface Props {
  selectedTournament: Tournament | null;
  onClose: () => void;
}

export const TournamentModal: React.FC<Props> = ({ selectedTournament, onClose }) => {
  const [showRegistration, setShowRegistration] = useState(false);

  useEffect(() => {
    if (!selectedTournament) {
      setShowRegistration(false);
    }
  }, [selectedTournament]);

  const handleRegister = () => {
    if (selectedTournament?.whatsappLink) {
      setShowRegistration(true);
    } else {
      alert(`Inscripción para ${selectedTournament?.game} próximamente`);
    }
  };

  return createPortal(
    <AnimatePresence>
      {selectedTournament && (
        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="modal-content"
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-btn" onClick={onClose}>
              <X size={24} />
            </button>
            
            <div className="modal-header">
              <img 
                src={selectedTournament.image} 
                alt={selectedTournament.game} 
                className="modal-image"
              />
              <div className="modal-title-container">
                <h2 className="modal-title">{selectedTournament.game}</h2>
              </div>
            </div>

            <div className="modal-body">
              {!showRegistration ? (
                <>
                  <div className="info-grid">
                    <div className="info-item">
                      <Calendar className="info-icon" size={20} />
                      <div>
                        <span className="info-label">Fecha</span>
                        <p>{selectedTournament.date}</p>
                      </div>
                    </div>
                    
                    <div className="info-item">
                      <Clock className="info-icon" size={20} />
                      <div>
                        <span className="info-label">Hora</span>
                        <p>{selectedTournament.time}</p>
                      </div>
                    </div>
                    
                    <div className="info-item">
                      <MapPin className="info-icon" size={20} />
                      <div>
                        <span className="info-label">Edificio</span>
                        <p>{selectedTournament.building}</p>
                        <span className="info-label-sm" style={{ fontSize: '0.8em', color: '#aaa' }}>Salón: {selectedTournament.location}</span>
                      </div>
                    </div>

                    {selectedTournament.platform && (
                      <div className="info-item">
                        <Gamepad2 className="info-icon" size={20} />
                        <div>
                          <span className="info-label">Plataforma</span>
                          <p>{selectedTournament.platform}</p>
                        </div>
                      </div>
                    )}

                    {selectedTournament.machineCount && (
                      <div className="info-item">
                        <Monitor className="info-icon" size={20} />
                        <div>
                          <span className="info-label">Setup</span>
                          <p>{selectedTournament.machineCount} Equipos</p>
                        </div>
                      </div>
                    )}

                    {selectedTournament.format && (
                      <div className="info-item">
                        <Swords className="info-icon" size={20} />
                        <div>
                          <span className="info-label">Formato</span>
                          <p>{selectedTournament.format}</p>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="description-box">
                      <p>{selectedTournament.description}</p>
                  </div>

                {selectedTournament.prizes && selectedTournament.prizes.length > 0 && (
                  <div className="details-section">
                    <div className="detail-column" style={{ width: '100%' }}>
                      <h3 className="section-title">
                        <Trophy className="info-icon" size={18} />
                        Premios
                      </h3>
                      <ul className="modal-list">
                        {selectedTournament.prizes.map((prize, idx) => (
                          <li key={idx}>{prize}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                  <button className="register-btn modal-action-btn" onClick={handleRegister}>
                    Inscribirse al Evento
                  </button>
                </>
              ) : (
                <motion.div 
                  className="registration-section" 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}
                >
                    <button 
                      onClick={() => setShowRegistration(false)}
                      style={{ 
                        alignSelf: 'flex-start', 
                        background: 'none', 
                        border: 'none', 
                        color: 'var(--text-secondary)',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        fontSize: '0.9rem',
                        padding: 0
                      }}
                    >
                      <ArrowLeft size={18} /> Volver
                    </button>

                    <h3 style={{ fontSize: '1.2rem', margin: '0 0 1rem 0' }}>Únete al grupo del torneo</h3>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)' }}>
                        <QrCode size={18} />
                        <span style={{ fontSize: '0.9rem' }}>Escanea para unirte al grupo</span>
                    </div>
                    
                    {selectedTournament.qrCode && (
                        <div className="qr-container" style={{ width: '200px', height: '200px', background: 'white', padding: '10px', borderRadius: '12px' }}>
                            <img 
                                src={selectedTournament.qrCode} 
                                alt="QR WhatsApp" 
                                style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
                            />
                        </div>
                    )}

                    <a 
                        href={selectedTournament.whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="register-btn modal-action-btn"
                        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', textDecoration: 'none', width: '100%', marginTop: '1rem' }}
                    >
                        <MessageCircle size={20} />
                        Unirse al Grupo de WhatsApp
                    </a>
                </motion.div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};
