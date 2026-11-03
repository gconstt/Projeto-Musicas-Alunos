import { useState, useEffect } from "react";

export default function FeedbackSection() {
  const [comentarios, setComentarios] = useState([]);
  const [sugestoes, setSugestoes] = useState([]);
  
  const [nome, setNome] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [musicaSugestao, setMusicaSugestao] = useState("");
  const [artistaSugestao, setArtistaSugestao] = useState("");
  const [alunoDestino, setAlunoDestino] = useState("Gustavo");

  useEffect(() => {
    const comSalvos = JSON.parse(localStorage.getItem("site_comentarios")) || [];
    const sugSalvas = JSON.parse(localStorage.getItem("site_sugestoes")) || [];
    setComentarios(comSalvos);
    setSugestoes(sugSalvas);
  }, []);

  const handleEnviarFeedback = (e) => {
    e.preventDefault();
    if (!nome.trim() || !mensagem.trim()) return;

    const novo = { id: Date.now(), nome, mensagem, data: new Date().toLocaleDateString("pt-BR") };
    const atualizados = [novo, ...comentarios];
    setComentarios(atualizados);
    localStorage.setItem("site_comentarios", JSON.stringify(atualizados));
    setNome("");
    setMensagem("");
  };

  const handleEnviarSugestao = (e) => {
    e.preventDefault();
    if (!musicaSugestao.trim() || !artistaSugestao.trim()) return;

    const novaSug = { 
      id: Date.now(), 
      musica: musicaSugestao, 
      artista: artistaSugestao, 
      aluno: alunoDestino 
    };
    const atualizadas = [novaSug, ...sugestoes];
    setSugestoes(atualizadas);
    localStorage.setItem("site_sugestoes", JSON.stringify(atualizadas));
    setMusicaSugestao("");
    setArtistaSugestao("");
  };

  return (
    <div className="feedback-container fade-in">
      <h2>Central de Interação do Público</h2>
      <p className="subtext">Envie suas sugestões de músicas e deixe seu feedback sobre o projeto SESISENAI!</p>

      <div className="interactive-grid">
        {/* Formulário de Sugestão de Músicas */}
        <section className="card-box">
          <h3>💡 Recomende uma Música</h3>
          <form onSubmit={handleEnviarSugestao} className="interactive-form">
            <label>Para qual aluno?</label>
            <select value={alunoDestino} onChange={(e) => setAlunoDestino(e.target.value)}>
              <option value="Gustavo">Gustavo (Metal / Rock)</option>
              <option value="Felipe">Felipe (Pop / MPB / Love Metal)</option>
              <option value="Miguel R">Miguel R (Samba / City Pop / Rap)</option>
            </select>

            <input 
              type="text" 
              placeholder="Nome da Música" 
              value={musicaSugestao} 
              onChange={(e) => setMusicaSugestao(e.target.value)} 
              required 
            />
            <input 
              type="text" 
              placeholder="Artista / Banda" 
              value={artistaSugestao} 
              onChange={(e) => setArtistaSugestao(e.target.value)} 
              required 
            />
            <button type="submit" className="submit-btn">Enviar Sugestão</button>
          </form>

          <div className="suggestions-list">
            <h4>Sugestões recentes:</h4>
            {sugestoes.length === 0 ? <p className="empty">Nenhuma sugestão enviada ainda.</p> : (
              <ul>
                {sugestoes.slice(0, 5).map((s) => (
                  <li key={s.id}>
                    <strong>{s.musica}</strong> - {s.artista} <em>(Para {s.aluno})</em>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>

        {/* Formulário de Feedback/Comentários */}
        <section className="card-box">
          <h3>💬 Deixe um Feedback / Recado</h3>
          <form onSubmit={handleEnviarFeedback} className="interactive-form">
            <input 
              type="text" 
              placeholder="Seu Nome" 
              value={nome} 
              onChange={(e) => setNome(e.target.value)} 
              required 
            />
            <textarea 
              placeholder="Escreva sua opinião ou comentário..." 
              value={mensagem} 
              onChange={(e) => setMensagem(e.target.value)} 
              rows={3}
              required 
            />
            <button type="submit" className="submit-btn">Publicar Comentário</button>
          </form>

          <div className="comments-list">
            <h4>Comentários da Comunidade ({comentarios.length}):</h4>
            {comentarios.length === 0 ? <p className="empty">Seja o primeiro a comentar!</p> : (
              comentarios.slice(0, 5).map((c) => (
                <div key={c.id} className="comment-item">
                  <div className="comment-header">
                    <strong>{c.nome}</strong>
                    <small>{c.data}</small>
                  </div>
                  <p>{c.mensagem}</p>
                </div>
              ))
            )}
          </div>
        </section>
      </div>
    </div>
  );
}