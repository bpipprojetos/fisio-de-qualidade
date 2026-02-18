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
   - Identifique todas as imagens que ainda usam URLs do `files.cdn-externo.com`.
   - Baixe essas imagens para `client/public/assets/images/` usando nomes descritivos.
   - Atualize os caminhos no código para apontarem para os arquivos locais.

3. **Refatoração de Qualidade e SEO:**
   - Adicione `loading="lazy"` em todas as tags `<img>`.
   - Adicione tags `alt` descritivas (em Português) para todas as imagens.
   - Garanta que o botão principal (CTA) abra o Typebot/WhatsApp correto.
   - Verifique se os links do rodapé apontam para `/politica-privacidade` e `/termos-uso`.

4. **Conformidade Google Ads:**
   - Garanta que não haja links quebrados (404).
   - Verifique se o endereço e informações da clínica estão corretos conforme o Google Maps.

5. **Validação Final:**
   - Execute `npm run build` e me confirme se o projeto compilou sem avisos ou erros.

---
