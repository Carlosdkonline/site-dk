import { useParams, Link } from "react-router-dom"; // Importa Link
import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react"; // Importa ChevronLeft

const espetaculos = [
  {
    id: 1,
    titulo: "Matilda",
    descricao: "Espetáculo baseado na clássica história de Roald Dahl, repleto de magia e superação.",
    imagem: "/espetaculo-1.jpg",
    videoUrl: "https://www.youtube.com/embed/H4GW5B5_2zs",
    patrocinadores: [
      "/patrocinador-matilda-1.png",
      "/patrocinador-matilda-2.png",
      "/patrocinador-matilda-3.png"
    ]
  },
  {
    id: 2,
    titulo: "Moulin Rouge",
    descricao: "A energia vibrante do cabaré mais famoso do mundo em um espetáculo inesquecível.",
    imagem: "/espetaculo-2.jpg",
    videoUrl: "https://www.youtube.com/embed/H4GW5B5_2zs",
    patrocinadores: [
      "/patrocinador-moulin-1.png",
      "/patrocinador-moulin-2.png",
      "/patrocinador-moulin-3.png"
    ]
  },
  {
    id: 3,
    titulo: "O Grande Show",
    descricao: "Uma celebração da diversidade e da arte circense.",
    imagem: "/espetaculo-3.jpg",
    videoUrl: "https://www.youtube.com/embed/H4GW5B5_2zs",
    patrocinadores: []
  },
  {
    id: 4,
    titulo: "Harry Potter",
    descricao: "A magia de Hogwarts ganha vida em um espetáculo de dança surpreendente.",
    imagem: "/espetaculo-4.jpg",
    videoUrl: "https://www.youtube.com/embed/H4GW5B5_2zs",
    patrocinadores: []
  },
  {
    id: 5,
    titulo: "Imortal",
    descricao: "O espetáculo que celebra os 5 anos do DK Studio em grande estilo!",
    imagem: "/espetaculo-5.jpg",
    videoUrl: "https://www.youtube.com/embed/H4GW5B5_2zs",
    patrocinadores: [
      "/patrocinador-imortal-1.png",
      "/patrocinador-imortal-2.png"
    ]
  }
];

export default function EspetaculoPage() {
  const { id } = useParams();
  const show = espetaculos.find((s) => s.id === Number(id));

  if (!show) {
    return <div className="text-white text-center mt-20">Espetáculo não encontrado.</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-950 to-black text-white">

      {/* Botão Voltar minimalista */}
      <Link
        to="/"
        className="fixed top-6 left-6 bg-white/10 hover:bg-white/20 text-blue-400 hover:text-blue-500 p-2 rounded-full backdrop-blur-sm transition-all duration-300 z-30"
      >
        <ChevronLeft className="w-5 h-5" />
      </Link>

      {/* Banner do Espetáculo com Título + Descrição */}
      <div className="relative w-full h-[500px] flex items-center justify-center text-center px-4">
        {/* Imagem de fundo */}
        <img src={show.imagem} alt={show.titulo} className="absolute inset-0 w-full h-full object-cover" />
        {/* Sobreposição escura */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Título + Descrição */}
        <div className="relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: -30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }} 
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            {show.titulo}
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.3 }} 
            className="text-gray-300 max-w-2xl mx-auto"
          >
            {show.descricao}
          </motion.p>
        </div>
      </div>

      {/* Conteúdo */}
      <div className="p-6 md:p-20 text-center">

        {/* Vídeo */}
        <div className="flex justify-center mb-10">
          <iframe
            width="100%"
            height="400"
            src={show.videoUrl}
            title={show.titulo}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-2xl max-w-4xl"
          ></iframe>
        </div>

        {/* Patrocinadores animados */}
        {show.patrocinadores && show.patrocinadores.length > 0 && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1 }} 
            className="flex flex-col items-center mt-16"
          >
            {/* Linha azul e título */}
            <div className="flex flex-col items-center mb-8">
              <div className="h-1 w-24 bg-blue-500 mb-4 rounded-full"></div>
              <p className="text-gray-300 uppercase tracking-widest text-sm">Patrocinadores</p>
            </div>

            {/* Logos dos patrocinadores */}
            <div className="flex gap-6 flex-wrap justify-center">
              {show.patrocinadores.map((logo, index) => (
                <motion.div
                  key={index}
                  className="bg-white/5 p-4 rounded-xl flex items-center justify-center h-28 w-44 transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_15px_#3b82f6]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <img
                    src={logo}
                    alt={`Patrocinador ${index + 1}`}
                    className="h-16 object-contain"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
