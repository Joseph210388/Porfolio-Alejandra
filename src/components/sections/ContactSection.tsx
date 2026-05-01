import React from 'react';
import { motion } from 'framer-motion';
import { contact } from '../../data/contact';
import { sectionVariants, containerVariants, itemVariants } from '../../lib/animations';

const CardPhone = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
  </svg>
);

const CardMail = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
  </svg>
);

const CardLinkedIn = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 0H5C2.239 0 0 2.239 0 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5V5c0-2.761-2.238-5-5-5zm-11 19H5V8h3v11zm-1.5-12.268A1.732 1.732 0 014.75 5c.966 0 1.75.785 1.75 1.732 0 .957-.784 1.732-1.75 1.732zM20 19h-3v-5.604c0-3.368-4-3.113-4 0V19h-3V8h3v1.765C14.396 7.18 20 6.988 20 12.476V19z" />
  </svg>
);

const cards = [
  {
    Icon: CardPhone,
    title: 'TELÉFONO',
    description: 'Disponible para llamadas y WhatsApp',
    value: contact.phone,
    href: `tel:${contact.phone}`,
    external: false,
  },
  {
    Icon: CardMail,
    title: 'EMAIL',
    description: 'Escríbeme cuando quieras',
    value: contact.email,
    href: `mailto:${contact.email}`,
    external: false,
  },
  {
    Icon: CardLinkedIn,
    title: 'LINKEDIN',
    description: 'Conectemos en LinkedIn',
    value: 'Ver perfil',
    href: contact.linkedin,
    external: true,
  },
] as const;

interface ContactSectionProps {
  sectionViewport: any;
}

export const ContactSection = React.forwardRef<HTMLDivElement, ContactSectionProps>(
  function ContactSection({ sectionViewport }, ref) {
    return (
      <motion.section
        ref={ref}
        id="contact"
        className="relative isolate min-h-[100dvh] overflow-hidden flex flex-col justify-center box-border px-4 pt-20 pb-6 sm:px-8 sm:pt-20 sm:pb-8 md:px-10 md:py-12"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={sectionViewport}
      >
        <div className="relative z-[1] w-full flex flex-col flex-1 min-h-0 justify-center">
          <div className="container mx-auto max-w-4xl text-center">

            {/* Título */}
            <motion.h2
              variants={itemVariants}
              className="text-3xl sm:text-5xl font-playfair mb-5 sm:mb-6 inline-block border-b border-dashed border-white/35 pb-2"
            >
              Contacto
            </motion.h2>

            {/* Frase Waldorf */}
            <motion.p
              variants={itemVariants}
              className="font-dancing text-base sm:text-xl leading-relaxed px-2 mb-10 sm:mb-14 max-w-2xl mx-auto italic text-white/80"
            >
              "Cada trazo del niño es una palabra, cada color un pensamiento.
              El arte en la infancia no decora la vida — la construye."
            </motion.p>

            {/* Tarjetas */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5"
              variants={containerVariants}
            >
              {cards.map(({ Icon, title, description, value, href, external }) => (
                <motion.a
                  key={title}
                  href={href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noopener noreferrer' : undefined}
                  variants={itemVariants}
                  whileHover={{ scale: 1.04 }}
                  className="group flex flex-col items-center gap-3 bg-white/10 hover:bg-white/18 border border-white/20 hover:border-white/35 rounded-2xl px-6 py-8 sm:py-10 transition-colors duration-300 cursor-pointer no-underline"
                >
                  {/* Icono */}
                  <span className="text-white/60 group-hover:text-white transition-colors duration-200">
                    <Icon />
                  </span>

                  {/* Título en mayúsculas */}
                  <span className="font-montserrat font-bold text-[0.62rem] tracking-[0.22em] text-white/45 uppercase">
                    {title}
                  </span>

                  {/* Descripción */}
                  <span className="font-dancing text-sm sm:text-base text-white/70 text-center leading-snug">
                    {description}
                  </span>

                  {/* Dato destacado en naranja */}
                  <span className="font-montserrat font-semibold text-xs sm:text-sm break-all text-center mt-2 text-white-300 group-hover:text-white-200 transition-colors duration-200">
                    {value}
                  </span>
                </motion.a>
              ))}
            </motion.div>

          </div>
        </div>
      </motion.section>
    );
  },
);

ContactSection.displayName = 'ContactSection';
