// Catálogo centralizado: nome normalizado, preço, imagem e descrição
const catalogoJogos = [
  {
    nome: "God of War",
    preco: "R$ 199,90",
    imagem: "imagens/gow-ps5.png",
    descricao: "Ao contrário dos jogos anteriores, que eram vagamente baseados na mitologia grega, este título é vagamente baseado na mitologia nórdica. Uma aventura épica com Kratos e seu filho Atreus.",
    aliases: ["gow", "god of war ragnarok", "ragnarok"],
  },
  {
    nome: "Uncharted 4",
    preco: "R$ 79,90",
    imagem: "imagens/uncharted-ps5.jpg",
    descricao: "Os jogadores usam armas de fogo, combate corpo a corpo e furtividade a fim de combaterem inimigos e solucionarem quebra-cabeças. A última aventura de Nathan Drake.",
    aliases: ["uncharted", "nathan drake", "uncharted four"],
  },
  {
    nome: "Ghost of Tsushima",
    preco: "R$ 215,00",
    imagem: "imagens/ghost-ps5.jpg",
    descricao: "A história gira em torno de Jin Sakai, o último samurai na Ilha de Tsushima durante a primeira invasão Mongol no Japão. Um mundo aberto deslumbrante no Japão feudal.",
    aliases: [
      "ghost of tsushima directors cut",
      "directors cut",
      "tsushima",
      "got",
    ],
  },
  {
    nome: "Halo",
    preco: "R$ 69,90",
    imagem: "imagens/halo-xbox.jpg",
    descricao: "A trama da série dos jogos gira em torno de uma guerra interestelar entre a humanidade e uma aliança teocrática alienígena conhecida como Covenant. Ação sci-fi épica.",
    aliases: ["halo infinite", "master chief"],
  },
  {
    nome: "Forza Horizon 5",
    preco: "R$ 89,90",
    imagem: "imagens/forza-xbox.jpg",
    descricao: "Forza Horizon 5 é um jogo eletrônico de corrida ambientado em um ambiente de mundo aberto sediado no México. O jogo tem o maior mapa de toda a série.",
    aliases: ["forza", "forza motorsport", "fh5"],
  },
  {
    nome: "Gears of War Ultimate",
    preco: "R$ 59,90",
    imagem: "imagens/gears5-xbox.jpg",
    descricao: "A série foca no conflito entre a humanidade, os reptilianos humanoides subterrâneos conhecidos como Locust Horde, e os seus homólogos modificados. Ação intensa e cooperativa.",
    aliases: ["gears 5", "gears of war 5", "gears"],
  },
  {
    nome: "The Witcher 3",
    preco: "R$ 79,90",
    imagem: "imagens/witcher3-ps5.jpg",
    descricao: "Ambientado em um gigantesco cenário medieval que dá liberdade total ao jogador, o game possui uma jogabilidade não linear. RPG épico com Geralt de Rivia.",
    aliases: [
      "the witcher 3 complete edition",
      "witcher 3",
      "tw3",
      "wild hunt",
    ],
  },
  {
    nome: "Sekiro: Shadows Die Twice",
    preco: "R$ 250,00",
    imagem: "imagens/dmc5-ps5.jpg", // Usando imagem temporária
    descricao: "A jogabilidade é focada em furtividade, exploração e combate, com ênfase especial em batalhas contra chefes. O jogo segue um shinobi no Japão do período Sengoku.",
    aliases: ["sekiro", "shadows die twice"],
  },
  {
    nome: "Assassin's Creed Shadows",
    preco: "R$ 299,90",
    imagem: "imagens/ac-shad-ps5.jpg",
    descricao: "Usando uma história alternativa, em Valhalla o jogador controla Eivor, um guerreiro Viking durante as Invasões da Grã Bretanha no século IX. Aventura viking épica.",
    aliases: [
      "assassins creed shadows",
      "assassin creed shadows",
      "ac shadows",
      "shadows",
      "assassins creed",
      "assassin's creed",
      "ac",
      "assasin",
      "asasin",
    ],
  },
  {
    nome: "Cyberpunk 2077",
    preco: "R$ 319,90",
    imagem: "imagens/cyber-ps5.jpg",
    descricao: "RPG de ação em mundo aberto ambientado na megalópole de Night City. Personalize seu personagem e explore um futuro sombrio cheio de possibilidades.",
    aliases: ["cyberpunk 2077 ultimate", "cyberpunk", "cp2077", "cp 2077"],
  },
  {
    nome: "The Last of Us 2",
    preco: "R$ 199,90",
    imagem: "imagens/tlou-2-ps5.jpg",
    descricao: "Aventura de sobrevivência pós-apocalíptica que segue Joel e Ellie em um mundo devastado por uma pandemia. História emocionante e gameplay intenso.",
    aliases: ["the last of us remastered", "tlou"],
  },
  {
    nome: "Grand Theft Auto V",
    preco: "R$ 49,90",
    imagem: "imagens/gta5-xbox.jpg",
    descricao: "Grand Theft Auto V é um jogo de ação em mundo aberto ambientado em Los Santos e arredores. Controle Michael, Franklin e Trevor em uma história repleta de assaltos e perseguições.",
    aliases: ["gta", "gta 5", "gta5", "gta v", "gtav", "grand theft auto 5"],
  },
  {
    nome: "EA Sports FC 25",
    preco: "R$ 349,90",
    imagem: "imagens/fc25-ps5.jpg",
    descricao: "O mais recente jogo de futebol da EA Sports, com gráficos aprimorados, novas mecânicas de jogo e todas as principais ligas e times do mundo.",
    aliases: ["fc 25", "ea fc 25", "ea sports fc", "fifa 25", "fifa"],
  },
  {
    nome: "Madden NFL 25",
    preco: "R$ 349,90",
    imagem: "imagens/madden25-ps5.jpg",
    descricao: "O simulador oficial da NFL com gráficos de próxima geração, física realista e todas as equipes e jogadores da temporada atual.",
    aliases: ["madden 25", "nfl 25"],
  },
  {
    nome: "Devil May Cry 5 Special Edition",
    preco: "R$ 149,90",
    imagem: "imagens/dmc5-ps5.jpg",
    descricao: "Ação hack and slash com Dante, Nero e V em uma batalha épica contra demônios. Gráficos aprimorados e novos modos de jogo na edição especial.",
    aliases: ["dmc5", "dmc 5", "devil may cry 5", "dmc5 se", "special edition"],
  },
  {
    nome: "NBA 2K25",
    preco: "R$ 349,90",
    imagem: "imagens/nba2k25-ps5.jpg",
    descricao: "O simulador de basquete mais realista com gráficos de próxima geração, física aprimorada e todas as equipes e jogadores da NBA.",
    aliases: ["nba", "nba 2k25", "2k25"],
  },
  {
    nome: "Watch Dogs Legion",
    preco: "R$ 89,90",
    imagem: "imagens/watch-ps5.jpg",
    descricao: "Ação em mundo aberto em um futuro distópico de Londres. Hacqueie a cidade, recrute qualquer NPC e forme sua própria resistência.",
    aliases: ["watchdogs legion", "watch dogs", "wd legion"],
  },
  {
    nome: "Marvel's Spider-Man 2",
    preco: "R$ 299,90",
    imagem: "imagens/spid2-ps5.png",
    descricao: "Aventura épica do Homem-Aranha em Nova York expandida. Controle Peter Parker e Miles Morales em uma história emocionante com gráficos de próxima geração.",
    aliases: [
      "spider man 2",
      "spiderman 2",
      "marvel spiderman 2",
      "spider-man 2",
    ],
  },
];

