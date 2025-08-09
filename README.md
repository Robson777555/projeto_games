
# Projeto Games 🎮

Este é um projeto web simples e responsivo para apresentar jogos de maneira interativa. Desenvolvido com HTML, CSS e JavaScript, ele utiliza carrosséis, menus responsivos e animações suaves para oferecer uma boa experiência ao usuário.

📸 Demonstração
link do site: https://esplayergames-by-robsonjobim.netlify.app/

## 🔍 Visão Geral

O projeto é composto por três páginas principais:
- `index.html`: Página inicial com destaques dos jogos.
- `jogos.html`: Lista com jogos e descrições.
- `contato.html`: Página de contato.

## 🛠️ Tecnologias Utilizadas

- **HTML5** e **CSS3**
- **JavaScript Vanilla**
- **jQuery** (incluso localmente)
- **Slick Carousel** (para sliders responsivos)

## 📂 Estrutura de Pastas

```
projeto_games/
├── index.html
├── jogos.html
├── contato.html
├── css/
│   ├── style.css
│   └── slick.css
├── js/
│   ├── jquery.js
│   ├── slick.js
│   ├── slides.js
│   ├── busca.js
│   ├── menuScroll.js
│   └── menu_responsivo.js
```

## ▶️ Como Rodar o Projeto

1. Clone ou baixe este repositório.
2. Abra o arquivo `index.html` em seu navegador.
3. Navegue entre as páginas através do menu.

## 💡 Funcionalidades

- Carrossel superior (hero) com botões "Anterior" e "Próximo", autoplay contínuo (não pausa no hover) e responsivo
- Carrossel das descrições (sessão de tratamentos) com a mesma estilização de setas; em telas menores as setas ficam centralizadas acima do carrossel
- Busca por jogos nas páginas `index.html` e `jogos.html`, com suporte a aliases (apelidos) e retorno de nome + preço
- Imagens centralizadas, com tamanhos uniformes e sem cortes indesejados (contain) no mosaico
- Menu adaptável para dispositivos móveis
- Animações suaves ao rolar a página e layout com fontes/cores personalizadas

### Novidades
- Integração das imagens da faixa inferior ao carrossel superior (faixa inferior removida)
- Setas estilizadas (mesma cor do botão de busca: `#688293`) com texto dentro do botão
- Setas posicionadas acima e centralizadas no mobile, também na sessão de descrições
- Busca com aliases (ex.: "gta", "gta5", "ac shadows", "tlou") e preços sincronizados com `jogos.html`
- Caso o jogo não exista, exibe: "Não possuímos esse jogo em estoque."

### Como atualizar jogos e preços na busca
1. Edite os cards em `jogos.html` (nome e preço visíveis para o usuário).
2. Atualize o catálogo em `js/busca.js` para refletir os mesmos nomes e preços.
3. Opcional: acrescente mais aliases em cada item para facilitar a busca (ex.: `aliases: ["gta", "gta 5", "gtav"]`).

## ✉️ Contato

Para dúvidas ou sugestões, entre em contato pela página `contato.html`.

---

Desenvolvido por: Robson Santos Jobim 


