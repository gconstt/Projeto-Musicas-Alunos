import React, { useState, useRef, useEffect } from 'react';

export default function MusicPreviewButton({ audioUrl }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // Limpa o áudio se a URL mudar ou se o componente for removido da tela
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [audioUrl]);

  const handleTogglePlay = () => {
    if (!audioUrl) {
      alert("Prévia de áudio indisponível.");
      return;
    }

    if (!audioRef.current) {
      audioRef.current = new Audio(audioUrl);
      audioRef.current.onended = () => setIsPlaying(false);
    }

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().catch((err) => {
        console.error("Erro ao reproduzir o áudio:", err);
      });
      setIsPlaying(true);
    }
  };

  return (
    <button 
      onClick={handleTogglePlay}
      style={{
        padding: '8px 16px',
        borderRadius: '20px',
        border: 'none',
        backgroundColor: isPlaying ? '#e74c3c' : '#1db954',
        color: '#ffffff',
        fontWeight: 'bold',
        cursor: 'pointer',
        transition: 'background-color 0.2s'
      }}
    >
      {isPlaying ? '⏸ Pausar' : '▶ Prévia'}
    </button>
  );
}

  