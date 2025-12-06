<img width="1739" height="782" alt="image" src="https://github.com/user-attachments/assets/d6c3c714-ee76-4f53-be7d-05b6de3e7c79" />


# Portfólio — Desenvolvedor Front‑End

> Portfólio estático criado com HTML, CSS e JavaScript. Layout responsivo, tema escuro e foco em usabilidade e apresentação de projetos.

## Sobre o projeto

Este repositório contém um portfólio pessoal pensado para apresentação de habilidades front‑end, projetos e links de contato. O site é leve, responsivo e fácil de personalizar.

- Título: *Desenvolvedor Front‑End*
- Projeto em destaque: **Reikai Sagrado** (link no card do projeto)
- Foto de perfil: `img/Perfil.jpg`
- Wallpaper do hero: `img/background.webp`

## Tecnologias usadas

- HTML5
- CSS3 (variáveis CSS, responsividade, animações simples)
- JavaScript (scroll suave, observador de interseção para animações)
- Font Awesome (ícones de redes sociais e tecnologias)

## Estrutura do projeto

```
portifolio/
├─ index.html         # arquivo principal
├─ style.css          # estilos principais
├─ script.js          # interações JS
└─ img/               # imagens (Perfil.jpg, background.webp, Reikai.jpg, etc.)
```

## Como executar localmente

1. Clone o repositório ou copie a pasta `portifolio` para sua máquina.
2. Abra o arquivo `index.html` diretamente no navegador (duplo-clique) ou sirva com um servidor local.

Exemplo rápido com Python (na pasta do projeto):

```powershell
python -m http.server 8000
# Depois abra http://localhost:8000 no navegador
```

## Personalizar conteúdo

- Substitua `img/Perfil.jpg` pela sua foto (preserve o nome ou atualize o `src` em `index.html`).
- Atualize o `background.webp` em `img/` para trocar o wallpaper do `hero`.
- Edite textos em `index.html` nas seções `Sobre`, `Diferenciais`, `Projetos`, `Habilidades` e `Contato`.

## Projeto em destaque

O cartão de projeto aponta para a URL de produção do projeto:

- Reikai Sagrado: https://raikai-sagrado.vercel.app/

Certifique-se de que `img/background.webp` e `img/Reikai.jpg` (ou `img/wallpaper_reikai.png`) estejam presentes caso queira exibir thumbnail local.

## Contato

- GitHub: https://github.com/brunorodri-dev
- Instagram: https://www.instagram.com/brodriiz
- LinkedIn: https://www.linkedin.com/in/bruno-rodrigues-santos-ba6824372/

## Observações e dicas

- O efeito de sobreposição no `hero` usa um gradiente preto com opacidade para melhorar a legibilidade do texto.
- Há um efeito de hover no `hero` que aplica um leve zoom no wallpaper.
- Para compatibilidade máxima em servidores de produção, sirva os arquivos estáticos (por exemplo, Vercel, Netlify, GitHub Pages).

## Licença

Este repositório não inclui uma licença explícita. Se pretende compartilhar publicamente, adicione uma licença (por exemplo, `MIT`) conforme desejar.

---

Se quiser, eu posso:

- adicionar um `LICENSE` (por exemplo MIT),
- criar um `index.html` otimizado para GitHub Pages,
- gerar uma imagem de preview (`screenshot.png`) e incluir no README.

