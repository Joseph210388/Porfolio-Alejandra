import React from 'react';

export interface TimelineItemProps {
  date: string;
  title: string;
  subtitle: string;
  description?: string;
}

const TimelineDot = () => (
    <div className="absolute -left-2 mt-1.5 h-4 w-4 rounded-full bg-white border-2 border-brand-primary"></div>
)

export const TimelineItem: React.FC<TimelineItemProps> = ({ date, title, subtitle, description }) => {
  return (
    <div className="relative pl-8">
        <TimelineDot />
        <p className="text-xs font-semibold uppercase tracking-wider text-brand-light opacity-80">{date}</p>
        <h4 className="text-xl font-bold mt-1 text-white font-playfair">{title}</h4>
        <p className="text-sm text-brand-light opacity-70 font-dancing tracking-wide">{subtitle}</p>
        {description && <p className="mt-2 text-sm leading-relaxed text-brand-light opacity-90 font-dancing tracking-wide">{description}</p>}
    </div>
  );
};
