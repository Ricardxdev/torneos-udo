import { useState, useEffect } from 'react'
import { tournaments, type Tournament } from './data/tournaments'
import { Carousel } from './components/Carousel'
import { TournamentCard } from './components/TournamentCard'
import { TournamentModal } from './components/TournamentModal'
import { NoticeModal } from './components/NoticeModal'
import './App.css'

function App() {
  const [selectedTournament, setSelectedTournament] = useState<Tournament | null>(null)
  const [showNotice, setShowNotice] = useState(false)

  useEffect(() => {
    const hasSeenNotice = localStorage.getItem('hasSeenRescheduleNotice')
    if (!hasSeenNotice) {
      setShowNotice(true)
    }
  }, [])

  const handleCloseNotice = () => {
    setShowNotice(false)
    localStorage.setItem('hasSeenRescheduleNotice', 'true')
  }

  const kpopTournament = tournaments.find(t => t.id === 'kpop-dh')
  const carouselTournaments = tournaments.filter(t => t.id !== 'kpop-dh')

  return (
    <div className="container">
      <header className="app-header">
        <img src="/logo-udo.png" alt="Logo UDO" className="udo-logo" />
        <h1 className="app-title">Torneos y Eventos</h1>
      </header>

      {/* <div className="controls">
        <label>
          <input 
            type="radio" 
            name="orientation" 
            value="horizontal" 
            checked={orientation === 'horizontal'} 
            onChange={() => setOrientation('horizontal')} 
          /> Horizontal
        </label>
        <label>
          <input 
            type="radio" 
            name="orientation" 
            value="vertical" 
            checked={orientation === 'vertical'} 
            onChange={() => setOrientation('vertical')} 
          /> Vertical
        </label>
      </div> */}

      <main className="gallery">
        <Carousel 
          tournaments={carouselTournaments} 
          onSelect={setSelectedTournament} 
          showControls={false}
        />

        {kpopTournament && (
          <div className="special-event-container">
            <h2 className="section-title">Evento Especial</h2>
            <div className="special-card-wrapper">
              <TournamentCard 
                tournament={kpopTournament} 
                onClick={setSelectedTournament} 
              />
            </div>
          </div>
        )}

        <section className="info-section">
          <h2>Sobre el Evento</h2>
          <p>
            Somos estudiantes de la asignatura de <strong>Organización y Estructura del Computador</strong> en La Universidad de Oriente Núcleo Nueva Esparta (UDONE).
          </p>
          <p>
            Estaremos realizando eventos durante la semana del <strong>2 al 6 de febrero</strong> con el fin de recaudar fondos para financiar nuestro proyecto de realizar una impresora 3d casera.
          </p>
        </section>
      </main>

      <TournamentModal 
        selectedTournament={selectedTournament} 
        onClose={() => setSelectedTournament(null)} 
      />
      
      <NoticeModal 
        isOpen={showNotice} 
        onClose={handleCloseNotice} 
      />
    </div>
  )
}

export default App
