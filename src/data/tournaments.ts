export interface Tournament {
  id: string;
  game: string;
  image: string;
  date: string;
  time: string;
  building: string;
  location: string;
  prizes: string[];
  description: string;
  whatsappLink?: string;
  qrCode?: string;
  machineCount?: number;
  platform?: string;
  format?: string;
}

export const tournaments: Tournament[] = [
  {
    id: 'mk9',
    game: 'Mortal Kombat 2011',
    image: '/Mk2011.webp',
    date: 'Lunes 26 Enero 2026',
    time: '8:00 AM - 12:00 PM',
    building: 'EICA',
    location: 'Por definir',
    prizes: ['1er Lugar: 20$', '2do Lugar: 5$', '3er Lugar: 3$'],
    description: '¡Finish Him! El torneo más brutal regresa.',
    whatsappLink: 'https://chat.whatsapp.com/DOnh33pG5gE0J5qMlEM4u3',
    qrCode: '/qrs/mk9.png',
    machineCount: 2,
    platform: 'PS3',
    format: 'Eliminación Directa'
  },
  {
    id: 'projectm',
    game: 'Project M',
    image: '/projectm-flyer-banner.png',
    date: 'Martes 27 Enero 2026',
    time: '8:00 AM - 12:00 PM',
    building: 'EICA',
    location: 'Por definir',
    prizes: ['1er Lugar: 20$', '2do Lugar: 5$', '3er Lugar: 3$'],
    description: 'El mod definitivo de Smash llega a la EICA. ¿Estás listo?',
    whatsappLink: 'https://chat.whatsapp.com/KNthwOiu3Hh87em5rCSVio',
    qrCode: '/qrs/projectm.png',
    machineCount: 2,
    platform: 'PC/Laptop',
    format: 'Eliminación Directa'
  },
  {
    id: 'brawl',
    game: 'Super Smash Flash 2',
    image: '/supersmashflash2-flyer-banner.png',
    date: 'Miércoles 28 Enero 2026',
    time: '8:00 AM - 12:00 PM',
    building: 'EICA',
    location: 'Por definir',
    prizes: ['1er Lugar: 20$', '2do Lugar: 5$', '3er Lugar: 3$'],
    description: 'El clásico de navegador llevado al siguiente nivel competitivo.',
    whatsappLink: 'https://chat.whatsapp.com/FqtgsYEDNgt1r2x1kHzSxm',
    qrCode: '/qrs/ssf2.png',
    machineCount: 2,
    platform: 'PC/Laptop',
    format: 'Eliminación Directa'
  },
  {
    id: 'fighterz',
    game: 'Dragon Ball FighterZ',
    image: '/fighterz-flyer-banner.jpg',
    date: 'Jueves 29 Enero 2026',
    time: '8:00 AM - 12:00 PM',
    building: 'EICA',
    location: 'Por definir',
    prizes: ['1er Lugar: 20$', '2do Lugar: 5$', '3er Lugar: 3$'],
    description: 'Demuestra tu ki en este torneo explosivo de Dragon Ball FighterZ.',
    whatsappLink: 'https://chat.whatsapp.com/FgvgyJzO7U3Fe2eOjitMHx',
    qrCode: '/qrs/fighterz.png',
    machineCount: 2,
    platform: 'PC/Laptop',
    format: 'Eliminación Directa'
  },
  {
    id: 'kpop-dh',
    game: 'K-Pop Demon Hunter',
    image: '/kpop.webp',
    date: 'Viernes 30 Enero 2026',
    time: '8:00 AM - 12:00 PM',
    building: 'EICA',
    location: 'Por definir',
    prizes: [],
    description: 'Combina ritmo y acción en el torneo más dinámico de K-Pop Demon Hunter.',
    whatsappLink: 'https://chat.whatsapp.com/B9jBMl3mC3C7QeWpZE0Iz6',
    qrCode: '/qrs/kpop.png'
  }
];

