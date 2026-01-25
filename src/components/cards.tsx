import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import type { Tournament } from "../data/tournaments";

interface CardProps {
  data: Tournament;
  setSelectedTournament: (tournament: Tournament) => void;
}

export const Card = ({ data, setSelectedTournament }: CardProps) => {
  return (
    <div className="card-content" style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.0) 20%, rgba(0, 0, 0, 0.7)80%),url(${data.image})` }}>
      <h2 className="heading">{data.game}</h2>
      <a className="btn-register" href={data.whatsappLink}>Inscribirse</a>
      <button className="btn-info" onClick={() => setSelectedTournament(data)}>Mas infomación</button>
    </div>
  );
};