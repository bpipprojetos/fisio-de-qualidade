# 🚀 Prompt de Inicialização: Domínio com Home na Raiz (Public Mode)

Use este prompt para projetos onde o `dominio.com` deve exibir uma página principal, mas o sistema deve estar pronto para várias outras LPs com slugs.

---

**PROMPT:**

Estou iniciando um novo projeto multi-LPs exportado do Exportador. Neste projeto, quero que a raiz do domínio (`/`) seja a página principal.

**Tecnologia:** React + Vite + Tailwind CSS.

**Siga estas fases de preparação:**

1. **Roteamento Híbrido:**
   - Configure o roteamento para que a página inicial (`/`) renderize o componente principal (ex: `Home.tsx`).
   - Crie a pasta `client/src/pages/lps/` para organizar as landing pages adicionais que virão com slugs (ex: `/promo-novembro`).
   - Mantenha um componente 404 funcional para rotas não existentes, mas este **pode** conter um botão de "Voltar para o Início".

2. **Páginas Legais e Navegação:**
   - Crie/Refatore as páginas `/politica-privacidade` e `/termos-uso`.
   - Garanta que todos os botões e imagens da Home e das LPs apontem para os slugs corretos, evitando links quebrados.

3. **Automação de Mídia (Exportador ➡️ Local):**
   - Scaneie o código em busca de URLs `files.cdn-externo.com`.
   - Baixe as imagens para `client/public/assets/images/` e atualize os nomes no código para referências locais.
   - Force `loading="lazy"` e tags `alt` descritivas em todas as imagens para garantir performance (LCP) e SEO.

4. **Conformidade Google Ads e Analytics:**
   - Limpe o `index.html` de scripts placeholders (Umami, etc).
   - Prepare a injeção do GTM (Google Tag Manager) no `<head>` e logo após o `<body>`.

5. **Padrão de Código e Build:**
   - Corrija a ordem dos `@import` no CSS (Fontes antes do Tailwind).
   - Execute `npm run build` para garantir que a arquitetura modular não gerou erros de importação.
   - Refatore o `App.tsx` para usar imports limpos e organizados.

---
