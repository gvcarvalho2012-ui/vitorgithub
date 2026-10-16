# /MAPA MENTAL

| Campo | Valor |
|---|---|
| **Tipo** | código (estudo) |
| **Origem** | 001 · nº 73 |
| **Categoria** | estudos e aprendizado |
| **Função** | Organizar um tema em estrutura hierárquica |
| **Quando usar** | Depois de um resumo, para fixar relações entre conceitos |
| **Status** | não testado |

## SEM skill
**Prompt cru:** `/MAPA MENTAL [tema]`. Resultado: lista com marcadores, que não é mapa.

**Prompt com contexto:**
```
/MAPA MENTAL
Tema: [x]. Nível: [iniciante/profissional].
Formato: texto em Mermaid (mindmap), no máximo 4 ramos e 3 níveis.
Rotule as relações entre ramos que se influenciam.
```
**Insumos obrigatórios:** tema, nível, profundidade máxima, formato (Mermaid/texto).

## COM skill
- **`artifact-diagramming`**: ensina a desenhar diagramas legíveis em SVG, com tema claro e escuro.
- **Artifact**: publica o mapa como página, para consultar e compartilhar.
- **`canvas-design`**: se a saída for imagem/PDF para imprimir.
**Como acionar:** "Monte um mapa mental de [tema] em artifact, usando a skill artifact-diagramming".
**Fonte da indicação:** descrição das skills, não testado.

## Exemplo
Tema: fluxo de regularização INSS (CNO → SERO → aferição → CND). O mapa deve mostrar dependências entre etapas, não só a lista.

## Armadilhas
- Mapa bonito com conteúdo errado dá falsa segurança. Valide o conteúdo antes de formatar.
- Excesso de ramos vira poluição. Limite.

## Validação humana
Confira se as relações entre conceitos refletem a norma, não só a aparência.
