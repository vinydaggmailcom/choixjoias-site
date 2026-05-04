import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import casuaisHero from "@assets/image_1777857273013.png";
import casuaisCat1 from "@assets/image_1777857283476.png";
import casuaisCat2 from "@assets/image_1777857289193.png";
import casuaisCat3 from "@assets/image_1777857317794.png";
import casuaisCat4 from "@assets/image_1777857326324.png";
import casuaisCat5 from "@assets/image_1777857333326.png";
import escapHero from "@assets/image_1777857359808.png";
import escapCat1 from "@assets/image_1777857382593.png";
import escapCat2 from "@assets/image_1777857388426.png";
import escapCat3 from "@assets/image_1777857394660.png";
import argolasLifestyle1 from "@assets/image_1777857591366.png";
import argolasLifestyle2 from "@assets/image_1777857613339.png";
import argolasLifestyle3 from "@assets/image_1777857631812.png";
import argolasLifestyle4 from "@assets/image_1777857660239.png";
import argolaAzul from "../assets/products/argola-1691076-azul.png";
import argolaLilas from "../assets/products/argola-1691076-lilas.png";
import argolaPreto from "../assets/products/argola-1691076-preto.png";
import argolaVerde from "../assets/products/argola-1691076-verde.png";
import argolaPink from "../assets/products/argola-1691076-pink.png";
import argolaLaranja from "../assets/products/argola-1691076-laranja.png";
import argola1691199 from "../assets/products/argola-1691199.png";
import argola1690936 from "../assets/products/argola-1690936.png";
import argolaCoracao from "../assets/products/argola-1690914-coracao.png";
import gargantilha1900687 from "../assets/products/gargantilha-1900687.png";
import gargantilha1900850 from "../assets/products/gargantilha-1900850.png";
import gargantilha1900515 from "../assets/products/gargantilha-1900515.png";
import gargantilha1900519 from "../assets/products/gargantilha-1900519.png";
import gargantilha1900587 from "../assets/products/gargantilha-1900587.png";
import gargantilha1900665 from "../assets/products/gargantilha-1900665.png";
import gargantilha1900726 from "../assets/products/gargantilha-1900726.png";
import gargantilha1900731 from "../assets/products/gargantilha-1900731.png";
import gargantilha1900776 from "../assets/products/gargantilha-1900776.png";
import gargantilha1900789 from "../assets/products/gargantilha-1900789.png";
import gargantilhaLifestyle1 from "../assets/products/gargantilha-lifestyle1.png";
import pulseiraLifestyle1 from "../assets/products/pulseira-lifestyle1.png";
import pulseiraLifestyle2 from "../assets/products/pulseira-lifestyle2.png";
import pulseiraLifestyle3 from "../assets/products/pulseira-lifestyle3.png";
import pulseira1700882 from "../assets/products/pulseira-1700882.png";
import pulseira1700869 from "../assets/products/pulseira-1700869.png";
import pulseira1700615 from "../assets/products/pulseira-1700615.png";
import pulseira1700573 from "../assets/products/pulseira-1700573.png";
import pulseira1700783 from "../assets/products/pulseira-1700783.png";
import pulseira1700786 from "../assets/products/pulseira-1700786.png";
import pulseira1700789 from "../assets/products/pulseira-1700789.png";
import pulseira1700550 from "../assets/products/pulseira-1700550.png";
import pulseira1700886 from "../assets/products/pulseira-1700886.png";
import pulseira1700875 from "../assets/products/pulseira-1700875.png";
import pulseira1700877 from "../assets/products/pulseira-1700877.png";
import pulseira1700878 from "../assets/products/pulseira-1700878.png";
import pulseira1700881 from "../assets/products/pulseira-1700881.png";
import pulseira1700880 from "../assets/products/pulseira-1700880.png";
import pulseira11700147 from "../assets/products/pulseira-11700147.png";
import pulseira1700832 from "../assets/products/pulseira-1700832.png";
import pulseira1700796 from "../assets/products/pulseira-1700796.png";
import pulseira1700758 from "../assets/products/pulseira-1700758.png";
import brincoLifestyle1 from "../assets/products/brinco-lifestyle1.png";
import brincoLifestyle2 from "../assets/products/brinco-lifestyle2.png";
import brincoLifestyle3 from "../assets/products/brinco-lifestyle3.png";
import brinco1690977 from "../assets/products/brinco-1690977.png";
import brinco1690976 from "../assets/products/brinco-1690976.png";
import brinco1691224 from "../assets/products/brinco-1691224.png";
import brinco1690873 from "../assets/products/brinco-1690873.png";
import brinco1690394 from "../assets/products/brinco-1690394.png";
import brinco1690392 from "../assets/products/brinco-1690392.png";
import brinco1690975 from "../assets/products/brinco-1690975.png";
import brinco1689392 from "../assets/products/brinco-1689392.png";
import brinco1690514 from "../assets/products/brinco-1690514.png";
import brinco1690517 from "../assets/products/brinco-1690517.png";
import brinco1691147 from "../assets/products/brinco-1691147.png";
import brinco1691144 from "../assets/products/brinco-1691144.png";
import brinco1690967 from "../assets/products/brinco-1690967.png";
import brinco1691045 from "../assets/products/brinco-1691045.png";
import brinco1690687 from "../assets/products/brinco-1690687.png";
import brinco1690688 from "../assets/products/brinco-1690688.png";
import brinco1690566 from "../assets/products/brinco-1690566.png";
import brinco1690607 from "../assets/products/brinco-1690607.png";
import brinco1689189 from "../assets/products/brinco-1689189.png";
import brinco1691228 from "../assets/products/brinco-1691228.png";
import brinco1690979 from "../assets/products/brinco-1690979.png";
import brinco1691242 from "../assets/products/brinco-1691242.png";
import colaresHero from "@assets/image_1777857466510.png";
import colaresCat1 from "@assets/image_1777857475214.png";
import colaresCat2 from "@assets/image_1777857481259.png";
import colaresCat3 from "@assets/image_1777857487542.png";
import colaresCat4 from "@assets/image_1777857493577.png";
import colaresCat5 from "@assets/image_1777857500094.png";
import colaresCat6 from "@assets/image_1777857506405.png";
import colaresCat7 from "@assets/image_1777857512207.png";
import colaresCat8 from "@assets/image_1777857533868.png";
import colaresCat9 from "@assets/image_1777857539158.png";
import anelMix1 from "@assets/image_1777859000564.png";
import anelMix2 from "@assets/image_1777859036246.png";
import anelMix3 from "@assets/image_1777859127637.png";
import colarMix1 from "@assets/image_1777858954965.png";
import colarMix2 from "@assets/image_1777859157663.png";
import colarMix3 from "@assets/image_1777859191228.png";
import brincoMix1 from "@assets/image_1777858974118.png";
import brincoMix2 from "@assets/image_1777859023452.png";
import brincoMix3 from "@assets/image_1777859049517.png";
import brincoMix4 from "@assets/image_1777859060243.png";
import brincoMix5 from "@assets/image_1777859088671.png";
import brincoMix6 from "@assets/image_1777859097652.png";
import brincoMix7 from "@assets/image_1777859108401.png";
import brincoMix8 from "@assets/image_1777859146423.png";
import brincoMix9 from "@assets/image_1777859166862.png";
import pulseiraMix1 from "@assets/image_1777859078805.png";
import pulseiraMix2 from "@assets/image_1777859198700.png";
import brincoMedioLifestyle from "../assets/products/brinco-medio-lifestyle1.png";
import brincoMedio1690593 from "../assets/products/brinco-medio-1690593.png";
import brincoMedio1690925 from "../assets/products/brinco-medio-1690925.png";
import brincoMedio1690753 from "../assets/products/brinco-medio-1690753.png";
import brincoMedio1691236 from "../assets/products/brinco-medio-1691236.png";
import brincoMedio1690548 from "../assets/products/brinco-medio-1690548.png";
import brincoMedio1691044 from "../assets/products/brinco-medio-1691044.png";
import brincoMedio1691014 from "../assets/products/brinco-medio-1691014.png";
import brincoMedio1691174 from "../assets/products/brinco-medio-1691174.png";
import brincoMedio1691244 from "../assets/products/brinco-medio-1691244.png";
import brincoMedio1691203 from "../assets/products/brinco-medio-1691203.png";
import brincoMedio1691054 from "../assets/products/brinco-medio-1691054.png";
import brincoMedio1691178 from "../assets/products/brinco-medio-1691178.png";
import brincoMedio1691077 from "../assets/products/brinco-medio-1691077.png";
import brincoMedio1690897 from "../assets/products/brinco-medio-1690897.png";
import brincoMedio1691082 from "../assets/products/brinco-medio-1691082.png";
import brincoMedio1690358 from "../assets/products/brinco-medio-1690358.png";
import brincoMedio1690577 from "../assets/products/brinco-medio-1690577.png";
import brincoMedio1690685 from "../assets/products/brinco-medio-1690685.png";
import brincoMedio1690978 from "../assets/products/brinco-medio-1690978.png";
import brincoMedio1690604 from "../assets/products/brinco-medio-1690604.png";
import brincoGrandeLifestyle1 from "../assets/products/brinco-grande-lifestyle1.png";
import brincoGrandeLifestyle2 from "../assets/products/brinco-grande-lifestyle2.png";
import brincoGrandeLifestyle3 from "../assets/products/brinco-grande-lifestyle3.png";
import brincoGrande1691331 from "../assets/products/brinco-grande-1691331.png";
import brincoGrande1690499 from "../assets/products/brinco-grande-1690499.png";
import brincoGrande1691330 from "../assets/products/brinco-grande-1691330.png";
import brincoGrande1691173 from "../assets/products/brinco-grande-1691173.png";
import brincoGrande1690158 from "../assets/products/brinco-grande-1690158.png";
import brincoGrande1691182 from "../assets/products/brinco-grande-1691182.png";
import brincoGrande1690246 from "../assets/products/brinco-grande-1690246.png";
import brincoGrande1691083 from "../assets/products/brinco-grande-1691083.png";
import brincoGrande1690960 from "../assets/products/brinco-grande-1690960.png";
import brincoGrande1691253 from "../assets/products/brinco-grande-1691253.png";
import brincoGrande1691256 from "../assets/products/brinco-grande-1691256.png";
import brincoGrande1690848 from "../assets/products/brinco-grande-1690848.png";
import brincoGrande1690909 from "../assets/products/brinco-grande-1690909.png";
import anelLifestyle1 from "../assets/products/anel-lifestyle1.png";
import anelLifestyle2 from "../assets/products/anel-lifestyle2.png";
import anelLifestyle3 from "../assets/products/anel-lifestyle3.png";
import anelLifestyle4 from "../assets/products/anel-lifestyle4.png";
import anelLifestyle5 from "../assets/products/anel-lifestyle5.png";

