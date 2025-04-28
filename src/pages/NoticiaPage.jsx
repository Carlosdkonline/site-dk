import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const noticias = [
  {
    id: 1,
    titulo: "🎉 Ritual de 5 anos: O DK Studio revive sua história no espetáculo Imortal!",
    html: `
      <p>O DK Studio inicia em 2025 um novo capítulo em sua trajetória: o <strong>Ritual de 5 anos</strong>.</p>

      <p>A cada cinco anos, reviveremos um grande momento da nossa história, remontando um dos espetáculos que marcaram a nossa jornada.</p>

      <p>Para inaugurar este ritual tão especial, não poderíamos escolher outro: voltamos às origens para celebrar <strong>"Imortal"</strong>, o espetáculo que homenageou o eterno Rei do Pop, <strong>Michael Jackson</strong>.</p>

      <p><strong>"Imortal"</strong> foi o primeiro grande festival do DK Studio — uma produção que não só emocionou, mas também firmou a nossa essência: ser diferente, surpreender e servir através da arte.</p>

      <p>Agora, em 2025, vamos reviver essa energia única, trazendo uma nova interpretação, novos talentos e a mesma paixão que nos move desde o começo.</p>

      <p>Para tornar este momento ainda mais inesquecível, teremos a participação especial de <strong>Ricardo Walker</strong>, o maior cover de Michael Jackson no YouTube.</p>

      <p><a href="https://www.youtube.com/@RicardoWalker" target="_blank" style="text-decoration: underline; color: #60a5fa;">Clique aqui e conheça o canal de Ricardo Walker</a> para já entrar no clima!</p>

      <p>Este grande evento conta também com o apoio de patrocinadores que acreditam na força da arte e da educação: o <strong>Grupo Fictor</strong> e o <strong>Colégio Santo Agostinho</strong> como patrocinadores oficiais, e o <strong>escritório Lacerda Diniz Machado</strong> como apoiador.</p>

      <p>Este ritual não é apenas uma apresentação.</p>

      <p>É um momento de <strong>honrar quem fomos, celebrar quem somos e inspirar quem ainda vamos nos tornar</strong>.</p>

      <p>Convidamos todos os nossos alunos, familiares e amigos a fazerem parte dessa história — vivendo e revivendo conosco cada passo, cada batida e cada emoção que o DK Studio construiu com tanto amor.</p>

      <p><strong>Preparem-se: "Imortal" está de volta!</strong></p>

      <p><strong>E dessa vez, ainda mais grandioso.</strong></p>
    `,
    imagem: "/noticia-1.jpg"
  },
];


export default function NoticiaPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const noticia = noticias.find((n) => n.id === Number(id));

  if (!noticia) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-950 to-black text-white flex flex-col items-center justify-center p-8">
        <h1 className="text-3xl font-bold mb-4">Notícia não encontrada</h1>
        <button
          onClick={() => navigate("/")}
          className="mt-4 px-6 py-3 bg-blue-600 rounded-full font-semibold hover:bg-blue-700 transition"
        >
          Voltar para o Início
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-950 to-black text-white font-sans">
      <div className="relative h-64 md:h-96 w-full">
        <img src={noticia.imagem} alt={noticia.titulo} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40 flex items-center px-6 md:px-20">
          <h1 className="text-3xl md:text-5xl font-bold">{noticia.titulo}</h1>
        </div>
      </div>

      <div className="py-12 px-6 md:px-20 max-w-4xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 mb-8 text-blue-400 hover:text-blue-500"
        >
          <ArrowLeft size={20} /> Voltar
        </button>

        <p className="text-sm text-gray-400 mb-4">Publicado em {new Date().toLocaleDateString()}</p>

        <div className="text-lg text-gray-300 space-y-6">
          {noticia.html ? (
            <div dangerouslySetInnerHTML={{ __html: noticia.html }} />
          ) : (
            <p>{noticia.descricao}</p>
          )}
        </div>
      </div>
    </div>
  );
}
