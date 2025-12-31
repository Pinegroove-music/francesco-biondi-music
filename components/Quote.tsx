
import React from 'react';
import { motion } from 'framer-motion';

const Quote: React.FC = () => {
  return (
    <section className="bg-zinc-950 py-16 px-6 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-full opacity-[0.03] pointer-events-none">
        <span className="font-handwritten text-[20rem] absolute -top-20 -left-10">"</span>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <blockquote className="font-handwritten text-3xl md:text-5xl lg:text-6xl text-zinc-100 leading-tight tracking-wide">
            "As a composer, I live life with a soundtrack in my head, constantly imagining the music that will bring emotions to the screen and make memories come alive."
          </blockquote>
          
          <div className="mt-8 flex flex-col items-center">
            <div className="h-px w-12 bg-amber-500/50 mb-4" />
            <footer className="text-amber-500 font-handwritten tracking-widest text-xl md:text-2xl font-bold">
              F. Biondi
            </footer>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Quote;
