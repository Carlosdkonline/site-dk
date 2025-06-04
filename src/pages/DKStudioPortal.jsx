import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowUp } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function DKStudioPortal() {
  const scrollEspetaculosRef = useRef(null);
  const scrollNoticiasRef = useRef(null);
  const scrollEquipeRef = useRef(null);
  const [activeSection, setActiveSection] = useState("");
  const [showTopButton, setShowTopButton] = useState(false);
  const navigate = useNavigate();

  const noticias = [
    { id: 1, titulo: "Ritual de 5 anos", descricao: "O DK Studio revive sua história no espetáculo Imortal!", imagem: "/noticia-1.jpg" },
  ];

  const espetaculos = [
    {
      id: 1,
      titulo: "Matilda",
      descricao: "Espetáculo baseado na clássica história de Roald Dahl, repleto de magia e superação.",
      imagem: "/espetaculo-1.jpg",
      videoUrl: "https://www.youtube.com/embed/H4GW5B5_2zs"
    },
    {
      id: 2,
      titulo: "Moulin Rouge",
      descricao: "A energia vibrante do cabaré mais famoso do mundo em um espetáculo inesquecível.",
      imagem: "/espetaculo-2.jpg",
      videoUrl: "https://www.youtube.com/embed/H4GW5B5_2zs"
    },
    {
      id: 3,
      titulo: "O Grande Show",
      descricao: "Uma celebração da diversidade e da arte circense.",
      imagem: "/espetaculo-3.jpg",
      videoUrl: "https://www.youtube.com/embed/H4GW5B5_2zs"
    },
    {
      id: 4,
      titulo: "Harry Potter",
      descricao: "A magia de Hogwarts ganha vida em um espetáculo de dança surpreendente.",
      imagem: "/espetaculo-4.jpg",
      videoUrl: "https://www.youtube.com/embed/H4GW5B5_2zs"
    },
    {
      id: 5,
      titulo: "Imortal",
      descricao: "O espetáculo que celebra os 5 anos do DK Studio em grande estilo!",
      imagem: "/espetaculo-5.jpg",
      videoUrl: "https://www.youtube.com/embed/H4GW5B5_2zs"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["quem-somos", "noticias", "espetaculos", "equipe"];
      const offsets = sections.map((id) => {
        const el = document.getElementById(id);
        return el ? { id, offset: el.offsetTop } : null;
      }).filter(Boolean);

      const scrollY = window.scrollY + 200;
      const current = offsets.reduce((acc, section) => {
        return scrollY >= section.offset ? section.id : acc;
      }, "");

      setActiveSection(current);
      setShowTopButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollLeft = (ref) => {
    ref.current.scrollBy({ left: -400, behavior: "smooth" });
  };

  const scrollRight = (ref) => {
    ref.current.scrollBy({ left: 400, behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-950 to-black text-white font-sans scroll-smooth">
      {/* Header Menu */}
      <header className="fixed top-0 left-0 w-full z-20 bg-black/70 backdrop-blur-md flex items-center justify-between px-4 md:px-8 py-4 uppercase font-bold">
        <div className="text-lg md:text-xl">DK STUDIO</div>
        <nav className="flex gap-4 md:gap-8 text-xs md:text-base">
          <a href="#quem-somos" className={`hover:text-blue-400 transition ${activeSection === "quem-somos" ? "text-blue-400" : ""}`}>QUEM SOMOS</a>
          <a href="#noticias" className={`hover:text-blue-400 transition ${activeSection === "noticias" ? "text-blue-400" : ""}`}>DK NEWS</a>
          <a href="#espetaculos" className={`hover:text-blue-400 transition ${activeSection === "espetaculos" ? "text-blue-400" : ""}`}>ESPETÁCULOS</a>
          <a href="#equipe" className={`hover:text-blue-400 transition ${activeSection === "equipe" ? "text-blue-400" : ""}`}>EQUIPE</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center pt-16">
        <div className="absolute inset-0">
          <img src="/background-dancer.jpg" alt="DK Studio Background" className="w-full h-full object-cover opacity-80" />
        </div>
        {/* Sobreposição preta semi-transparente */}
  <div className="absolute inset-0 bg-black/50"></div> {/* <<<<<<<<<<<<<< ESTA LINHA CRIA O FILTRO ESCURO */}
        <motion.h1 initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-5xl md:text-6xl font-extrabold text-center z-10">
        ESSÊNCIA QUE SURPREENDE E SERVE.
        </motion.h1>
      </section>

      {/* Quem Somos */}
      <section id="quem-somos" className="relative py-24 px-6 md:px-20 bg-cover bg-center" style={{ backgroundImage: 'url(/urban-texture.jpg)' }}>
        <div className="absolute inset-0 bg-black/60"></div>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">QUEM SOMOS</h2>
          <p className="text-lg text-gray-300">Somos o DK Studio, uma escola de dança onde ser diferente é nossa essência. Criamos experiências que surpreendem, inspiram  e criam  marcas. Aqui, cada movimento é um convite para viver algo único.</p>
          <motion.button whileHover={{ scale: 1.05 }} className="mt-8 px-6 py-3 bg-blue-600 rounded-full font-semibold text-white hover:bg-blue-700 transition">
            FALE CONOSCO
          </motion.button>
        </motion.div>
      </section>

      {/* Notícias */}
      <section id="noticias" className="py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold mb-8">DK NEWS</h2>
        <div className="relative">
          <button onClick={() => scrollLeft(scrollNoticiasRef)} className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 p-2 rounded-full hover:bg-white/40">
            <ChevronLeft />
          </button>
          <div ref={scrollNoticiasRef} className="flex gap-6 overflow-x-auto no-scrollbar pb-4">
            {noticias.map((noticia) => (
              <div
                key={noticia.id}
                onClick={() => navigate(`/noticia/${noticia.id}`)}
                className="cursor-pointer bg-white/5 p-6 rounded-2xl min-w-[250px] md:min-w-[300px] flex-shrink-0 hover:scale-105 transition-transform"
              >
                <img src={noticia.imagem} alt={noticia.titulo} className="w-full h-32 object-cover rounded-lg mb-4" />
                <p className="text-sm text-gray-400 mb-2">{new Date().toLocaleDateString()}</p>
                <h3 className="text-xl font-semibold mb-2">{noticia.titulo}</h3>
                <p className="text-gray-300">{noticia.descricao}</p>
              </div>
            ))}
          </div>
          <button onClick={() => scrollRight(scrollNoticiasRef)} className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 p-2 rounded-full hover:bg-white/40">
            <ChevronRight />
          </button>
        </div>
      </section>

      {/* Espetáculos */}
      <section id="espetaculos" className="py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold mb-8">ESPETÁCULOS</h2>
        <div className="relative">
          <button onClick={() => scrollLeft(scrollEspetaculosRef)} className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 p-2 rounded-full hover:bg-white/40">
            <ChevronLeft />
          </button>
          <div ref={scrollEspetaculosRef} className="flex gap-6 overflow-x-auto no-scrollbar pb-4">
            {espetaculos.map((show) => (
              <div
                key={show.id}
                onClick={() => navigate(`/espetaculo/${show.id}`)}
                className="relative min-w-[350px] md:min-w-[400px] h-[300px] flex-shrink-0 rounded-2xl overflow-hidden hover:scale-105 transition-transform cursor-pointer"
              >
                <img src={show.imagem} alt={show.titulo} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <h3 className="text-2xl font-bold uppercase">{show.titulo}</h3>
                </div>
              </div>
            ))}
          </div>
          <button onClick={() => scrollRight(scrollEspetaculosRef)} className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 p-2 rounded-full hover:bg-white/40">
            <ChevronRight />
          </button>
        </div>
      </section>

      {/* Equipe */}
      <section id="equipe" className="py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold mb-8">EQUIPE</h2>
        <div className="relative">
          <button onClick={() => scrollLeft(scrollEquipeRef)} className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 p-2 rounded-full hover:bg-white/40">
            <ChevronLeft />
          </button>
          <div ref={scrollEquipeRef} className="flex gap-6 overflow-x-auto no-scrollbar pb-4">
            {Array.from({ length: 13 }, (_, i) => i + 1).map((i) => (
              <div key={i} className="bg-white/5 rounded-2xl overflow-hidden min-w-[180px] md:min-w-[200px] h-[300px] flex flex-col flex-shrink-0 hover:scale-105 transition-transform">
                <img src={`/membro${i}.JPG`} alt={`Membro ${i}`} className="w-full h-[65%] object-cover" />
                <div className="flex flex-col justify-center items-center px-4 py-2">
                  <h4 className="text-md font-semibold">NOME {i}</h4>
                  <p className="text-xs text-gray-400">CARGO {i}</p>
                </div>
              </div>
            ))}
          </div>
          <button onClick={() => scrollRight(scrollEquipeRef)} className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 p-2 rounded-full hover:bg-white/40">
            <ChevronRight />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/80 text-gray-400 py-6 px-6 md:px-20 flex flex-col md:flex-row items-center justify-center gap-6 text-center text-xs mt-20">
  
  {/* Logo */}
  <div className="flex items-center gap-2">
    <img src="/logo-dk.png" alt="DK Studio" className="h-8" /> {/* Ajuste o caminho da logo */}
  </div>

  {/* Divider */}
  <div className="hidden md:block w-px h-6 bg-gray-500"></div>

  {/* Contato WhatsApp */}
  <div className="flex items-center gap-1">
    <span>WhatsApp:</span>
    <a
      href="https://wa.me/553192865507"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-400 hover:text-blue-500 font-semibold"
    >
      (31) 9286-5507
    </a>
  </div>

  {/* Divider */}
  <div className="hidden md:block w-px h-6 bg-gray-500"></div>

  {/* Instagram */}
  <div className="flex items-center gap-1">
    <span>Instagram:</span>
    <a
      href="https://www.instagram.com/dkstud.io/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-400 hover:text-blue-500 font-semibold"
    >
      @dkstud.io
    </a>
  </div>

  {/* Divider */}
  <div className="hidden md:block w-px h-6 bg-gray-500"></div>

  {/* Endereço */}
  <div className="flex items-center text-center md:text-left">
    Avenida Professor Cristovam Dos Santos, 43A - Bairro Belvedere - BH/MG
  </div>
</footer>

      {/* Botão Voltar ao Topo */}
      {showTopButton && (
        <button onClick={scrollToTop} className="fixed bottom-6 right-6 p-3 rounded-full bg-blue-600 hover:bg-blue-700 transition z-30">
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}
