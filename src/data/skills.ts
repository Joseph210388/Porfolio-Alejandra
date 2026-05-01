import type { Skill } from '../types';
import {
  EmpathyIcon,
  PatienceIcon,
  VocationIcon,
  CreativityIcon,
  ObservationIcon,
  ResponsibilityIcon,
  AdaptabilityIcon,
  HumorIcon,
  PlanningIcon,
  ConflictResolutionIcon,
  PedagogyIcon,
  CommunicationIcon,
  DigitalSkillsIcon,
  PhotoEditingIcon,
  VideoEditingIcon,
  PoemWritingIcon,
} from '../components/icons';

export const personalSkills: Skill[] = [
  { name: 'Empatía', Icon: EmpathyIcon },
  { name: 'Paciencia y Calma', Icon: PatienceIcon },
  { name: 'Vocación y Entusiasmo', Icon: VocationIcon },
  { name: 'Creatividad', Icon: CreativityIcon },
  { name: 'Observación y Atención', Icon: ObservationIcon },
  { name: 'Responsabilidad y Compromiso', Icon: ResponsibilityIcon },
  { name: 'Adaptabilidad y Flexibilidad', Icon: AdaptabilityIcon },
  { name: 'Buen Humor', Icon: HumorIcon },
];

export const professionalSkills: Skill[] = [
  { name: 'Planificación y Organización', Icon: PlanningIcon },
  { name: 'Resolución de Conflictos', Icon: ConflictResolutionIcon },
  { name: 'Conocimientos Pedagógicos', Icon: PedagogyIcon },
  { name: 'Comunicación Efectiva', Icon: CommunicationIcon },
  { name: 'Competencias digitales', Icon: DigitalSkillsIcon },
  { name: 'Edición fotográfica', Icon: PhotoEditingIcon },
  { name: 'Edición de vídeo', Icon: VideoEditingIcon },
  { name: 'Redacción de poemas', Icon: PoemWritingIcon },
];
