import React from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { CalendarClock, AlertCircle } from 'lucide-react';

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

export const NoticeModal: React.FC<Props> = ({ isOpen, onClose }) => {
    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="modal-overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    style={{ zIndex: 200 }} // Ensure it's above other modals if any
                >
                    <motion.div
                        className="modal-content"
                        initial={{ opacity: 0, scale: 0.8, y: 50 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 50 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        style={{ maxWidth: '500px', textAlign: 'center' }}
                    >
                        <div className="modal-header" style={{ height: 'auto', paddingTop: '2rem', justifyContent: 'center', marginBottom: '1rem', border: 'none' }}>
                            <AlertCircle size={56} color="#a060ff" />
                        </div>

                        <h2 className="modal-title" style={{ position: 'relative', fontSize: '1.8rem', marginBottom: '0.5rem' }}>
                            Aviso Importante
                        </h2>

                        <div className="modal-body" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#e0e0e0' }}>
                                Lamentamos los inconvenientes ocasionados. Por motivos de organización, los torneos han sido reprogramados para la próxima semana
                                <br />
                                <strong>(del 2 al 6 de febrero)</strong>.
                                <br /><br />
                                Les invitamos a estar atentos a la página y a los avisos para futuras actualizaciones. Agradecemos su comprensión.
                            </p>

                            <div style={{ marginTop: '0.5rem', marginBottom: '1rem', display: 'flex', gap: '0.5rem', alignItems: 'center', color: '#a060ff' }}>
                                <CalendarClock size={20} />
                                <span>Nueva fecha confirmada</span>
                            </div>

                            <button
                                className="modal-action-btn"
                                onClick={onClose}
                                style={{ width: '100%' }}
                            >
                                Entendido
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>,
        document.body
    );
};
