import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    text: "Comprei um colar de presente para minha mãe e ela ficou encantada! A qualidade é impressionante e o atendimento foi super atencioso. Já virei cliente fiel da Choix.",
    name: "Fernanda C.",
    location: "Sorocaba, SP",
    piece: "Corrente Feminina Elos",
  },
  {
    id: 2,
    text: "As semijoias são lindíssimas e muito duráveis. Tenho várias peças há mais de um ano e continuam perfeitas. Recomendo de olhos fechados para quem quer qualidade com bom preço.",
    name: "Ana Paula M.",
    location: "Campinas, SP",
    piece: "Kit Anéis Folheados",
  },
  {
    id: 3,
    text: "O atendimento personalizado faz toda a diferença. A consultora me ajudou a escolher o anel perfeito para o meu noivado. Me apaixonei pela peça e pelo serviço!",
    name: "Mariana S.",
    location: "Boituva, SP",
    piece: "Anel Solitário Delicado",
  },
];

export function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-32 bg-card relative overflow-hidden" id="testimonials">
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, currentColor 0, currentColor 1px, transparent 0, transparent 50%)",
          backgroundSize: "20px 20px",
        }}
      />

      <div className="container mx-auto px-6 md:px-12 relative">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-primary uppercase tracking-[0.2em] text-xs font-semibold mb-4">
            Depoimentos
          </h3>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground">
            Clientes que Escolheram
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="font-serif text-6xl text-accent/60 mb-4 leading-none select-none">
                "
              </div>
              <p className="font-serif text-xl md:text-2xl text-foreground/80 italic leading-relaxed mb-10">
                {testimonials[active].text}
              </p>
              <div className="flex flex-col items-center gap-2">
                <div className="w-8 h-px bg-accent mb-4" />
                <span className="text-foreground font-semibold text-sm tracking-[0.2em] uppercase">
                  {testimonials[active].name}
                </span>
                <span className="text-muted-foreground text-xs uppercase tracking-widest">
                  {testimonials[active].location}
                </span>
                <span className="text-accent text-sm font-light italic mt-1">
                  {testimonials[active].piece}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-3 mt-12">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`Depoimento ${i + 1}`}
                className={`transition-all duration-300 h-1 ${
                  i === active
                    ? "w-8 bg-accent"
                    : "w-3 bg-border hover:bg-muted-foreground"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
