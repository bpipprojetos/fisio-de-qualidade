# 🚀 Prompt de Inicialização: Projeto Multi-LP (Conformidade Google Ads & Silent Root)

Use este prompt para iniciar novos projetos exportados. Foco em performance, segurança e conformidade rigorosa para o Google Ads.

---

**PROMPT:**

Estou iniciando um novo projeto de Landing Pages. Preciso que você configure a infraestrutura base seguindo rigorosos padrões de conformidade para Google Ads e performance.

**Tecnologia:** React + Vite + Tailwind CSS.

**Siga estas fases de preparação:**

1. **Configuração de Ambiente e Dependências (Vercel Fix):**
   - Crie um arquivo `.npmrc` na raiz com a linha `legacy-peer-deps=true` para evitar erros de resolução de pacotes (ERESOLVE) no Vercel/Vite 7.
   - Configure o `vercel.json` para tratar o projeto como um SPA, redirecionando todas as rotas para `index.html` e definindo os cabeçalhos de cache corretos.

2. **Roteamento e 'Silent Root' (Hiding Root):**
   - Configure o roteamento (ex: `App.tsx`) para que a página inicial (`/`) renderize um componente 404 personalizado em Português.
   - O 404 **NÃO deve conter botões de navegação**, servindo apenas para proteger o domínio raiz em auditorias automáticas do Google Ads.
   - Organize as Landing Pages na pasta `client/src/pages/lps/` e configure os slugs específicos (ex: `/promo-especial`).

3. **Páginas Legais e Rodapé:**
   - Crie as rotas `/politica-privacidade` e `/termos-uso` com textos profissionais e atualizados.
   - Garanta que o rodapé contenha as informações obrigatórias: CNPJ/CPF, endereço físico (conforme Google Maps) e ano atual dinâmico.

4. **Limpeza de Telemetria e Scripts (Critical):**
   - Remova do `index.html` e `vite.config.ts` qualquer rastro de telemetria, debug collectors ou scripts de monitoramento (ex: Manus, Umami, etc).
   - Prepare o espaço para a instalação limpa do GTM (Google Tag Manager).

5. **Localização de Mídia:**
   - Scaneie o código em busca de URLs externas de CDNs (ex: `manuscdn`). Baixe-as para `client/public/assets/images/` e aponte para os caminhos locais.
   - Force `loading="lazy"` e tags `alt` descritivas em todas as imagens.

6. **Build e Verificação de Deploy:**
   - No `package.json`, garanta que o script de `build` gere a saída na pasta padrão `dist`.
   - Certifique-se de que o `.gitignore` exclua a pasta `dist` para que o Vercel construa o projeto de forma limpa.
   - Execute um build de teste localmente.

---
