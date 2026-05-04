import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    number: "01",
    title: "Consultoria Personalizada",
    description:
      "Atendimento exclusivo pelo WhatsApp ou presencialmente no ateliê. Nossa consultora te guia na escolha da peça ideal para cada estilo, ocasião e orçamento.",
  },
  {
    number: "02",
    title: "Semijoias Premium",
    description:
      "Curadoria exclusiva de peças Sabrina Joias — folheadas a ouro 18k, antialérgicas, sem níquel, com garantia de qualidade e durabilidade que resiste ao tempo.",
  },
  {
    number: "03",
    title: "Presentes & Encomendas",
    description:
      "Monte um kit especial ou encomende peças para presentear com embalagem exclusiva. Entregamos para todo o Brasil com todo o cuidado que o momento merece.",
  },
];

export function Services() {
  return (
    <section className="py-32 bg-background relative" id="services">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-primary uppercase tracking-[0.2em] text-xs font-semibold mb-4">
            Como Trabalhamos
          </h3>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground">
            Nossos Serviços
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative"
            >
              <div className="mb-8">
                <span className="font-serif text-5xl text-border group-hover:text-accent transition-colors duration-500">
                  {service.number}
                </span>
              </div>
              <div className="h-px bg-border mb-8 relative overflow-hidden">
                <motion.div
                  className="absolute top-0 left-0 h-full bg-accent"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.2 + 0.4 }}
                />
              </div>
              <h3 className="font-serif text-2xl text-foreground mb-4">
                {service.title}
              </h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a
            href="https://wa.me/5515997424047"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="link-services-whatsapp"
            className="group relative inline-flex items-center gap-3 text-sm tracking-[0.2em] uppercase text-foreground border border-border px-10 py-5 overflow-hidden hover:border-foreground/50 transition-colors duration-300"
          >
            <div className="absolute inset-0 bg-foreground translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
            <span className="relative z-10 group-hover:text-background transition-colors duration-300">
              Falar com Consultora
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
