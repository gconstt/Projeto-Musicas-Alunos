// ============================================================
//  DADOS DOS PERFIS  (edite aqui para mudar o conteúdo do site)
//
//  Campos de cada música:
//   titulo, artista, album, ano, gravadora, generos[]  -> aparecem na ficha
//   desc      -> descrição da música/álbum
//   opiniao   -> "Por que eu gosto" (só aparece se for preenchido)
//   link      -> link da música no Spotify (hoje é uma busca; troque pelo link direto)
//   capa      -> caminho da imagem, ex: "img/psychosocial.jpg" (vazio = usa public/img/<titulo>.jpg)
//   cor / corArtista / corDesc / capaCor -> cores do card
// ============================================================
const spotify = (q) => "https://open.spotify.com/search/" + encodeURIComponent(q);

export const REPO_URL = "https://github.com/gconstt/Projeto-Musicas-Alunos.git";

export const perfis = [
  {
    id: "gustavo",
    rota: "/",
    nome: "Gustavo",
    estilo: "Metal, nu metal e rock alternativo: guitarras pesadas e muita energia.",
    cor: "#ffc94d",
    musicas: [
      {
        titulo: "Psychosocial", artista: "Slipknot",
        album: "All Hope Is Gone", ano: 2008, gravadora: "Roadrunner Records",
        generos: ["Heavy metal", "Groove metal"],
        cor: "#ffc94d", corArtista: "#ffe08a", corDesc: "#ffc94d", capaCor: "#8a7a4a",
        capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRos9aii9V9LbltNVcAk5aiLQBD5biXPrmT_nROXTSNSQ&s=10  ", link: spotify("Psychosocial Slipknot"),
        desc: "All Hope Is Gone é o quarto álbum de estúdio da banda norte-americana de metal Slipknot, lançado em 26 de agosto de 2008 pela Roadrunner Records.",
        opiniao: "",
      },
      {
        titulo: "Blind", artista: "Korn",
        album: "Korn", ano: 1994, gravadora: "Immortal / Epic",
        generos: ["Nu metal"],
        cor: "#ff6ec7", corArtista: "#ff6ec7", corDesc: "#ff6ec7", capaCor: "#a33a3a",
        capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1wmdhWWUh-JrO8q2GNOo9OrW9n1acKRsa1ATy9X0QJQ&s=10", link: spotify("Blind Korn"),
        desc: "\"Blind\" é o primeiro single e a faixa de abertura do álbum de estreia homônimo da banda americana de nu metal Korn, lançado em agosto de 1994.",
        opiniao: "",
      },
      {
        titulo: "Helena", artista: "My Chemical Romance",
        album: "The Black Parade", ano: 2006, gravadora: "Roswell / Capitol Records",
        generos: ["Rock alternativo"],
        cor: "#7e1919ff", corArtista: "#ffffffff", corDesc: "#ffffffff", capaCor: "#ff0000ff",
        capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIrDJx5ZEjNWSHT8g4EvoN-zt-PZOEf6tb6Vx7li57-w&s=10", link: spotify("Helena My Chemical Romance"),
        desc: "The Black Parade é o terceiro álbum de estúdio da banda americana de rock alternativo My Chemical Romance, lançado em 20 de outubro de 2006 pelas gravadoras Roswell e Capitol Records.",
        opiniao: "",
      },
    ],
  },

  {
    id: "felipe",
    rota: "/felipe",
    nome: "Felipe",
    estilo: "Bedroom pop, MPB e Love Metal",
    cor: "#ff6ec7",
    musicas: [
      {
        titulo: "1Night", artista: "Cuco",
        album: "wannabewithu", ano: 2016, gravadora: "",
        generos: ["Bedroom pop", "Indie"],
        cor: "#ff6ec7", corArtista: "#ff6ec7", corDesc: "#ff6ec7", capaCor: "#c0398f",
        capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMTJO6FO0cc7MtbePJv9Qok_1jFO0zdeQ7fGSgQdSmog&s=10", link: spotify("1Night Cuco"),
        desc: "wannabewithu é o álbum de estreia (frequentemente chamado de mixtape) do cantor e compositor norte-americano Cuco (Omar Banos), lançado originalmente em 2016.",
        opiniao: "",
      },
      {
        titulo: "Fantasia", artista: "Chico Buarque",
        album: "Vida", ano: 1980, gravadora: "Philips Records",
        generos: ["MPB"],
        cor: "#9dff9d", corArtista: "#9dff9d", corDesc: "#b8f5b8", capaCor: "#a88b5a",
        capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6R5qA5Afe5l1c44kBqE8Keg6bocT9MUg-2i4_L_plfw&s=10", link: spotify("Fantasia Chico Buarque"),
        desc: "Vida (1980) é o décimo primeiro álbum de estúdio do cantor e compositor brasileiro Chico Buarque, lançado pela gravadora Philips Records. O disco marca uma fase de transição e maior maturidade existencialista na carreira do artista, aos 36 anos.",
        opiniao: "",
      },
      {
        titulo: "Join Me In Death", artista: "Him",
        album: "Razorblade Romance", ano: 1999, gravadora: "BMG / HMC",
        generos: ["Love metal", "Gothic rock"],
        cor: "#f875e2ff", corArtista: "#f865f8ff", corDesc: "#ff92f0ff", capaCor: "#8333e6ff",
        capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd_Hmf5S8hIR2x0BPtimxQ3BXoFKzCmK81w_LTrtYsCg&s=10", link: spotify("Join me in death Him"),
        desc: "é o single mais famoso da banda finlandesa de rock gótico HIM (His Infernal Majesty), lançada oficialmente em dezembro de 1999 no álbum Razorblade Romance.",
        opiniao: "",
      },
    ],
  },

  { 
    id: "miguel",
    rota: "/miguel",
    nome: "Miguel R",
    estilo: "Samba, city pop e rap emo: do ritmo brasileiro clássico ao som noturno e melancólico.",
    cor: "#9db8ff",
    musicas: [
      {
        titulo: "Chove Chuva", artista: "Jorge Ben Jor",
        album: "Samba Esquema Novo", ano: 1963, gravadora: "Philips",
        generos: ["Samba", "MPB"],
        cor: "#e8d59a", corArtista: "#e8d59a", corDesc: "#e0b24d", capaCor: "#b5623a",
        capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZhFAk1kcnzPQABSyLKBkVWdvcSkMj34ftUR6JNAcmRw&s=10", link: spotify("Chove Chuva Jorge Ben Jor"),
        desc: "A música fala sobre amor e o medo de perder a pessoa amada. Tem um ritmo animado, misturando samba e MPB, e transmite sentimentos de carinho e paixão. 🤍🎶",
        opiniao: "",
      },
      {
        titulo: "Fly-day Chinatown", artista: "Yasuha",
        album: "Flapper", ano: 1981, gravadora: "",
        generos: ["City pop"],
        cor: "#9db8ff", corArtista: "#9db8ff", corDesc: "#8fb0ff", capaCor: "#4a4a7a",
        capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDd7Zh9S6mwwu7eQoJ5NnhHKqtoiAoti574mtMbrQwkg&s=10", link: spotify("Fly-day Chinatown Yasuha"),
        desc: "A música tem um ritmo animado e retrô, transmitindo a sensação de diversão e liberdade na vida noturna da cidade. 🌃🎶",
        opiniao: "",
      },
      {
        titulo: "nuts", artista: "Lil Peep",
        album: "", ano: "", gravadora: "",
        generos: ["Emo rap", "Cloud rap"],
        cor: "#ff8fa3", corArtista: "#ffb3c1", corDesc: "#ff8fa3", capaCor: "#5a3a3a",
        capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWpZndfb6jpqYBO42sX9lPy5EBq6sXeXWa2cGSGlF1qg&s=10", link: spotify("nuts Lil Peep"),
        desc: "A música tem uma melodia marcante e uma vibe própria. Para descrever melhor seu significado, preciso saber o artista principal. 🎧💗",
        opiniao: "",
      },
    ],
  },
];
