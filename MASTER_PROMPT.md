# 🚀 Master Prompt: Adicionar Nova Landing Page

Copie e cole este prompt para o Antigravity toda vez que você adicionar uma nova pasta de LP em `client/src/pages/lps/`.

---

**PROMPT:**

Estou adicionando uma nova Landing Page ao projeto. Já criei/descompactei a pasta em `client/src/pages/lps/{NOME_DA_PASTA}/`. 

Preciso que você realize os seguintes passos de padronização e publicação:

1. **Roteamento:**
   - Importe o novo componente em `client/src/App.tsx`.
   - Adicione uma nova `<Route>` com o slug `{ESPECIFICAR_SLUG_AQUI}` apontando para este componente.

2. **Otimização de Ativos (Essential):**
   - Identifique todas as imagens que ainda usam URLs externas ou CDNs temporários.
   - Baixe essas imagens para `client/public/assets/images/` usando nomes descritivos.
   - Atualize os caminhos no código para apontarem para os arquivos locais.

3. **Refatoração de Qualidade e SEO:**
   - Adicione `loading="lazy"` em todas as tags `<img>`.
   - Adicione tags `alt` descritivas (em Português) para todas as imagens.
   - Garanta que o botão principal (CTA) abra o link correto (WhatsApp/Typebot).
   - Links do rodapé devem apontar para `/politica-privacidade` e `/termos-uso`.

4. **Conformidade Google Ads & Vercel:**
   - Verifique se não há scripts de telemetria ou debug espalhados.
   - Garanta que o projeto tenha o arquivo `.npmrc` com `legacy-peer-deps=true`.
   - Verifique o arquivo `vercel.json` para garantir o redirecionamento SPA.

5. **Validação Final:**
   - Execute `npm run build` localmente.
   - Verifique se a compilação gerou os arquivos corretamente na pasta `dist`.
   - Certifique-se de que o Vercel esteja configurado para ler esta pasta.

---
