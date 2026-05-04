import React from "react";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import photo1 from "@assets/image_1777856532954.png";
import photo2 from "@assets/image_1777856561078.png";
import photo3 from "@assets/image_1777856595738.png";
import photo4 from "@assets/image_1777856616809.png";
import photo5 from "@assets/image_1777856788463.png";
import photo6 from "@assets/image_1777856803994.png";
import photo7 from "@assets/image_1777856816507.png";
import photo8 from "@assets/image_1777856830135.png";
import photo9 from "@assets/image_1777856843307.png";
import photo10 from "@assets/image_1777856866242.png";
import photo11 from "@assets/image_1777856898234.png";
import photo12 from "@assets/image_1777856917682.png";
import look1 from "@assets/image_1777860530242.png";
import look2 from "@assets/image_1777860555950.png";
import look3 from "@assets/image_1777860572549.png";
import look4 from "@assets/image_1777860585975.png";
import look5 from "@assets/image_1777860595898.png";
import look6 from "@assets/image_1777860607092.png";
import look7 from "@assets/image_1777860625577.png";
import look8 from "@assets/image_1777860665974.png";

const posts = [
  { url: photo1,  alt: "Presença — Coleção Dia das Mães" },
  { url: photo2,  alt: "Minimalismo com Personalidade" },
  { url: photo3,  alt: "Estilo mora nos detalhes" },
  { url: photo4,  alt: "Design que Transforma qualquer look" },
  { url: photo5,  alt: "Clássico reinventado" },
  { url: photo6,  alt: "Versatilidade para todos os estilos" },
  { url: photo7,  alt: "Elegância que nunca passa despercebida" },
  { url: photo8,  alt: "Coleção praia — estrela do mar e conchas" },
  { url: photo9,  alt: "Brincos quadrados folheados a ouro" },
  { url: photo10, alt: "Brincos Choix — ouro e prata" },
  { url: photo11, alt: "Ponto de Luz — colar e brinco" },
  { url: photo12, alt: "Ser mãe é se olhar no espelho todos os dias" },
];

const lookbook = [
  { url: look1, alt: "Brilho deslumbrante — cristais fusion verde" },
  { url: look2, alt: "Anéis dourados — presença e atitude" },
  { url: look3, alt: "Anéis com pérolas — delicadeza" },
  { url: look4, alt: "Maxi anel dourado — força do simples" },
  { url: look5, alt: "Conjunto estrela — colar, brinco e anel" },
  { url: look6, alt: "Stack colorido — cristais multicoloridos" },
  { url: look7, alt: "Corrente cadeado — peça statement" },
  { url: look8, alt: "Ear cuff e elos — combinação contemporânea" },
];

export function InstagramFeed() {
  return (
    <section className="py-32 bg-background" id="instagram">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-primary uppercase tracking-[0.2em] text-xs font-semibold mb-4">
            Instagram
          </h3>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
            @choixjoias
          </h2>
          <p className="text-muted-foreground font-light text-sm tracking-widest uppercase">
            Siga-nos e inspire-se
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="mb-16 md:mb-20"
          data-testid="carousel-lookbook"
        >
          <div className="text-center mb-8">
            <p className="text-primary uppercase tracking-[0.25em] text-[11px] font-semibold">
              Lookbook
            </p>
          </div>

          <Carousel
            opts={{ align: "start", loop: true }}
            className="max-w-6xl mx-auto"
          >
            <CarouselContent className="-ml-3 md:-ml-4">
              {lookbook.map((item, idx) => (
                <CarouselItem
                  key={idx}
                  data-testid={`lookbook-slide-${idx}`}
                  className="pl-3 md:pl-4 basis-3/4 sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
                >
                  <a
                    href="https://www.instagram.com/choixjoias/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block relative overflow-hidden border border-border bg-card aspect-[3/4]"
                  >
                    <img
                      src={item.url}
                      alt={item.alt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-foreground/85 via-foreground/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <p className="text-white text-xs leading-snug font-light">
                        {item.alt}
                      </p>
                    </div>
                  </a>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious
              data-testid="carousel-prev"
              className="hidden md:flex -left-4 lg:-left-6 bg-background/95 border-border hover:bg-foreground hover:text-background hover:border-foreground"
            />
            <CarouselNext
              data-testid="carousel-next"
              className="hidden md:flex -right-4 lg:-right-6 bg-background/95 border-border hover:bg-foreground hover:text-background hover:border-foreground"
            />
          </Carousel>

          <p className="text-center text-xs text-muted-foreground/70 mt-5 md:hidden">
            Arraste para o lado para ver mais
          </p>
        </motion.div>

        <div className="grid grid-cols-3 md:grid-cols-4 gap-1 md:gap-2 max-w-5xl mx-auto">
          {posts.map((post, index) => (
            <motion.a
              key={index}
              href="https://www.instagram.com/choixjoias/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
              className="group relative aspect-square overflow-hidden bg-card border border-border"
            >
              <img
                src={post.url}
                alt={post.alt}
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-foreground/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="white" stroke="none" />
                </svg>
                <span className="text-white text-xs tracking-widest uppercase font-light">
                  Ver no Instagram
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <a
            href="https://www.instagram.com/choixjoias/"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="link-instagram-feed"
            className="inline-flex items-center gap-3 text-sm tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors border-b border-current pb-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
            </svg>
            Seguir @choixjoias
          </a>
        </motion.div>
      </div>
    </section>
  );
}
