import React from "react";
import choixLogo from "@assets/logo-choix_1777854400379.png";

const navLinks = [
  { label: "A Marca", id: "about" },
  { label: "Serviços", id: "services" },
  { label: "Coleção", id: "collection" },
  { label: "Depoimentos", id: "testimonials" },
  { label: "Contato", id: "contact" },
];

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export function Footer() {
  return (
    <footer className="bg-card border-t border-border" id="footer">
      <div className="container mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          <div>
            <img
              src={choixLogo}
              alt="Choix Joias"
              className="h-8 w-auto mb-6 opacity-90"
              data-testid="img-footer-logo"
            />
            <p className="text-muted-foreground font-light text-sm leading-relaxed max-w-xs">
              Alta joalheria com propósito. Semijoias premium Sabrina Joias em Boituva, SP.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="https://www.instagram.com/choixjoias/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                data-testid="link-footer-instagram"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a
                href="https://wa.me/5515997424047"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                data-testid="link-footer-whatsapp"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-foreground uppercase tracking-[0.2em] text-xs font-semibold mb-6">
              Navegação
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm font-light"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-foreground uppercase tracking-[0.2em] text-xs font-semibold mb-6">
              Contato
            </h4>
            <ul className="space-y-3 text-muted-foreground text-sm font-light">
              <li>
                <a
                  href="https://wa.me/5515997424047"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  +55 15 99742-4047
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@choixjoias.com"
                  className="hover:text-foreground transition-colors"
                >
                  contato@choixjoias.com
                </a>
              </li>
              <li className="leading-relaxed pt-2">
                dentro do salão Fio a Fio Professional<br />
                R. Zélia de Lima Rosa, 876<br />
                Portal dos Pássaros<br />
                Boituva — SP
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-xs uppercase tracking-widest font-light">
            &copy; {new Date().getFullYear()} Choix Joias. Todos os direitos reservados.
          </p>
          <a
            href="https://www.choixjoias.com"
            className="text-muted-foreground hover:text-foreground text-xs tracking-widest uppercase transition-colors"
          >
            www.choixjoias.com
          </a>
        </div>
      </div>
    </footer>
  );
}
