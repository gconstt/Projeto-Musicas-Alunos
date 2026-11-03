import { useState, useEffect } from "react";
import Cover from "./Cover.jsx";

export default function SongCard({ musica, indice }) {
  const [likes, setLikes] = useState(0);
  const [userRating, setUserRating] = useState(0);

  useEffect(() => {
    const savedLikes = localStorage.getItem(`likes_${musica.id}`) || 0;
    const savedRating = localStorage.getItem(`rating_${musica.id}`) || 0;
    setLikes(Number(savedLikes));
    setUserRating(Number(savedRating));
  }, [musica.id]);

  const handleLike = () => {
    const newLikes = likes + 1;
    setLikes(newLikes);
    localStorage.setItem(`likes_${musica.id}`, newLikes);
  };

  const handleRate = (stars) => {
    setUserRating(stars);
    localStorage.setItem(`rating_${musica.id}`, stars);
  };

  return (
    <article className="song fade-in" style={{ animationDelay: `${indice * 0.1}s` }}>
      <span className="song-number">FAIXA {String(indice + 1).padStart(2, "0")}</span>

      <a href={musica.link} target="_blank" rel="noopener noreferrer" title="Abrir no Spotify">
        <Cover musica={musica} />
      </a>

      <div className="song-names">
        <a href={musica.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
          <span className="song-title" style={{ color: musica.cor }}>{musica.titulo}</span>
        </a>
        <span className="song-artist" style={{ color: musica.corArtista }}>{musica.artista}</span>
      </div>

      <div className="song-tags">
        {musica.generos.map((g) => (
          <span key={g} className="tag" style={{ color: musica.cor, borderColor: musica.cor }}>{g}</span>
        ))}
      </div>

      <dl className="meta">
        {musica.album && <><dt>Álbum</dt><dd>{musica.album}</dd></>}
        {musica.ano && <><dt>Ano</dt><dd>{musica.ano}</dd></>}
        {musica.gravadora && <><dt>Gravadora</dt><dd>{musica.gravadora}</dd></>}
      </dl>

      <p className="song-desc" style={{ color: musica.corDesc }}>{musica.desc}</p>

      {/* Interatividade: Avaliação por estrelas */}
      <div className="rating-area">
        <span>Sua Nota: </span>
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            className={`star-btn ${star <= userRating ? "active" : ""}`}
            onClick={() => handleRate(star)}
            title={`Avaliar com ${star} estrelas`}
          >
            ★
          </button>
        ))}
      </div>

      {/* Interatividade: Botão de Curtir */}
      <div className="interactive-actions">
        <button className="like-btn" onClick={handleLike}>
          ❤️ {likes} Curtidas
        </button>
        <a className="listen" href={musica.link} target="_blank" rel="noopener noreferrer">
          ▶ Spotify
        </a>
      </div>
    </article>
  );
}