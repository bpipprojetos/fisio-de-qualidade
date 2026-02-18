# 🚀 Prompt de Inicialização: Projeto Multi-LP (Com Home na Raiz)

Use este prompt para projetos onde a raiz do domínio (`/`) DEVE exibir uma página principal funcional, mas o sistema precisa estar pronto para múltiplas outras LPs em slugs e em total conformidade com o Google Ads.

---

**PROMPT:**

Estou iniciando um novo projeto de Landing Pages. Neste projeto, a raiz do domínio (`/`) deve ser a página inicial principal. Preciso que você configure a infraestrutura seguindo padrões de alta performance e conformidade para Google Ads.

**Tecnologia:** React + Vite + Tailwind CSS.

**Siga estas fases de preparação:**

1. **Configuração de Ambiente e Vercel Fix:**
   - Crie um arquivo `.npmrc` na raiz com `legacy-peer-deps=true` para evitar erros de pacotes no Vercel/Vite 7.
   - Configure o `vercel.json` para suportar roteamento SPA e URLs limpas.

2. **Roteamento Híbrido:**
   - Configure o roteamento principal (ex: `App.tsx`) para que a página inicial (`/`) renderize o componente `Home.tsx`.
   - Crie a pasta `client/src/pages/lps/` para organizar as landing pages adicionais que virão com slugs (ex: `/campanha-novembro`).
   - Mantenha um componente 404 funcional, mas amigável, para rotas inexistentes.

3. **Páginas Legais e Navegação:**
   - Crie as rotas `/politica-privacidade` e `/termos-uso`.
   - Garanta que todos os botões e links apontem para os slugs corretos, evitando 404s internos.
   - O rodapé deve ser completo: CNPJ/CPF, Endereço físico e ano atual dinâmico.

4. **Automação de Mídia e SEO:**
   - Scaneie o código em busca de URLs externas ou de CDNs de construção (ex: `manuscdn`).
   - Baixe as imagens para `client/public/assets/images/` e atualize o código para referências locais.
   - Garanta `loading="lazy"` e tags `alt` descritivas em todas as imagens.

5. **Conformidade de Scripts e Performance:**
   - Limpe o `index.html` de scripts de telemetria, debuggers ou trackers genéricos (ex: Umami, Manus Debug).
   - Prepare a injeção do GTM (Google Tag Manager) no `<head>` e logo após o `<body>`.
   - Corrija a ordem dos `@import` no CSS (Fontes antes do Tailwind).

6. **Build e Deploy:**
   - No `package.json`, garanta que o build gere a saída em `dist/public`.
   - Certifique-se de que o `.gitignore` exclua a pasta `dist` para que o Vercel construa o projeto de forma limpa.
   - Execute um build de teste localmente.

---
