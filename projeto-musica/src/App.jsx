import { useEffect } from "react";
import { Routes, Route, Navigate, Link, useLocation } from "react-router-dom";
import { perfis } from "./data/perfis.js";
import Sticker from "./components/Sticker.jsx";
import Hero from "./components/Hero.jsx";
import SongCard from "./components/SongCard.jsx";
import Pager from "./components/Pager.jsx";
import Footer from "./components/Footer.jsx";
import FeedbackSection from "./components/FeedbackSection.jsx";

function PaginaPerfil({ indice }) {
  const perfil = perfis[indice];

  useEffect(() => {
    document.title = `SESISENAI - Perfil ${indice + 1} · ${perfil.nome}`;
    window.scrollTo(0, 0);
  }, [indice, perfil.nome]);

  return (
    <div className="app" style={{ "--accent": perfil.cor }}>
      <div className="site">
        <Sticker />
        <main className="content" key={perfil.id}>
          <Hero perfil={perfil} numero={indice + 1} total={perfis.length} />

          <h2 className="section-title">Músicas Favoritas</h2>

          <section className="songs">
            {perfil.musicas.map((m, i) => (
              <SongCard key={m.id || m.titulo} musica={m} indice={i} />
            ))}
          </section>

          <Pager anterior={perfis[indice - 1]} proximo={perfis[indice + 1]} />
        </main>
      </div>
    </div>
  );
}

export default function App() {
  const location = useLocation();

  return (
    <div className="site-wrapper">
      <header className="topbar">
        <span className="brand">SESISENAI</span>
        <nav className="nav-links">
          {perfis.map((p) => (
            <Link
              key={p.id}
              to={p.rota}
              className={`nav-item ${location.pathname === p.rota ? "active" : ""}`}
            >
              {p.nome}
            </Link>
          ))}
          <Link
            to="/interativo"
            className={`nav-item highlight ${location.pathname === "/interativo" ? "active" : ""}`}
          >
            💬 Sugestões & Feedback
          </Link>
        </nav>
      </header>

      <Routes>
        {perfis.map((p, i) => (
          <Route key={p.id} path={p.rota} element={<PaginaPerfil indice={i} />} />
        ))}
        <Route path="/interativo" element={<FeedbackSection />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <Footer />
    </div>
  );
}