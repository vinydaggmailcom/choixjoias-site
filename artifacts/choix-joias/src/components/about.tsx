import React from "react";
import { motion } from "framer-motion";
import brandPhoto from "@assets/image_1777856304423.png";

export function About() {
  return (
    <section className="py-32 bg-background relative" id="about">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-[3/4] relative overflow-hidden">
              <img
                src={brandPhoto}
                alt="Choix Joias — Para quem faz a vida mais bonita"
                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-background/30 via-transparent to-transparent" />
            </div>

            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-accent/10 blur-3xl rounded-full" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mt-10 lg:mt-0"
          >
            <h3 className="text-primary uppercase tracking-[0.2em] text-xs font-semibold mb-6">
              A Marca
            </h3>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-8 leading-tight">
              O Luxo no <span className="italic text-accent">Tempo</span> Certo
            </h2>

            <div className="space-y-6 text-muted-foreground font-light text-lg">
              <p>
                A Choix Joias nasceu do desejo de criar peças que acompanham a mulher em seus momentos de transformação. Não criamos apenas ornamentos; forjamos símbolos.
              </p>
              <p>
                Sediada em Boituva, SP, somos parceiras exclusivas da Sabrina Joias — uma das maiores referências em semijoias premium do Brasil. Cada peça é folheada a ouro 18k, antialérgica e produzida com materiais de primeira linha.
              </p>
              <p>
                Em um mundo de produção em massa, optamos pelo ritmo calmo do ateliê. Cada anel, cada colar, carrega o peso e a leveza de uma escolha consciente.
              </p>
            </div>

            <div className="mt-10 pt-10 border-t border-border">
              <p className="font-serif text-xl text-foreground/80 italic leading-relaxed">
                "A joia que você escolhe hoje é a herança de quem você se torna amanhã."
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <button
                onClick={() => document.getElementById("collection")?.scrollIntoView({ behavior: "smooth" })}
                className="group relative inline-flex items-center justify-center px-8 py-4 font-sans text-sm tracking-[0.2em] text-foreground uppercase border border-border hover:border-foreground/50 transition-colors duration-500 overflow-hidden"
              >
                <span className="relative z-10 group-hover:text-background transition-colors duration-500 delay-100">
                  Ver Coleção
                </span>
                <div className="absolute inset-0 bg-foreground translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              </button>
              <a
                href="https://wa.me/5515997424047"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm tracking-[0.2em] uppercase text-accent border-b border-accent pb-0.5 hover:text-foreground hover:border-foreground transition-colors"
              >
                Falar Conosco
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
