import { motion } from 'framer-motion';
import type { Tournament } from '../data/tournaments';

interface Props {
  tournament: Tournament;
  onClick: (tournament: Tournament) => void;
}

export const TournamentCard: React.FC<Props> = ({ tournament, onClick }) => {
  return (
    <motion.div
      className="banner-card"
      whileHover={{ scale: 1.05, filter: "brightness(1.2)" }}
      whileTap={{ scale: 0.95 }}
      onClick={() => onClick(tournament)}
    >
      <img src={tournament.image} alt={tournament.game} className="banner-image" />
    </motion.div>
  );
};

