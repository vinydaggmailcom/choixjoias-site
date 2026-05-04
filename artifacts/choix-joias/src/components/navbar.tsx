import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import choixLogo from "@assets/logo-choix_1777854400379.png";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      if (menuOpen) setMenuOpen(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen]);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const navLinks = [
    { label: "A Marca", id: "about" },
    { label: "Sobre mim", id: "carolina" },
    { label: "Serviços", id: "services" },
    { label: "Coleção", id: "collection" },
    { label: "Instagram", id: "instagram" },
    { label: "Contato", id: "contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-transparent ${
          scrolled || menuOpen
            ? "bg-background/95 backdrop-blur-md border-border/50 py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <button
            onClick={() => scrollTo("hero")}
            className="flex items-center"
            aria-label="Choix Joias — Início"
          >
            <img
              src={choixLogo}
              alt="Choix Joias"
              className="h-8 w-auto"
              data-testid="img-logo"
            />
          </button>

          <div className="hidden md:flex gap-6 text-xs font-sans tracking-[0.18em] text-muted-foreground">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="hover:text-foreground transition-colors uppercase"
              >
                {link.label}
              </button>
            ))}
          </div>

          <button
            className="md:hidden flex flex-col gap-[5px] p-1 z-50"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Menu"
            data-testid="btn-hamburger"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
              className="block w-6 h-px bg-foreground origin-center"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.2 }}
              className="block w-6 h-px bg-foreground"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
              className="block w-6 h-px bg-foreground origin-center"
            />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background/98 backdrop-blur-sm flex flex-col items-center justify-center gap-7 md:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                onClick={() => scrollTo(link.id)}
                className="font-serif text-3xl text-foreground hover:text-accent transition-colors"
              >
                {link.label}
              </motion.button>
            ))}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
              className="mt-6 flex gap-6"
            >
              <a
                href="https://www.instagram.com/choixjoias/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors text-xs tracking-widest uppercase"
              >
                Instagram
              </a>
              <a
                href="https://wa.me/5515997424047"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors text-xs tracking-widest uppercase"
              >
                WhatsApp
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
