import React from 'react';
import { motion } from 'framer-motion';
import { contact } from '../../data/contact';
import { containerVariants, itemVariants } from '../../lib/animations';

const DownloadSvg = () => (
  <svg className="h-4 w-4 shrink-0" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
  </svg>
);

const PhoneSvg = () => (
  <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
  </svg>
);

const MailSvg = () => (
  <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
  </svg>
);

export const HeroSection = React.forwardRef<HTMLDivElement, {}>(function HeroSection(_, ref) {
  return (
    <motion.section
      ref={ref}
      id="home"
      className="relative isolate min-h-[100dvh] overflow-hidden flex flex-col justify-center box-border px-6 pt-6 pb-20 sm:px-10 sm:pt-8 sm:pb-20 md:px-14 md:py-12"
    >
      
      <div className="relative z-[1] w-full flex flex-col justify-center flex-1 min-h-0">
        <div className="container mx-auto w-full max-w-5xl">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >

            {/* Columna izquierda: nombre, cargo, descripción y botones */}
            <motion.div
              className="order-2 md:order-1 flex flex-col items-center md:items-start text-center md:text-left"
              variants={itemVariants}
            >
              <h1 className="text-[clamp(1.7rem,4.5vw,3.4rem)] font-playfair font-bold leading-tight drop-shadow-[0_2px_14px_rgba(0,0,0,0.15)]">
                Alejandra Rodríguez Llorente
              </h1>

              <p className="mt-2 sm:mt-3 text-xl sm:text-2xl md:text-3xl font-dancing tracking-wide text-white/90">
                Educadora Infantil
              </p>

              <p className="mt-3 sm:mt-4 text-sm sm:text-[0.95rem] font-montserrat font-light text-white/75 leading-relaxed max-w-sm">
                Educadora infantil apasionada por la custodia artística y el desarrollo
                creativo. Guía profesional y compañera de juegos imaginativos en el viaje
                del aprendizaje.
              </p>

              {/* Botones */}
              <div className="mt-6 sm:mt-8 flex flex-col items-stretch sm:items-center md:items-start gap-3 w-full max-w-xs sm:max-w-sm">
                {/* Descargar CV */}
                <a
                  href="https://github.com/Joseph210388/Porfolio-Alejandra/raw/7789017a1d080ae64c53788ec227082be531cf1a/Alejandra.pdf"
                  download="CV_Alejandra_Rodriguez.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white text-brand-primary font-bold py-2.5 px-6 rounded-full hover:bg-opacity-90 transition-all duration-300 hover:scale-105 shadow-lg ring-2 ring-white/30 text-sm sm:text-base"
                >
                  <DownloadSvg />
                  Descargar CV
                </a>

                {/* Teléfono y Email en fila */}
                <div className="flex gap-3 w-full">
                  <a
                    href={`tel:${contact.phone}`}
                    className="flex flex-1 items-center justify-center gap-1.5 bg-white/10 hover:bg-white/20 border border-white/30 text-white py-2.5 px-3 rounded-full transition-all duration-300 hover:scale-105 text-xs sm:text-sm font-montserrat"
                  >
                    <PhoneSvg />
                    <span className="truncate">{contact.phone}</span>
                  </a>
                  <a
                    href={`mailto:${contact.email}`}
                    className="flex flex-1 items-center justify-center gap-1.5 bg-white/10 hover:bg-white/20 border border-white/30 text-white py-2.5 px-3 rounded-full transition-all duration-300 hover:scale-105 text-xs sm:text-sm font-montserrat"
                  >
                    <MailSvg />
                    <span className="truncate">Correo</span>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Columna derecha: imagen grande */}
            <motion.div
              className="order-1 md:order-2 flex justify-center items-center relative py-4 md:py-0"
              variants={itemVariants}
            >
              {/* Anillo estático */}
              <div
                className="absolute w-52 h-52 sm:w-64 sm:h-64 md:w-[22rem] md:h-[22rem] border-2 border-white/40 rounded-full pointer-events-none"
                aria-hidden
              />
              {/* Anillo giratorio */}
              <div
                className="absolute w-52 h-52 sm:w-64 sm:h-64 md:w-[22rem] md:h-[22rem] border-t-2 border-white/80 rounded-full animate-spin-slow pointer-events-none"
                aria-hidden
              />
              {/* Foto */}
              <img
                src="https://res.cloudinary.com/deqzz76ni/image/upload/v1761756524/6dc46268-d7b7-4885-b74b-142e4cca2110_dx8ja1.jpg"
                alt="Alejandra Rodríguez"
                className="relative z-[1] rounded-full w-44 h-44 sm:w-56 sm:h-56 md:w-80 md:h-80 object-cover border-4 border-white shadow-2xl"
              />
              {/* Detalles decorativos */}
              <span className="absolute top-2 right-8 sm:top-4 sm:right-10 md:right-4 text-xl text-white/80 rotate-12 z-[2] pointer-events-none select-none">✨</span>
              <span className="absolute bottom-2 left-8 sm:bottom-4 sm:left-10 md:left-4 text-xl text-white/80 -rotate-12 z-[2] pointer-events-none select-none">✨</span>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </motion.section>
  );
});

HeroSection.displayName = 'HeroSection';
