import React from "react";
import { motion } from "framer-motion";

export function Contact() {
  return (
    <section className="py-32 bg-background relative overflow-hidden" id="contact">
      {/* Decorative accent background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-full max-h-[800px] bg-secondary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <span className="text-primary uppercase tracking-[0.2em] text-xs font-semibold mb-6 block">Atendimento Privado</span>
          <h2 className="font-serif text-5xl md:text-6xl text-foreground mb-8">
            Faça sua Escolha
          </h2>
          <p className="text-muted-foreground font-light text-lg mb-12 max-w-xl mx-auto">
            Nossa equipe de consultoras está à disposição para auxiliá-la na escolha da peça perfeita ou no desenvolvimento de uma joia sob medida.
          </p>

          <a 
            href="https://wa.me/5515997424047"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="link-whatsapp"
            className="group relative inline-flex items-center justify-center px-10 py-5 bg-foreground text-background font-sans text-sm tracking-[0.2em] uppercase overflow-hidden"
          >
            <div className="absolute inset-0 bg-secondary translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-out" />
            <span className="relative z-10 transition-colors duration-300">Falar no WhatsApp</span>
          </a>

          <div className="mt-16 pt-16 border-t border-border/50 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
            <div>
              <h4 className="text-foreground uppercase tracking-widest font-semibold mb-3 text-xs">Ateliê</h4>
              <p className="text-muted-foreground font-light leading-relaxed">
                dentro do salão Fio a Fio Professional<br/>
                R. Zélia de Lima Rosa, 876<br/>
                Portal dos Pássaros<br/>
                Boituva — SP, 18552-185<br/>
                <span className="text-xs">Visitas com hora marcada</span>
              </p>
            </div>
            <div>
              <h4 className="text-foreground uppercase tracking-widest font-semibold mb-3 text-xs">Contato</h4>
              <p className="text-muted-foreground font-light leading-relaxed">
                <a
                  href="mailto:contato@choixjoias.com"
                  data-testid="link-email"
                  className="hover:text-foreground transition-colors"
                >
                  contato@choixjoias.com
                </a>
                <br/>
                <a
                  href="https://wa.me/5515997424047"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="link-phone"
                  className="hover:text-foreground transition-colors"
                >
                  +55 15 99742-4047
                </a>
              </p>
            </div>
            <div>
              <h4 className="text-foreground uppercase tracking-widest font-semibold mb-3 text-xs">Redes</h4>
              <p className="text-muted-foreground font-light leading-relaxed">
                <a
                  href="https://www.instagram.com/choixjoias/"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="link-instagram"
                  className="hover:text-foreground transition-colors"
                >
                  @choixjoias
                </a>
                <br/>Instagram
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
