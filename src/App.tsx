import { useState } from 'react'
import { tournaments, type Tournament } from './data/tournaments'
import { Carousel } from './components/Carousel'
import { TournamentModal } from './components/TournamentModal'
import './App.css'

function App() {
  const [selectedTournament, setSelectedTournament] = useState<Tournament | null>(null)
  const [orientation, setOrientation] = useState<'horizontal' | 'vertical'>('horizontal')

  const marginTopGallery = orientation === 'horizontal' ? '2rem' : '2.8rem';
  const marginTopCtaText = orientation === 'horizontal' ? '2rem' : '6rem';

  return (
    <div className="container">
      <header className="app-header">
        <img src="/logo-udo.png" alt="Logo UDO" className="udo-logo" />
        <h1 className="app-title">Torneos y Eventos</h1>
      </header>

      <div className="controls">
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
      </div>

      <main className="gallery" style={{ '--margin-top-gallery': marginTopGallery } as React.CSSProperties}>
        <Carousel
          tournaments={tournaments}
          onSelect={setSelectedTournament}
          orientation={orientation}
          showControls={false}
        />
        <p className="cta-text" style={{ '--margin-top-cta-text': marginTopCtaText } as React.CSSProperties}>Selecciona el evento del cual deseas formar parte</p>

        <section className="info-section">
          <h2>Sobre el Evento</h2>
          <p>
            Somos estudiantes de la asignatura de <strong>Organización y Estructura del Computador</strong> en La Universidad de Oriente Núcleo Nueva Esparta (UDONE).
          </p>
          <p>
            Estaremos realizando eventos durante la semana del <strong>26 al 30 de enero</strong> con el fin de recaudar fondos para financiar nuestro proyecto de realizar una impresora 3d casera.
          </p>
        </section>
      </main>

      <TournamentModal
        selectedTournament={selectedTournament}
        onClose={() => setSelectedTournament(null)}
      />
    </div>
  )
}

export default App
