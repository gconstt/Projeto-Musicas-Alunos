import { useState, useEffect, useRef } from "react";
import Cover from "./Cover.jsx";

export default function SongCard({ musica, indice }) {
  const [likes, setLikes] = useState(0);
  const [userRating, setUserRating] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const savedLikes = localStorage.getItem(`likes_${musica.id}`) || 0;
    const savedRating = localStorage.getItem(`rating_${musica.id}`) || 0;
    setLikes(Number(savedLikes));
    setUserRating(Number(savedRating));
  }, [musica.id]);

  // Limpa o áudio ao trocar de música ou desmontar o componente
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [musica.previewUrl]);

  const handleLike = () => {
    const newLikes = likes + 1;
    setLikes(newLikes);
    localStorage.setItem(`likes_${musica.id}`, newLikes);
  };

  const handleRate = (stars) => {
    setUserRating(stars);
    localStorage.setItem(`rating_${musica.id}`, stars);
  };

  const handleTogglePlay = () => {
    if (!musica.previewUrl) {
      alert("Prévia indisponível para esta música.");
      return;
    }

    if (!audioRef.current) {
      audioRef.current = new Audio(musica.previewUrl);
      audioRef.current.onended = () => setIsPlaying(false);
    }

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().catch((error) => {
        console.error("Erro ao tocar a prévia:", error);
      });
      setIsPlaying(true);
    }
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
        {musica.generos?.map((g) => (
          <span key={g} className="tag" style={{ color: musica.cor, borderColor: musica.cor }}>{g}</span>
        ))}
      </div>

      <dl className="meta">
        {musica.album && <><dt>Álbum</dt><dd>{musica.album}</dd></>}
        {musica.ano && <><dt>Ano</dt><dd>{musica.ano}</dd></>}
        {musica.gravadora && <><dt>Gravadora</dt><dd>{musica.gravadora}</dd></>}
      </dl>

      {musica.desc && <p className="song-desc" style={{ color: musica.corDesc }}>{musica.desc}</p>}

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

      {/* Interatividade: Ações e Botões */}
      <div className="interactive-actions">
        <button className="like-btn" onClick={handleLike}>
          ❤️ {likes} Curtidas
        </button>

        {/* Botão de Prévia de Áudio Local */}
        {musica.previewUrl && (
          <button className="listen" onClick={handleTogglePlay}>
            {isPlaying ? '⏸ Pausar' : '▶ Ouvir Prévia'}
          </button>
        )}

        {musica.link && (
          <a className="listen" href={musica.link} target="_blank" rel="noopener noreferrer">
            ▶ Spotify
          </a>
        )}
      </div>
    </article>
  );
}