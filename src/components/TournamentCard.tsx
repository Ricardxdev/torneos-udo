import React from 'react';
import { motion } from 'framer-motion';
import type { Tournament } from '../data/tournaments';
import { ExternalLink, Info } from 'lucide-react';

interface Props {
  tournament: Tournament;
  onClick: (tournament: Tournament) => void;
  onJoin?: (link: string) => void;
}

export const TournamentCard: React.FC<Props> = ({ tournament, onClick, onJoin }) => {
  const handleJoinClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onJoin && tournament.whatsappLink) {
      onJoin(tournament.whatsappLink);
    } else if (tournament.whatsappLink) {
      window.open(tournament.whatsappLink, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <motion.div
      className="banner-card"
      whileHover={{ y: -5, filter: "brightness(1.2)" }}
      whileTap={{ scale: 0.98 }}
      onClick={() => onClick(tournament)}
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      <img src={tournament.image} alt={tournament.game} className="banner-image" />
      
      <div className="card-actions">
        <button 
          className="card-action-btn join-btn"
          onClick={handleJoinClick}
          onPointerDown={(e) => e.stopPropagation()}
        >
          <ExternalLink size={16} style={{ marginRight: '4px' }} />
          Unirse
        </button>
        <button 
          className="card-action-btn details-btn"
          onClick={(e) => {
            e.stopPropagation();
            onClick(tournament);
          }}
          onPointerDown={(e) => e.stopPropagation()}
        >
          <Info size={16} style={{ marginRight: '4px' }} />
          Detalles
        </button>
      </div>
    </motion.div>
  );
};


