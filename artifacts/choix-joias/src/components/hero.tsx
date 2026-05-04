import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import heroImage from "@assets/image_1777856561078.png";

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-background" id="hero">
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/30 to-background/40 z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/30 to-background z-10" />
        <img
          src={heroImage}
          alt="Choix Joias Editorial"
          className="w-full h-full object-cover object-center opacity-65 scale-x-[-1]"
        />
      </motion.div>

      <div className="relative z-10 container mx-auto px-6 text-center mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
        >
          <h2 className="text-primary tracking-[0.3em] text-xs md:text-sm uppercase mb-6 font-semibold">
            Alta Joalheria com Propósito
          </h2>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-foreground mb-8 leading-tight tracking-tight">
            Sua essência <br />em <span className="italic text-accent">ouro</span>.
          </h1>
          <p className="max-w-xl mx-auto text-muted-foreground font-sans text-lg font-light mb-12">
            Peças exclusivas criadas para mulheres que escolhem com intenção. O luxo moderno encontra a expressão pessoal.
          </p>

          <button
            onClick={() => document.getElementById("collection")?.scrollIntoView({ behavior: "smooth" })}
            className="group relative inline-flex items-center justify-center px-8 py-4 font-sans text-sm tracking-[0.2em] text-foreground uppercase border border-border hover:border-foreground/50 transition-colors duration-500 overflow-hidden"
          >
            <span className="relative z-10 group-hover:text-background transition-colors duration-500 delay-100">Descobrir Coleção</span>
            <div className="absolute inset-0 bg-foreground translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
          </button>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground rotate-90 mb-6">Scroll</span>
        <div className="w-[1px] h-12 bg-border relative overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-full h-1/2 bg-primary"
            animate={{ top: ["-50%", "100%"] }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