function normalizar(texto) {
  return (texto || "")
    .toString()
    .normalize("NFD")
    .replace(/\p{Diacritic}+/gu, "")
    .toLowerCase()
    .trim();
}

function buscar(nome) {
  const termo = normalizar(nome);
  if (!termo) return null;
  // busca por includes para tolerar variações, cobrindo aliases
  return (
    catalogoJogos.find((j) => {
      const nomeNormalizado = normalizar(j.nome);
      if (nomeNormalizado.includes(termo)) return true;
      if (Array.isArray(j.aliases)) {
        return j.aliases.some(
          (a) => normalizar(a).includes(termo) || termo.includes(normalizar(a))
        );
      }
      return false;
    }) || null
  );
}

function ligarFormulario(formId, inputId, resultId) {
  const form = document.getElementById(formId);
  const input = document.getElementById(inputId);
  const result = document.getElementById(resultId);
  if (!form || !input || !result) return;
  
  // Função para limpar resultados
  function limparResultados() {
    result.innerHTML = '';
  }
  
  // Limpar resultados quando o campo estiver vazio
  input.addEventListener('input', function() {
    if (this.value.trim() === '') {
      limparResultados();
    }
  });
  
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const termo = input.value.trim();
    
    if (termo === '') {
      limparResultados();
      return;
    }
    
    const jogo = buscar(termo);
    if (jogo) {
      result.innerHTML = `
        <div class="jogo-item">
          <div class="jogo-imagem">
            <img src="${jogo.imagem}" alt="${jogo.nome}">
          </div>
          <div class="jogo-info">
            <h3>${jogo.nome}</h3>
            <p class="preco">${jogo.preco}</p>
            <p class="descricao">${jogo.descricao}</p>
          </div>
        </div>
      `;
    } else {
      result.innerHTML = `
        <div style="text-align: center; padding: 20px; color: #666; font-size: 16px;">
          Não possuímos esse jogo em estoque.
        </div>
      `;
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  ligarFormulario(
    "search-form-home",
    "search-input-home",
    "search-result-home"
  );
  ligarFormulario(
    "search-form-jogos",
    "search-input-jogos",
    "search-result-jogos"
  );
});
