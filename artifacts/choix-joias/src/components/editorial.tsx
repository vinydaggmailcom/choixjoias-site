import React from "react";
import { motion } from "framer-motion";
import editorial1 from "@assets/image_1777858986608.png";
import editorial2 from "@assets/image_1777859177820.png";
import editorial3 from "@assets/image_1777859210243.png";

const editorials = [
  {
    id: "beleza",
    image: editorial1,
    title: "A beleza está nos detalhes",
    caption: "Toques delicados em cada peça — porque o que faz a diferença está no que muitas vezes passa despercebido.",
  },
  {
    id: "passarela",
    image: editorial2,
    title: "A selva urbana é a sua passarela",
    caption: "Acessórios de força e personalidade para mulheres que ocupam o seu espaço com presença e atitude.",
  },
  {
    id: "poder",
    image: editorial3,
    title: "Realce o seu poder pessoal",
    caption: "Joias escolhidas com intenção potencializam a sua imagem e revelam quem você verdadeiramente é.",
  },
];

export function Editorial() {
  return (
    <section className="py-32 bg-background relative z-10" id="editorial">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <h3 className="text-primary uppercase tracking-[0.2em] text-xs font-semibold mb-4">Editorial Choix</h3>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">A Estética Choix</h2>
          <p className="text-muted-foreground text-sm font-light leading-relaxed">
            Mais que joias — uma linguagem visual que celebra a feminilidade contemporânea, a delicadeza e a força das nossas escolhas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {editorials.map((item, index) => (
            <motion.div
              key={item.id}
              data-testid={`card-editorial-${item.id}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="group relative overflow-hidden border border-border bg-card"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6 md:p-8">
                <h4 className="font-serif text-xl md:text-2xl text-foreground mb-3 leading-snug">
                  {item.title}
                </h4>
                <p className="text-muted-foreground text-sm font-light leading-relaxed">
                  {item.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
