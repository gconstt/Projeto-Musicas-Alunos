import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { perfis } from "./data/perfis.js";
import Sticker from "./components/Sticker.jsx";
import Tabs from "./components/Tabs.jsx";
import Hero from "./components/Hero.jsx";
import SongCard from "./components/SongCard.jsx";
import Pager from "./components/Pager.jsx";
import Footer from "./components/Footer.jsx";

// Uma página de perfil. O "key" no <main> reinicia a animação ao trocar de perfil.
function PaginaPerfil({ indice }) {
  const perfil = perfis[indice];
  
  useEffect(() => {
    document.title = `SESISENAI - Perfil ${indice + 1} · ${perfil.nome}`;
    window.scrollTo(0, 0);
  }, [indice, perfil.nome]);

  return (
    <div className="app" style={{ "--accent": perfil.cor }}>

      <div className="site">
        <header className="topbar">
          <span className="brand">SESISENAI</span>
          <span className="subtitle">Estilos de músicas variadas de três alunos</span>
        </header>

      <Sticker />
        <main className="content" key={perfil.id}>
          <Tabs />  
          <Hero perfil={perfil} numero={indice + 1} total={perfis.length} />

          <h2 className="section-title">Músicas favoritas</h2>
          <section className="songs">
            {perfil.musicas.map((m, i) => (
              <SongCard key={m.titulo} musica={m} indice={i} />
            ))}
          </section>

          <Pager anterior={perfis[indice - 1]} proximo={perfis[indice + 1]} />
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      {perfis.map((p, i) => (
        <Route key={p.id} path={p.rota} element={<PaginaPerfil indice={i} />} />
      ))}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}