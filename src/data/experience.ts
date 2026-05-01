import type { TimelineItemData } from '../types';
import { experienceImages } from './images';

export const experience: TimelineItemData[] = [
    {
        date: 'Abril 2026 - Actualidad',
        title: 'MONITOR',
        subtitle: 'Vertical Park - Madrid Baraja Plenilunio',
        description: 'Jornada parcial. Especializada en el cuidado infantil y la dinamización de grupos en entorno presencial.',
    },
    {
        date: 'Febrero 2026 - Marzo 2026',
        title: 'EDUCADOR INFANTIL',
        subtitle: 'Escuela infantil municipal Poeta Gloria Fuertes',
        description: 'Contrato temporal presencial. Responsable de educación infantil y cuidado de niños.',
    },
    {
        date: '19-07-2025 - 21-07-2025',
        title: 'SERVICIO DE CUIDADORA DE NIÑOS',
        subtitle: 'Sitly',
        description: 'Familias me contratan para el cuidado de niños menores de 8 años de edad por hora.',
    },
    {
        date: 'Junio 2025 - Julio 2025',
        title: 'MONITOR DE TIEMPO LIBRE',
        subtitle: 'Real Club de Golf de la Barganiza',
        description: 'Monitoreo de bus, supervisión de comedor, organización de actividades, traslado a clases de golf/tenis y actividades de piscina.',
    },
    {
        date: 'Marzo 2025 - Junio 2025',
        title: 'PRÁCTICAS DE AUXILIAR INFANTIL',
        subtitle: 'Colegio Santa María del Naranco',
        description: 'Prácticas junto a la auxiliar de educación infantil, adquiriendo experiencia directa en el aula.',
    },
    {
        date: 'Marzo 2023 - Junio 2025',
        title: 'VOLUNTARIADO',
        subtitle: 'Asturias Acoge',
        description: 'Apoyo social y educativo a niños y niñas inmigrantes (4-11 años). Enseñanza de castellano y fomento del respeto intercultural.',
    },
];

export const experienceCarouselData = experience.map((exp, index) => ({
    id: index + 1,
    imageUrl: experienceImages[index] || experienceImages[0],
    title: exp.title,
    subtitle: exp.subtitle,
    description: exp.description,
    date: exp.date,
}));
