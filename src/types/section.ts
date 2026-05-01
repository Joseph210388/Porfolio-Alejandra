export type SectionId = 'home' | 'about' | 'skills' | 'experience' | 'contact';

export interface Section {
  id: SectionId;
  title: string;
}
