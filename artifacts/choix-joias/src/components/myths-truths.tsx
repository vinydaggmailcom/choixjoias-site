import React from "react";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

type Item = {
  id: string;
  type: "mito" | "verdade";
  quote: string;
  body: string;
};

const items: Item[] = [
  {
    id: "esmalte",
    type: "mito",
    quote: "Passar base (esmalte) nas semijoias deixa elas mais brilhantes.",
    body:
      "Esse truque é muito usado em bijuterias para preservar a cor e segurar as pedras. No caso da semijoia, não existe essa necessidade — a aplicação de esmalte pode interferir no brilho natural da peça e ainda deixar a corrente dura, fazendo pulseiras e colares perderem a mobilidade.",
  },
  {
    id: "alcool",
    type: "verdade",
    quote: "Álcool em gel danifica anéis.",
    body:
      "Passar álcool por cima das semijoias (anéis, pulseiras) com o tempo pode danificar as peças. O ideal é retirar a semijoia, passar o álcool nas mãos, esperar secar e só então colocar a peça novamente.",
  },
  {
    id: "creme-dental",
    type: "mito",
    quote: "Passar creme dental na peça ajuda a limpar.",
    body:
      "Na verdade, ajuda a danificar a sua peça. O ideal é que nenhum produto químico entre em contato com sua semijoia. Quando for lavar, utilize apenas sabão neutro e tenha certeza de não deixar nenhum resíduo na hora de secar.",
  },
  {
    id: "piscina",
    type: "verdade",
    quote: "Piscinas e semijoias não combinam.",
    body:
      "O cloro das piscinas é um dos piores inimigos das suas semijoias — acelera o processo de oxidação. Molhar a peça e não secar completamente também contribui para esse desgaste. Antes de cair na água, retire suas joias.",
  },
];

export function MythsTruths() {
  return (
    <section
      className="py-32 bg-card relative z-10"
      id="myths-truths"
      data-testid="section-myths-truths"
    >
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <p className="text-primary uppercase tracking-[0.2em] text-xs font-semibold mb-4">
            Cuide das suas peças
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
            Mitos &amp; Verdades
          </h2>
          <p className="text-muted-foreground text-sm font-light leading-relaxed">
            Sobre semijoias que você precisa saber — pequenos cuidados fazem toda a diferença
            na durabilidade e no brilho das suas peças favoritas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {items.map((item, index) => {
            const isVerdade = item.type === "verdade";
            return (
              <motion.article
                key={item.id}
                data-testid={`card-myth-${item.id}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-background border border-border p-7 md:p-9 flex flex-col"
              >
                <div className="flex items-center gap-2 mb-5">
                  <span
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-[0.2em] ${
                      isVerdade
                        ? "bg-primary text-primary-foreground"
                        : "bg-foreground text-background"
                    }`}
                    data-testid={`badge-${item.type}-${item.id}`}
                  >
                    {isVerdade ? (
                      <Check className="w-4 h-4 stroke-[2.5]" />
                    ) : (
                      <X className="w-4 h-4 stroke-[2.5]" />
                    )}
                    {isVerdade ? "Verdade" : "Mito"}
                  </span>
                </div>

                <blockquote className="font-serif text-xl md:text-2xl text-foreground leading-snug mb-5">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>

                <p className="text-muted-foreground text-sm font-light leading-relaxed">
                  {item.body}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