const pieces = [
  {
    id: 1,
    title: "Anel Solitário Delicado",
    category: "Anéis",
    image: "https://brilho.com.br/wp-content/uploads/2015/06/anel-solitario-fino-delicado-tamanho-pequeno-folheado-ouro-dourado-antialergico-nickel-free-sabrina-joias-brilho-folheados-1940400-270x270-optimized.jpg",
    fit: "contain",
  },
  {
    id: 2,
    title: "Corrente Feminina Elos",
    category: "Colares",
    image: "https://brilho.com.br/wp-content/uploads/2023/03/93e45-corrente-feminina-elos-interligados-espessura-grossa-45cm-comprimento-semijoia-da-marca-sarbrina-joias-270x270-optimized.jpg",
    fit: "contain",
  },
  {
    id: 4,
    title: "Brinco Argola com Cruz",
    category: "Argolas",
    image: "https://brilho.com.br/wp-content/uploads/2020/11/1690550-brinco-formado-por-argola-e-cruz-lisas-pendurada-banhado-a-ouro-brilho-folheados-sabrina-joias-270x270-optimized.jpg",
    fit: "contain",
  },
  {
    id: 5,
    title: "Anel Elo com Zircônias",
    category: "Anéis",
    image: "https://brilho.com.br/wp-content/uploads/2023/02/1911285-foto-fundo-branco-do-anel-elo-com-zirconias-folheado-a-ouro-antialergico-Sabrina-Joias-270x270-optimized.png",
    fit: "contain",
  },
  {
    id: 6,
    title: "Escapulário Banhado a Ouro",
    category: "Escapulários",
    image: "https://brilho.com.br/wp-content/uploads/2018/06/1700418-bracelete-ajustavel-sao-bento-folheado-a-ouro-dourado-18k-com-escrita-em-resina-preta-sabrina-joias-brilho-folhados-270x270-optimized.jpg",
    fit: "contain",
  },
  {
    id: 7,
    title: "Anel Coração com Zircônias",
    category: "Anéis",
    image: "https://brilho.com.br/wp-content/uploads/2018/05/1910622-anel-coracao-rendando-com-zirconias-folheado-ouro-rose-sabrina-joias-brilho-folheados-270x270-optimized.jpg",
    fit: "contain",
  },
  // Casuais — Sabrina Joias
  {
    id: 10,
    title: "Casuais — Editorial",
    category: "Casuais",
    image: casuaisHero,
    fit: "cover",
  },
  {
    id: 11,
    title: "Brincos & Anéis Casuais",
    category: "Casuais",
    image: casuaisCat1,
    fit: "cover",
  },
  {
    id: 12,
    title: "Argolas & Anéis — Coleção Leveza",
    category: "Casuais",
    image: casuaisCat2,
    fit: "cover",
  },
  {
    id: 13,
    title: "Brincos Casuais — Coleção Leveza",
    category: "Casuais",
    image: casuaisCat3,
    fit: "cover",
  },
  {
    id: 14,
    title: "Colares Casuais",
    category: "Casuais",
    image: casuaisCat4,
    fit: "cover",
  },
  {
    id: 15,
    title: "Colares & Pulseiras Casuais",
    category: "Casuais",
    image: casuaisCat5,
    fit: "cover",
  },
  // Escapulários — Sabrina Joias
  {
    id: 16,
    title: "Escapulários — Editorial",
    category: "Escapulários",
    image: escapHero,
    fit: "cover",
  },
  {
    id: 17,
    title: "Coleção Janela Para Alma & Momentos",
    category: "Escapulários",
    image: escapCat1,
    fit: "cover",
  },
  {
    id: 18,
    title: "Coleção Mística — N.S. do Carmo & Fátima",
    category: "Escapulários",
    image: escapCat2,
    fit: "cover",
  },
  {
    id: 19,
    title: "Coleção Jardim Encantado & Radiante",
    category: "Escapulários",
    image: escapCat3,
    fit: "cover",
  },
  // Argolas — Sabrina Joias
  {
    id: 30,
    title: "Argola Esmaltada Azul Jeans — 1691076",
    category: "Argolas",
    image: argolaAzul,
    fit: "contain",
  },
  {
    id: 31,
    title: "Argola Esmaltada Lilás — 1691076",
    category: "Argolas",
    image: argolaLilas,
    fit: "contain",
  },
  {
    id: 32,
    title: "Argola Esmaltada Preto — 1691076",
    category: "Argolas",
    image: argolaPreto,
    fit: "contain",
  },
  {
    id: 33,
    title: "Argola Esmaltada Verde Pistache — 1691076",
    category: "Argolas",
    image: argolaVerde,
    fit: "contain",
  },
  {
    id: 34,
    title: "Argola Esmaltada Pink — 1691076",
    category: "Argolas",
    image: argolaPink,
    fit: "contain",
  },
  {
    id: 35,
    title: "Argola Esmaltada Laranja — 1691076",
    category: "Argolas",
    image: argolaLaranja,
    fit: "contain",
  },
  {
    id: 36,
    title: "Argola com Pedras Coloridas — 1691199",
    category: "Argolas",
    image: argola1691199,
    fit: "contain",
  },
  {
    id: 37,
    title: "Argola Cravejada Colorida — 1690936",
    category: "Argolas",
    image: argola1690936,
    fit: "contain",
  },
  {
    id: 38,
    title: "Argola com Coração Cravejado — 1690914",
    category: "Argolas",
    image: argolaCoracao,
    fit: "contain",
  },
  {
    id: 39,
    title: "Argola Pink — Look",
    category: "Argolas",
    image: argolasLifestyle1,
    fit: "cover",
  },
  {
    id: 40,
    title: "Argolas Coloridas — Editorial",
    category: "Argolas",
    image: argolasLifestyle2,
    fit: "cover",
  },
  {
    id: 41,
    title: "Argola Dourada — Detalhe",
    category: "Argolas",
    image: argolasLifestyle3,
    fit: "cover",
  },
  {
    id: 42,
    title: "Argola Dourada — Look de Verão",
    category: "Argolas",
    image: argolasLifestyle4,
    fit: "cover",
  },
  // Gargantilhas — Sabrina Joias
  {
    id: 50,
    title: "Gargantilha — Look",
    category: "Gargantilhas",
    image: gargantilhaLifestyle1,
    fit: "cover",
  },
  {
    id: 51,
    title: "Gargantilha Coleção Clássicos — 1900687",
    category: "Gargantilhas",
    image: gargantilha1900687,
    fit: "contain",
  },
  {
    id: 52,
    title: "Gargantilha Coleção Leveza — 1900850",
    category: "Gargantilhas",
    image: gargantilha1900850,
    fit: "contain",
  },
  {
    id: 53,
    title: "Gargantilha Coleção Sunset — 1900515",
    category: "Gargantilhas",
    image: gargantilha1900515,
    fit: "contain",
  },
  {
    id: 54,
    title: "Gargantilha Coleção Sunset — 1900519",
    category: "Gargantilhas",
    image: gargantilha1900519,
    fit: "contain",
  },
  {
    id: 55,
    title: "Gargantilha Coleção Holi — 1900587",
    category: "Gargantilhas",
    image: gargantilha1900587,
    fit: "contain",
  },
  {
    id: 56,
    title: "Gargantilha Coleção Despertar — 1900665",
    category: "Gargantilhas",
    image: gargantilha1900665,
    fit: "contain",
  },
  {
    id: 57,
    title: "Gargantilha Coleção Jardim Encantado — 1900726",
    category: "Gargantilhas",
    image: gargantilha1900726,
    fit: "contain",
  },
  {
    id: 58,
    title: "Gargantilha Coleção Gestos — 1900731",
    category: "Gargantilhas",
    image: gargantilha1900731,
    fit: "contain",
  },
  {
    id: 59,
    title: "Gargantilha Coleção Elo — 1900776",
    category: "Gargantilhas",
    image: gargantilha1900776,
    fit: "contain",
  },
  {
    id: 60,
    title: "Gargantilha Coleção Conquistas — 1900789",
    category: "Gargantilhas",
    image: gargantilha1900789,
    fit: "contain",
  },
  // Pulseiras — Sabrina Joias
  {
    id: 70,
    title: "Pulseiras Clássicas — Editorial",
    category: "Pulseiras",
    image: pulseiraLifestyle1,
    fit: "cover",
  },
  {
    id: 71,
    title: "Pulseira & Anel — Look",
    category: "Pulseiras",
    image: pulseiraLifestyle2,
    fit: "cover",
  },
  {
    id: 72,
    title: "Pulseira Janela Para Alma — Detalhe",
    category: "Pulseiras",
    image: pulseiraLifestyle3,
    fit: "cover",
  },
  {
    id: 73,
    title: "Pulseira Coleção Linhas da Vida II — 1700882",
    category: "Pulseiras",
    image: pulseira1700882,
    fit: "contain",
  },
  {
    id: 74,
    title: "Pulseira Coleção Clássicos — 1700869",
    category: "Pulseiras",
    image: pulseira1700869,
    fit: "contain",
  },
  {
    id: 75,
    title: "Pulseira Coleção Clássicos — 1700615",
    category: "Pulseiras",
    image: pulseira1700615,
    fit: "contain",
  },
  {
    id: 76,
    title: "Pulseira Coleção Mística — 1700573",
    category: "Pulseiras",
    image: pulseira1700573,
    fit: "contain",
  },
  {
    id: 77,
    title: "Pulseira Gestos Gratidão — 1700783",
    category: "Pulseiras",
    image: pulseira1700783,
    fit: "contain",
  },
  {
    id: 78,
    title: "Pulseira Gestos Felicidade — 1700786",
    category: "Pulseiras",
    image: pulseira1700786,
    fit: "contain",
  },
  {
    id: 79,
    title: "Pulseira Gestos Proteção — 1700789",
    category: "Pulseiras",
    image: pulseira1700789,
    fit: "contain",
  },
  {
    id: 80,
    title: "Pulseira Coleção Clássicos com Medalhão — 1700550",
    category: "Pulseiras",
    image: pulseira1700550,
    fit: "contain",
  },
  {
    id: 81,
    title: "Pulseira Coleção Raízes II — 1700886",
    category: "Pulseiras",
    image: pulseira1700886,
    fit: "contain",
  },
  {
    id: 82,
    title: "Pulseira Coleção Raízes II — 1700875",
    category: "Pulseiras",
    image: pulseira1700875,
    fit: "contain",
  },
  {
    id: 83,
    title: "Pulseira Coleção Raízes II — 1700877",
    category: "Pulseiras",
    image: pulseira1700877,
    fit: "contain",
  },
  {
    id: 84,
    title: "Pulseira Coleção Raízes II — 1700878",
    category: "Pulseiras",
    image: pulseira1700878,
    fit: "contain",
  },
  {
    id: 85,
    title: "Pulseira Coleção Raízes II Esmeralda — 1700881",
    category: "Pulseiras",
    image: pulseira1700881,
    fit: "contain",
  },
  {
    id: 86,
    title: "Pulseira Coleção Raízes II — 1700880",
    category: "Pulseiras",
    image: pulseira1700880,
    fit: "contain",
  },
  {
    id: 87,
    title: "Pulseira Coleção Clássicos Snake — 11700147",
    category: "Pulseiras",
    image: pulseira11700147,
    fit: "contain",
  },
  {
    id: 88,
    title: "Pulseira Coleção Janela Para Alma — 1700832",
    category: "Pulseiras",
    image: pulseira1700832,
    fit: "contain",
  },
  {
    id: 89,
    title: "Pulseira Coleção Gestos Coloridos — 1700796",
    category: "Pulseiras",
    image: pulseira1700796,
    fit: "contain",
  },
  {
    id: 90,
    title: "Pulseira Coleção Janela Para Alma — 1700758",
    category: "Pulseiras",
    image: pulseira1700758,
    fit: "contain",
  },
  // Brincos Pequenos — Sabrina Joias
  {
    id: 100,
    title: "Brincos Pequenos — Editorial",
    category: "Brincos",
    image: brincoLifestyle1,
    fit: "cover",
  },
  {
    id: 101,
    title: "Brinco Coleção Gestos — Detalhe",
    category: "Brincos",
    image: brincoLifestyle2,
    fit: "cover",
  },
  {
    id: 102,
    title: "Brinco Coleção Gestos — Look",
    category: "Brincos",
    image: brincoLifestyle3,
    fit: "cover",
  },
  {
    id: 103,
    title: "Brinco Coleção Gestos — 1690977",
    category: "Brincos",
    image: brinco1690977,
    fit: "contain",
  },
  {
    id: 104,
    title: "Brinco Coleção Gestos Rosa — 1690976",
    category: "Brincos",
    image: brinco1690976,
    fit: "contain",
  },
  {
    id: 105,
    title: "Brinco Coleção Linhas da Vida — 1691224",
    category: "Brincos",
    image: brinco1691224,
    fit: "contain",
  },
  {
    id: 106,
    title: "Brinco Coração Cravejado Coleção Despertar — 1690873",
    category: "Brincos",
    image: brinco1690873,
    fit: "contain",
  },
  {
    id: 107,
    title: "Brinco Estrela Coleção Mística — 1690394",
    category: "Brincos",
    image: brinco1690394,
    fit: "contain",
  },
  {
    id: 108,
    title: "Brinco Lua e Estrela Coleção Mística — 1690392",
    category: "Brincos",
    image: brinco1690392,
    fit: "contain",
  },
  {
    id: 109,
    title: "Brinco Coleção Linhas da Vida II — 1690975",
    category: "Brincos",
    image: brinco1690975,
    fit: "contain",
  },
  {
    id: 110,
    title: "Brinco Pérola Coleção Clássicos — 1689392",
    category: "Brincos",
    image: brinco1689392,
    fit: "contain",
  },
  {
    id: 111,
    title: "Brinco Coleção Sunset Cravejado — 1690514",
    category: "Brincos",
    image: brinco1690514,
    fit: "contain",
  },
  {
    id: 112,
    title: "Brinco Esfera Coleção Sunset — 1690517",
    category: "Brincos",
    image: brinco1690517,
    fit: "contain",
  },
  {
    id: 113,
    title: "Brinco Coração Solitário Coleção Raízes — 1691147",
    category: "Brincos",
    image: brinco1691147,
    fit: "contain",
  },
  {
    id: 114,
    title: "Brinco Gota Solitário Coleção Raízes — 1691144",
    category: "Brincos",
    image: brinco1691144,
    fit: "contain",
  },
  {
    id: 115,
    title: "Brinco Coração Turquesa Coleção Raízes — 1690967",
    category: "Brincos",
    image: brinco1690967,
    fit: "contain",
  },
  {
    id: 116,
    title: "Brinco Coração Cravejado Coleção Momentos — 1691045",
    category: "Brincos",
    image: brinco1691045,
    fit: "contain",
  },
  {
    id: 117,
    title: "Brinco Disco Cravejado Coleção Cápsula — 1690687",
    category: "Brincos",
    image: brinco1690687,
    fit: "contain",
  },
  {
    id: 118,
    title: "Brinco Medalha São Bento Coleção Cápsula — 1690688",
    category: "Brincos",
    image: brinco1690688,
    fit: "contain",
  },
  {
    id: 119,
    title: "Brinco Origami Coleção Amor de Mãe — 1690566",
    category: "Brincos",
    image: brinco1690566,
    fit: "contain",
  },
  {
    id: 120,
    title: "Brinco Infinito Coleção Amor de Mãe — 1690607",
    category: "Brincos",
    image: brinco1690607,
    fit: "contain",
  },
  {
    id: 121,
    title: "Brinco Coração Cravejado Coleção Clássicos — 1689189",
    category: "Brincos",
    image: brinco1689189,
    fit: "contain",
  },
  {
    id: 122,
    title: "Brinco Argola Cravejada Coleção Linhas da Vida II — 1691228",
    category: "Brincos",
    image: brinco1691228,
    fit: "contain",
  },
  {
    id: 123,
    title: "Brinco Pérola e Gota Coleção Gestos — 1690979",
    category: "Brincos",
    image: brinco1690979,
    fit: "contain",
  },
  {
    id: 124,
    title: "Brinco Argola Cravejada Coleção Linhas da Vida II — 1691242",
    category: "Brincos",
    image: brinco1691242,
    fit: "contain",
  },
  // Colares — Sabrina Joias
  {
    id: 20,
    title: "Colares — Editorial",
    category: "Colares",
    image: colaresHero,
    fit: "cover",
  },
  {
    id: 21,
    title: "Linhas da Vida I — Coleção Clássica",
    category: "Colares",
    image: colaresCat1,
    fit: "cover",
  },
  {
    id: 22,
    title: "Coleção Conquistas & Linhas da Vida II",
    category: "Colares",
    image: colaresCat2,
    fit: "cover",
  },
  {
    id: 23,
    title: "Coleção Champanhe, Gestos & Momentos",
    category: "Colares",
    image: colaresCat3,
    fit: "cover",
  },
  {
    id: 24,
    title: "Colares em Camadas — Look Completo",
    category: "Colares",
    image: colaresCat4,
    fit: "cover",
  },
  {
    id: 25,
    title: "Coleção Sunset, Champanhe & Leveza",
    category: "Colares",
    image: colaresCat5,
    fit: "cover",
  },
  {
    id: 26,
    title: "Coleção Sunset, Radiante & Raízes",
    category: "Colares",
    image: colaresCat6,
    fit: "cover",
  },
  {
    id: 27,
    title: "Coleção Gestos & Glow",
    category: "Colares",
    image: colaresCat7,
    fit: "cover",
  },
  {
    id: 28,
    title: "Coleção Holi & Raízes I",
    category: "Colares",
    image: colaresCat8,
    fit: "cover",
  },
  {
    id: 29,
    title: "Coleção Despertar & Gestos",
    category: "Colares",
    image: colaresCat9,
    fit: "cover",
  },
  // Anéis — Coleção Especial
  {
    id: 43,
    title: "Anéis Delicados — Look",
    category: "Anéis",
    image: anelMix1,
    fit: "cover",
  },
  {
    id: 44,
    title: "Anéis & Pulseiras — Lifestyle",
    category: "Anéis",
    image: anelMix2,
    fit: "cover",
  },
  {
    id: 45,
    title: "Coleção de Anéis — Editorial",
    category: "Anéis",
    image: anelMix3,
    fit: "cover",
  },
  // Colares — Coleção Especial
  {
    id: 46,
    title: "Pingentes Coração Madrepérola",
    category: "Colares",
    image: colarMix1,
    fit: "cover",
  },
  {
    id: 47,
    title: "Conjunto Coração & Brincos",
    category: "Colares",
    image: colarMix2,
    fit: "cover",
  },
  {
    id: 48,
    title: "Pingentes Gota Coloridos — Look",
    category: "Colares",
    image: colarMix3,
    fit: "cover",
  },
  // Pulseiras — Coleção Especial
  {
    id: 91,
    title: "Riviera & Brincos — Conjunto Festa",
    category: "Pulseiras",
    image: pulseiraMix1,
    fit: "cover",
  },
  {
    id: 92,
    title: "Pulseiras Felicidade, Proteção & Gratidão",
    category: "Pulseiras",
    image: pulseiraMix2,
    fit: "cover",
  },
  // Brincos — Coleção Especial
  {
    id: 125,
    title: "Brinco Roseta de Pérolas",
    category: "Brincos",
    image: brincoMix1,
    fit: "cover",
  },
  {
    id: 126,
    title: "Argolas em Camadas — Look",
    category: "Brincos",
    image: brincoMix2,
    fit: "cover",
  },
  {
    id: 127,
    title: "Ear Cuff & Argolas com Cruz",
    category: "Brincos",
    image: brincoMix3,
    fit: "cover",
  },
  {
    id: 128,
    title: "Brincos com Pedras Coloridas",
    category: "Brincos",
    image: brincoMix4,
    fit: "cover",
  },
  {
    id: 129,
    title: "Brinco Leque com Gotas",
    category: "Brincos",
    image: brincoMix5,
    fit: "cover",
  },
  {
    id: 130,
    title: "Argolas Cravejadas — Detalhe",
    category: "Brincos",
    image: brincoMix6,
    fit: "cover",
  },
  {
    id: 131,
    title: "Brinco Coração Madrepérola Cravejado",
    category: "Brincos",
    image: brincoMix7,
    fit: "cover",
  },
  {
    id: 132,
    title: "Brinco Cascata Esmeralda",
    category: "Brincos",
    image: brincoMix8,
    fit: "cover",
  },
  {
    id: 133,
    title: "Brincos & Anéis Esculturais — Look",
    category: "Brincos",
    image: brincoMix9,
    fit: "cover",
  },
  // Brincos Médios — Sabrina Joias
  {
    id: 134,
    title: "Brincos Médios — Editorial",
    category: "Brincos",
    image: brincoMedioLifestyle,
    fit: "cover",
  },
  {
    id: 135,
    title: "Brinco Coleção Amor de Mãe — 1690593",
    category: "Brincos",
    image: brincoMedio1690593,
    fit: "contain",
  },
  {
    id: 136,
    title: "Brinco Coleção Janelas para a Alma — 1690925",
    category: "Brincos",
    image: brincoMedio1690925,
    fit: "contain",
  },
  {
    id: 137,
    title: "Brinco Coleção Elo — 1690753",
    category: "Brincos",
    image: brincoMedio1690753,
    fit: "contain",
  },
  {
    id: 138,
    title: "Brinco Coleção Linhas da Vida — 1691236",
    category: "Brincos",
    image: brincoMedio1691236,
    fit: "contain",
  },
  {
    id: 139,
    title: "Brinco Coleção Bem Me Quer — 1690548",
    category: "Brincos",
    image: brincoMedio1690548,
    fit: "contain",
  },
  {
    id: 140,
    title: "Brinco Coleção Gestos — 1691044",
    category: "Brincos",
    image: brincoMedio1691044,
    fit: "contain",
  },
  {
    id: 141,
    title: "Brinco Coração Coleção Gestos — 1691014",
    category: "Brincos",
    image: brincoMedio1691014,
    fit: "contain",
  },
  {
    id: 142,
    title: "Brinco Coleção Conquistas — 1691174",
    category: "Brincos",
    image: brincoMedio1691174,
    fit: "contain",
  },
  {
    id: 143,
    title: "Brinco Coleção Leveza — 1691244",
    category: "Brincos",
    image: brincoMedio1691244,
    fit: "contain",
  },
  {
    id: 144,
    title: "Brinco Coleção Linhas da Vida II — 1691203",
    category: "Brincos",
    image: brincoMedio1691203,
    fit: "contain",
  },
  {
    id: 145,
    title: "Brinco Coleção Janelas para a Alma — 1691054",
    category: "Brincos",
    image: brincoMedio1691054,
    fit: "contain",
  },
  {
    id: 146,
    title: "Brinco Pérola Coleção Conquistas — 1691178",
    category: "Brincos",
    image: brincoMedio1691178,
    fit: "contain",
  },
  {
    id: 147,
    title: "Brinco Coleção Linhas da Vida — 1691077",
    category: "Brincos",
    image: brincoMedio1691077,
    fit: "contain",
  },
  {
    id: 148,
    title: "Brinco Coleção Despertar — 1690897",
    category: "Brincos",
    image: brincoMedio1690897,
    fit: "contain",
  },
  {
    id: 149,
    title: "Brinco Onça Coleção Linhas da Vida I — 1691082",
    category: "Brincos",
    image: brincoMedio1691082,
    fit: "contain",
  },
  {
    id: 150,
    title: "Brinco Coração Coleção Endless — 1690358",
    category: "Brincos",
    image: brincoMedio1690358,
    fit: "contain",
  },
  {
    id: 151,
    title: "Brinco Coração Pendente Coleção Endless — 1690577",
    category: "Brincos",
    image: brincoMedio1690577,
    fit: "contain",
  },
  {
    id: 152,
    title: "Brinco Medalha São Bento Coleção Clássicos — 1690685",
    category: "Brincos",
    image: brincoMedio1690685,
    fit: "contain",
  },
  {
    id: 153,
    title: "Brinco Pérola Coleção Gestos — 1690978",
    category: "Brincos",
    image: brincoMedio1690978,
    fit: "contain",
  },
  {
    id: 154,
    title: "Brinco Pérola Coleção Amor de Mãe — 1690604",
    category: "Brincos",
    image: brincoMedio1690604,
    fit: "contain",
  },
  // Brincos Grandes — Sabrina Joias
  {
    id: 155,
    title: "Brincos Grandes — Editorial",
    category: "Brincos",
    image: brincoGrandeLifestyle1,
    fit: "cover",
  },
  {
    id: 156,
    title: "Maxi Brinco Floral — Look",
    category: "Brincos",
    image: brincoGrandeLifestyle2,
    fit: "cover",
  },
  {
    id: 157,
    title: "Maxi Brinco Esculpido — Look",
    category: "Brincos",
    image: brincoGrandeLifestyle3,
    fit: "cover",
  },
  {
    id: 158,
    title: "Maxi Brinco Esmeralda & Pérola Coleção Poente — 1691331",
    category: "Brincos",
    image: brincoGrande1691331,
    fit: "contain",
  },
  {
    id: 159,
    title: "Maxi Brinco Coleção Sunset — 1690499",
    category: "Brincos",
    image: brincoGrande1690499,
    fit: "contain",
  },
  {
    id: 160,
    title: "Maxi Brinco Lírio Coleção Leveza — 1691330",
    category: "Brincos",
    image: brincoGrande1691330,
    fit: "contain",
  },
  {
    id: 161,
    title: "Maxi Brinco Coleção Linhas da Vida — 1691173",
    category: "Brincos",
    image: brincoGrande1691173,
    fit: "contain",
  },
  {
    id: 162,
    title: "Maxi Brinco Elos Coleção Clássicos — 1690158",
    category: "Brincos",
    image: brincoGrande1690158,
    fit: "contain",
  },
  {
    id: 163,
    title: "Maxi Brinco Laço Coleção Raízes — 1691182",
    category: "Brincos",
    image: brincoGrande1691182,
    fit: "contain",
  },
  {
    id: 164,
    title: "Maxi Argola Coleção Bem Me Quer — 1690246",
    category: "Brincos",
    image: brincoGrande1690246,
    fit: "contain",
  },
  {
    id: 165,
    title: "Maxi Brinco Onça Coleção Clássicos — 1691083",
    category: "Brincos",
    image: brincoGrande1691083,
    fit: "contain",
  },
  {
    id: 166,
    title: "Maxi Brinco Esmeralda Coleção Gestos — 1690960",
    category: "Brincos",
    image: brincoGrande1690960,
    fit: "contain",
  },
  {
    id: 167,
    title: "Maxi Brinco Ônix Coleção Leveza — 1691253",
    category: "Brincos",
    image: brincoGrande1691253,
    fit: "contain",
  },
  {
    id: 168,
    title: "Maxi Brinco Esmeralda & Ametista Coleção Poente — 1691256",
    category: "Brincos",
    image: brincoGrande1691256,
    fit: "contain",
  },
  {
    id: 169,
    title: "Maxi Brinco Elos Coleção Elo — 1690848",
    category: "Brincos",
    image: brincoGrande1690848,
    fit: "contain",
  },
  {
    id: 170,
    title: "Maxi Brinco Coleção Janelas para a Alma — 1690909",
    category: "Brincos",
    image: brincoGrande1690909,
    fit: "contain",
  },
  // Anéis — Editorial
  {
    id: 171,
    title: "Stack de Anéis Coloridos — Editorial",
    category: "Anéis",
    image: anelLifestyle1,
    fit: "cover",
  },
  {
    id: 172,
    title: "Anéis Delicados — Look",
    category: "Anéis",
    image: anelLifestyle2,
    fit: "cover",
  },
  {
    id: 173,
    title: "Linhas Finas Trançadas — Look",
    category: "Anéis",
    image: anelLifestyle3,
    fit: "cover",
  },
  {
    id: 174,
    title: "Anéis Esculturais — Look",
    category: "Anéis",
    image: anelLifestyle4,
    fit: "cover",
  },
  {
    id: 175,
    title: "Volumes Bicolor — Look",
    category: "Anéis",
    image: anelLifestyle5,
    fit: "cover",
  },
];

