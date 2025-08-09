// Catálogo centralizado: nome normalizado e preço
const catalogoJogos = [
  {
    nome: "God of War",
    preco: "R$ 199,90",
    aliases: ["gow", "god of war ragnarok", "ragnarok"],
  },
  {
    nome: "Uncharted 4",
    preco: "R$ 79,90",
    aliases: ["uncharted", "nathan drake", "uncharted four"],
  },
  {
    nome: "Ghost of Tsushima",
    preco: "R$ 215,00",
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
    aliases: ["halo infinite", "master chief"],
  },
  {
    nome: "Forza Horizon 5",
    preco: "R$ 89,90",
    aliases: ["forza", "forza motorsport", "fh5"],
  },
  {
    nome: "Gears of War Ultimate",
    preco: "R$ 59,90",
    aliases: ["gears 5", "gears of war 5", "gears"],
  },
  {
    nome: "The Witcher 3",
    preco: "R$ 79,90",
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
    aliases: ["sekiro", "shadows die twice"],
  },
  {
    nome: "Assassin's Creed Shadows",
    preco: "R$ 299,90",
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
    aliases: ["cyberpunk 2077 ultimate", "cyberpunk", "cp2077", "cp 2077"],
  },
  {
    nome: "The Last of Us",
    preco: "R$ 199,90",
    aliases: ["the last of us remastered", "tlou"],
  },
  {
    nome: "Grand Theft Auto V",
    preco: "R$ 49,90",
    aliases: ["gta", "gta 5", "gta5", "gta v", "gtav", "grand theft auto 5"],
  },
  {
    nome: "EA Sports FC 25",
    preco: "R$ 349,90",
    aliases: ["fc 25", "ea fc 25", "ea sports fc", "fifa 25", "fifa"],
  },
  {
    nome: "Madden NFL 25",
    preco: "R$ 349,90",
    aliases: ["madden 25", "nfl 25"],
  },
  {
    nome: "Devil May Cry 5 Special Edition",
    preco: "R$ 149,90",
    aliases: ["dmc5", "dmc 5", "devil may cry 5", "dmc5 se", "special edition"],
  },
  {
    nome: "NBA 2K25",
    preco: "R$ 349,90",
    aliases: ["nba", "nba 2k25", "2k25"],
  },
  {
    nome: "Watch Dogs Legion",
    preco: "R$ 89,90",
    aliases: ["watchdogs legion", "watch dogs", "wd legion"],
  },
  {
    nome: "Marvel's Spider-Man 2",
    preco: "R$ 299,90",
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
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const termo = input.value;
    const jogo = buscar(termo);
    if (jogo) {
      result.textContent = `${jogo.nome} — ${jogo.preco}`;
    } else {
      result.textContent = "Não possuímos esse jogo em estoque.";
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
