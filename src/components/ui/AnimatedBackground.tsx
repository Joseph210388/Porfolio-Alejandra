import { motion } from 'framer-motion';
import {
  StarIcon,
  PaintIcon,
  BookIcon,
  PencilIcon,
  MusicIcon,
  HeartIcon,
  SunIcon,
  AppleIcon,
  StarsIcon,
  NotebookIcon,
} from '../icons/animate';

const preschoolIcons = [
  { Icon: StarIcon, label: 'star' },
  { Icon: PaintIcon, label: 'paint' },
  { Icon: BookIcon, label: 'book' },
  { Icon: PencilIcon, label: 'pencil' },
  { Icon: MusicIcon, label: 'music' },
  { Icon: HeartIcon, label: 'heart' },
  { Icon: SunIcon, label: 'sun' },
  { Icon: AppleIcon, label: 'apple' },
  { Icon: StarsIcon, label: 'stars' },
  { Icon: NotebookIcon, label: 'notebook' },
];

const AnimatedElement = ({
  index,
  iconData,
}: {
  index: number;
  iconData: { Icon: React.ComponentType<any>; label: string };
}) => {
  const startX = Math.random() * window.innerWidth;
  const startY = window.innerHeight + 50;
  const duration = 15 + Math.random() * 10;
  const delay = index * 0.3;

  return (
    <motion.div
      key={`${iconData.label}-${index}`}
      className="fixed pointer-events-none"
      initial={{
        x: startX,
        y: startY,
        opacity: 0,
      }}
      animate={{
        x: startX + (Math.random() - 0.5) * 100,
        y: -50,
        opacity: [0, 0.8, 0.8, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'linear',
        delay,
      }}
    >
      <iconData.Icon size={40} color="rgba(255, 255, 255, 0.7)" />
    </motion.div>
  );
};

export function AnimatedBackground() {
  const elementCount = 30;
  const elements = Array.from({ length: elementCount }).map(
    (_, i) => preschoolIcons[i % preschoolIcons.length],
  );

  return (
    <div aria-hidden="true" className="fixed inset-0 pointer-events-none overflow-hidden">
      {elements.map((iconData, index) => (
        <AnimatedElement key={index} index={index} iconData={iconData} />
      ))}
    </div>
  );
}