const categories = ["Todos", "Casuais", "Anéis", "Colares", "Brincos", "Argolas", "Gargantilhas", "Pulseiras", "Escapulários"];

type Piece = (typeof pieces)[number];

export function Collection() {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [selectedPiece, setSelectedPiece] = useState<Piece | null>(null);

  const filtered = activeCategory === "Todos"
    ? pieces
    : pieces.filter((p) => p.category === activeCategory);

  useEffect(() => {
    if (!selectedPiece) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedPiece(null);
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [selectedPiece]);

  return (
    <section className="py-32 bg-card relative z-10" id="collection">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-primary uppercase tracking-[0.2em] text-xs font-semibold mb-4">Acervo</h3>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground">Semijoias com Propósito</h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-muted-foreground max-w-sm text-sm font-light"
          >
            Curadoria exclusiva de semijoias Sabrina Joias. Peças antialérgicas, folheadas a ouro 18k, para mulheres que escolhem com intenção.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-xs uppercase tracking-[0.15em] px-4 py-2 border transition-all duration-300 font-sans ${
                activeCategory === cat
                  ? "bg-foreground text-background border-foreground"
                  : "border-border text-muted-foreground hover:border-foreground/40 hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-4 space-y-4"
          >
            {filtered.map((piece, index) => (
              <motion.div
                key={piece.id}
                data-testid={`card-product-${piece.id}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.1, zIndex: 20 }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
                onClick={() => setSelectedPiece(piece)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setSelectedPiece(piece);
                  }
                }}
                className="break-inside-avoid group cursor-pointer relative border border-border bg-card shadow-sm hover:shadow-2xl transition-shadow duration-500 will-change-transform"
              >
                <div className={`overflow-hidden aspect-square ${piece.fit === "contain" ? "bg-white" : "bg-card"}`}>
                  <img
                    src={piece.image}
                    alt={piece.title}
                    className={`w-full h-full ${
                      piece.fit === "contain"
                        ? "object-contain p-4"
                        : "object-cover object-top"
                    }`}
                  />
                </div>
                <div className="absolute inset-0 bg-foreground/85 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-3 sm:p-4 pointer-events-none">
                  <span className="text-primary uppercase tracking-[0.18em] text-[10px] mb-1 block transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {piece.category}
                  </span>
                  <h4 className="font-serif text-sm sm:text-base text-white leading-tight transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75 line-clamp-3">
                    {piece.title}
                  </h4>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <a
            href="https://www.instagram.com/choixjoias/"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="link-instagram-collection"
            className="inline-flex items-center gap-3 text-sm tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors border-b border-current pb-1"
          >
            Ver mais no Instagram
          </a>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedPiece && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            onClick={() => setSelectedPiece(null)}
            className="fixed inset-0 z-[60] flex items-center justify-center p-6 md:p-12 bg-black/60 backdrop-blur-md cursor-zoom-out"
            data-testid="product-modal-backdrop"
            role="dialog"
            aria-modal="true"
            aria-label={selectedPiece.title}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full max-h-[88vh] flex flex-col cursor-default"
              data-testid="product-modal-content"
            >
              <button
                onClick={() => setSelectedPiece(null)}
                aria-label="Fechar"
                data-testid="button-modal-close"
                className="absolute -top-12 right-0 md:top-2 md:right-2 z-10 w-10 h-10 flex items-center justify-center text-white/90 hover:text-white bg-black/30 hover:bg-black/50 backdrop-blur-sm rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className={`flex-1 overflow-hidden flex items-center justify-center ${selectedPiece.fit === "contain" ? "bg-white" : "bg-card"}`}>
                <img
                  src={selectedPiece.image}
                  alt={selectedPiece.title}
                  className={`max-w-full max-h-[75vh] ${
                    selectedPiece.fit === "contain"
                      ? "object-contain p-6"
                      : "object-contain"
                  }`}
                />
              </div>

              <div className="bg-card border-t border-border px-6 py-5 text-center">
                <span className="block text-primary uppercase tracking-[0.2em] text-[11px] mb-2">
                  {selectedPiece.category}
                </span>
                <h4 className="font-serif text-xl md:text-2xl text-foreground">
                  {selectedPiece.title}
                </h4>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
