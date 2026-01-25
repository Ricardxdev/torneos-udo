import { useState } from 'react'
import { tournaments, type Tournament } from './data/tournaments'
import { Carousel } from './components/Carousel'
import { TournamentModal } from './components/TournamentModal'
import { Hero } from './components/hero'
import { Card } from './components/cards'
import './App.css'

function App() {
  const [selectedTournament, setSelectedTournament] = useState<Tournament | null>(null)


  return (
    <div className="container">
      <header className="app-header">
        <img src="/logo-udo.png" alt="Logo UDO" className="udo-logo" />
        <h1 className="app-title">EICA Gaming</h1>
      </header>

      <Hero />

      <section className="tournament-section" id='tournament-section'>
        <h3 className='section-title'>Torneos disponibles</h3>
        <Carousel>
          {tournaments.filter((tournament) => tournament.id !== 'kpop-dh').map((tournament) => (
            <Card
              key={tournament.id}
              data={tournament}
              setSelectedTournament={setSelectedTournament}
            />
          ))}
        </Carousel>
      </section>

      <h3 className='section-title'>Concierto J Hope</h3>
      <div className="concierto">
        <Card data={tournaments[4]} setSelectedTournament={setSelectedTournament} />
      </div>

      <TournamentModal
        selectedTournament={selectedTournament}
        onClose={() => setSelectedTournament(null)}
      />
    </div>
  )
}

export default App
