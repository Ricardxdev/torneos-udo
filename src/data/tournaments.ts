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
  price?: number;
  registrationNotes?: string;
}

export const tournaments: Tournament[] = [
  {
    id: 'mk9',
    game: 'Mortal Kombat 2011',
    image: '/Mk2011.webp',
    date: 'Lunes 02 Febrero 2026',
    time: '8:00 AM - 12:00 PM',
    building: 'EICA',
    location: 'Salón de Usos Múltiples(IE-10)',
    prizes: ['1er Lugar: 20$', '2do Lugar: 5$', '3er Lugar: 3$'],
    description: '¡Finish Him! El torneo más brutal regresa.',
    whatsappLink: 'https://chat.whatsapp.com/DOnh33pG5gE0J5qMlEM4u3',
    qrCode: '/qrs/mk9.png',
    machineCount: 2,
    platform: 'PS3',
    format: 'Eliminación Directa',
    price: 3
  },
  {
    id: 'projectm',
    game: 'Project M',
    image: '/projectm-flyer-banner.png',
    date: 'Martes 03 Febrero 2026',
    time: '8:00 AM - 12:00 PM',
    building: 'EICA',
    location: 'Salón de Usos Múltiples(IE-10)',
    prizes: ['1er Lugar: 20$', '2do Lugar: 5$', '3er Lugar: 3$'],
    description: 'El mod definitivo de Smash llega a la EICA. ¿Estás listo?',
    whatsappLink: 'https://chat.whatsapp.com/KNthwOiu3Hh87em5rCSVio',
    qrCode: '/qrs/projectm.png',
    machineCount: 2,
    platform: 'PC/Laptop',
    format: 'Eliminación Directa',
    price: 3
  },
  {
    id: 'brawl',
    game: 'Super Smash Flash 2',
    image: '/supersmashflash2-flyer-banner.png',
    date: 'Miércoles 04 Febrero 2026',
    time: '8:00 AM - 12:00 PM',
    building: 'EICA',
    location: 'Salón de Usos Múltiples(IE-10)',
    prizes: ['1er Lugar: 20$', '2do Lugar: 5$', '3er Lugar: 3$'],
    description: 'El clásico de navegador llevado al siguiente nivel competitivo.',
    whatsappLink: 'https://chat.whatsapp.com/FqtgsYEDNgt1r2x1kHzSxm',
    qrCode: '/qrs/ssf2.png',
    machineCount: 2,
    platform: 'PC/Laptop',
    format: 'Eliminación Directa',
    price: 3
  },
  {
    id: 'fighterz',
    game: 'Dragon Ball FighterZ',
    image: '/fighterz-flyer-banner.jpg',
    date: 'Jueves 05 Febrero 2026',
    time: '8:00 AM - 12:00 PM',
    building: 'EICA',
    location: 'Salón de Usos Múltiples(IE-10)',
    prizes: ['1er Lugar: 20$', '2do Lugar: 5$', '3er Lugar: 3$'],
    description: 'Demuestra tu ki en este torneo explosivo de Dragon Ball FighterZ.',
    whatsappLink: 'https://chat.whatsapp.com/FgvgyJzO7U3Fe2eOjitMHx',
    qrCode: '/qrs/fighterz.png',
    machineCount: 2,
    platform: 'PC/Laptop',
    format: 'Eliminación Directa',
    price: 3
  },
  {
    id: 'kpop-dh',
    game: 'HOPE ON THE STAGE',
    image: '/jhope.jpg',
    date: 'Viernes 06 Febrero 2026',
    time: '2:00 PM - 5:00 PM',
    building: 'EICA',
    location: 'Salón de Usos Múltiples(IE-10)',
    prizes: [],
    description: '¿ERES ARMY? 🐿️ ¡ESTA ES TU SEÑAL! Ven a vivir la experiencia de j-hope "HOPE ON THE STAGE" en pantalla gigante. 🎬✨ Disfruta de los mejores pasos y la energía de Hobi mientras apoyas una causa increíble.',
    whatsappLink: 'https://chat.whatsapp.com/B9jBMl3mC3C7QeWpZE0Iz6',
    qrCode: '/qrs/kpop.png',
    price: 3,
    registrationNotes: 'Incluye: Cotufas (palomitas) + Bebida. 🚀'
  },
  {
    id: 'fifa19',
    game: 'Fifa 19 (Mod 2026)',
    image: '/fifa.png',
    date: 'Viernes 06 Febrero 2026',
    time: '8:00 AM - 12:00 PM',
    building: 'EICA',
    location: 'Salón de Usos Múltiples(IE-10)',
    prizes: ['1er Lugar: 20$', '2do Lugar: 5$', '3er Lugar: 3$'],
    description: 'Torneo de Fifa 19 en PS3 con plantillas actualizadas al 2026.',
    whatsappLink: 'https://chat.whatsapp.com/CgD3MHHy0zuELr81Bueioq',
    qrCode: '/qrs/fifa.png',
    machineCount: 2,
    platform: 'PS3',
    format: 'Eliminación Directa',
    price: 3
  }
];

