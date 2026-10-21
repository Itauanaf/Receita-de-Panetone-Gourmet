# PROMPT DE DESENVOLVIMENTO — PÁGINA PANETONE GOURMET FÁCIL

Atue como engenheiro full-stack sênior, designer de conversão e especialista em UX/UI para infoprodutos low ticket. Desenvolva e finalize uma landing page profissional, responsiva, acessível e otimizada para dispositivos móveis, para o e-book **Receita de Panetone Gourmet Fácil**.

## Referências e arquivos de entrada
- Use `index.html` e as imagens JPG incluídas no pacote como base visual funcional, não descarte o conteúdo aprovado.
- O e-book original de 39 páginas é a fonte de verdade para o conteúdo: receita-base de massa, chocotone, receitas de ganache, brigadeiro, creme de leite em pó e doce de leite, montagem, decoração, rotulagem, armazenamento, custos e preços.
- Os bônus são materiais complementares separados: Controle de Encomendas Natalinas, Etiquetas e Precificação.

## Configuração comercial
- Produto: Receita de Panetone Gourmet Fácil.
- Formato: PDF digital ilustrado para iniciantes.
- Preço final: **R$ 14,90** em pagamento único; não exibir preço antigo fictício.
- Bônus incluídos sem custo adicional: (1) Controle de Encomendas Natalinas, (2) Etiquetas, (3) Precificação.
- Garantia anunciada: 7 dias; incorporar os termos verdadeiros e mecanismo de suporte antes de publicar.
- Checkout: **não definido**. Criar variável de ambiente `NEXT_PUBLIC_CHECKOUT_URL` ou configuração equivalente. Até que exista uma URL HTTPS válida, o CTA de pagamento NÃO deve simular conclusão de compra, criar pedidos fictícios ou direcionar para links imaginários.
- O delivery digital do guia e dos bônus deve ser feito de forma segura, preferencialmente pela plataforma de pagamento após confirmação. Não expor publicamente PDFs pagos por URL previsível sem autorização.

## Design
Paleta base: marrom chocolate `#4B211C`, vinho natalino `#8F2732`, dourado `#C59A53`, creme `#FFF9F0` e papel `#F6EEE3`. Fontes sugeridas: Playfair Display para títulos, DM Sans para interface/corpo. Arte com textura sutil, bastante espaço em branco e fotografias autênticas do próprio material. Evitar excesso de elementos, gradientes fortes e animações que prejudiquem desempenho. Mobile first, layout de leitura confortável e CTA visível na seção de oferta. No celular, barra fixa inferior de CTA com contraste e tamanho de toque adequado.

## Ordem das seções e mensagem
1. Topbar discreta com tema natalino.
2. Hero: "Seu primeiro panetone gourmet começa aqui." Subtítulo: "Aprenda a preparar massas macias, recheios cremosos e decorações irresistíveis — mesmo começando do zero. E descubra como calcular os custos para começar a vender." Capa real do e-book, benefícios curtos, botão para `#oferta`.
3. Identificação: dúvidas sobre ponto da massa, recheios e preço.
4. Benefícios: passo a passo ilustrado, preparos, montagens e planejamento de venda.
5. Os quatro módulos: Começando do Zero; Recheios e Sabores Gourmet; Apresentação e Finalização; Vendendo no Natal.
6. Sabores confirmados no e-book: Chocolate Gourmet, Leite em Pó e Doce de Leite, sem inventar receitas extras.
7. Três bônus com miniaturas e descrição fiel, distinguindo entregáveis externos ao e-book.
8. Para quem é: iniciantes, presentes natalinos, quem quer começar a vender.
9. Card de oferta: R$ 14,90, pagamento único, entregáveis, garantia real de 7 dias e checkout quando estiver configurado.
10. FAQ: experiência necessária, formato digital, equipamentos, comercialização de alimentos dentro das regras locais, cálculo de custos, entrega, garantia.
11. CTA final + rodapé com suporte, dados do responsável, privacidade, termos de uso e reembolso.

## Restrições éticas e legais
- Sem avaliações, prints de WhatsApp, números de vendas, selos de segurança, temporizadores de urgência ou descontos falsos.
- Sem promessas de receita garantida, lucro garantido, facilidade absoluta, resultado sem esforço ou exclusividade não comprovada.
- Indicar que exemplos de preço e custo são ilustrativos e variam por região, escala, insumos e despesas.
- Não substituir instruções sanitárias por estimativas improvisadas: o vendedor deve seguir as regras locais de manipulação, transporte, informação de alergênicos e validade.
- O usuário deve poder conferir a política de privacidade e as condições da oferta antes do pagamento. Não usar pixels de rastreamento sem o consentimento/configuração legal adequados.

## Engenharia
- Preferência por Next.js/React + TypeScript + Tailwind (ou manter HTML/CSS/JS fornecido quando implantação estática for desejada).
- Componentizar: Header, Hero, PainPoints, Benefits, Modules, Recipes, Bonuses, Audience, Offer, FAQ, Footer, StickyCTA.
- SEO: meta title e description, Open Graph com imagem de produto autorizada, canonicals configuráveis, headings em ordem, imagens com `alt`, sitemap e robots ajustados ao domínio.
- Performance: imagens otimizadas e responsivas com dimensions, lazy-loading abaixo da dobra, preload seletivo do visual do Hero, fontes otimizadas, JavaScript mínimo e sem layout shift.
- Acessibilidade: estados de foco, contraste, landmarks, teclado, menu e controles acessíveis.
- Segurança: cabeçalhos recomendados, CSP aplicável, nenhuma credencial em frontend, sanitização de inputs se forem adicionados formulários, rate limit quando houver endpoints, HTTPS.
- Configuração segura de checkout: URL via variável de ambiente, teste em sandbox da plataforma, validação de callbacks/webhooks no servidor somente se forem implementados, evitar falsificar confirmação de pagamento.
- Integração opcional de métricas apenas com consentimento e sem coletar dados pessoais desnecessários.

## Checklist de testes
- Viewports: 360px, 390px, 768px, 1024px, 1440px.
- Sem overflow horizontal; textos legíveis; imagens não distorcidas; nenhum CTA encoberto; barra fixa móvel não sobrepõe o rodapé.
- Todos os links âncora funcionais, FAQ acessível, CTA encaminha apenas a checkout verdadeiro quando configurado.
- A oferta exibe consistentemente R$ 14,90; lista apenas bônus efetivamente entregues.
- Conteúdo validado contra as 39 páginas do PDF original.
- Rodapé/termos, suporte, titular, garantia e entrega conferidos antes do deploy.
- Lighthouse e verificação manual em Chrome mobile e desktop.

## Entregáveis
1. Código fonte completo da landing page, com responsividade real.
2. Pasta de assets otimizados.
3. Arquivo `.env.example` com `NEXT_PUBLIC_CHECKOUT_URL=` vazio e instruções.
4. Instruções para hospedar na Vercel ou outro host.
5. Lista do que permanece pendente antes de publicar: checkout, dados do vendedor, suporte, termos, políticas e canal de entrega dos arquivos.
6. Sem declarações de que o site recebe pagamentos ou entrega material antes de a integração estar funcionando e testada.
