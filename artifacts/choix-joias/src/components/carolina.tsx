import React from "react";
import { motion } from "framer-motion";
import carolPhoto from "@assets/image_1777856440844.png";

export function Carolina() {
  return (
    <section className="py-32 bg-card relative overflow-hidden" id="carolina">
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)", backgroundSize: "32px 32px" }} />

      <div className="container mx-auto px-6 md:px-12 relative">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-primary uppercase tracking-[0.2em] text-xs font-semibold mb-4">
            Sobre mim
          </h3>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground">
            Quem é a Carol ?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center max-w-5xl mx-auto">

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-border shadow-lg">
                <img
                  src={carolPhoto}
                  alt="Carolina — Consultora de Vendas Choix Joias"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-background border border-border px-6 py-3 text-center whitespace-nowrap shadow-sm"
              >
                <span className="text-foreground text-xs uppercase tracking-[0.2em] font-semibold block">
                  Carolina
                </span>
                <span className="text-accent text-xs italic font-light">
                  Consultora de Vendas
                </span>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="space-y-6 text-muted-foreground font-light text-lg">
              <p>
                Carol aqui, aos meus vibrantes 34 anos, desempenhando os papéis mais importantes da minha vida: mãe, esposa, filha e amiga.
              </p>
              <p>
                Mas há algo que me apaixona ainda mais: sou a representante da Sabrina Joias e lidero a Choix, onde nossa missão é trazer a verdadeira essência da feminilidade através de acessórios finos e de luxo.
              </p>
              <p>
                Cada peça que compartilho é uma expressão de elegância atemporal, um toque de brilho que realça o que há de mais especial em cada mulher.
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-border">
              <p className="font-serif text-xl text-foreground/80 italic leading-relaxed">
                "Acredito profundamente que a elegância está enraizada na autenticidade e nos pequenos detalhes que tornam nossa jornada única. Junte-se a mim nesta busca por sofisticação com alma."
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-6 items-center">
              <a
                href="https://wa.me/5515997424047"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-carolina-whatsapp"
                className="group relative inline-flex items-center justify-center px-8 py-4 font-sans text-sm tracking-[0.2em] text-foreground uppercase border border-border overflow-hidden hover:border-foreground/50 transition-colors duration-500"
              >
                <span className="relative z-10 group-hover:text-background transition-colors duration-500 delay-100">
                  Falar com a Carol
                </span>
                <div className="absolute inset-0 bg-foreground translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              </a>
              <a
                href="https://www.instagram.com/choixjoias/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm tracking-[0.2em] uppercase text-accent border-b border-accent pb-0.5 hover:text-foreground hover:border-foreground transition-colors"
              >
                @choixjoias
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
