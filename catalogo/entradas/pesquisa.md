# /PESQUISA

| Campo | Valor |
|---|---|
| **Tipo** | código (estudo) |
| **Origem** | 001 · nº 71 (e 74 /ATUALIZAÇÃO) |
| **Categoria** | estudos e aprendizado |
| **Função** | Pesquisa bibliográfica e levantamento de fontes |
| **Quando usar** | Antes de decidir, propor ou citar algo que você não domina |
| **Status** | não testado |

## SEM skill
**Prompt cru:** `/PESQUISA [tema]`. Resultado: texto de memória, sem fonte verificável, com risco de referência inventada.

**Prompt com contexto:**
```
/PESQUISA
Pergunta: [específica, com recorte]. Uso: [decisão].
Só fontes primárias e normativas. Liste cada fonte com link e data.
Separe: o que está comprovado, o que é opinião, o que está desatualizado.
```
**Insumos obrigatórios:** pergunta delimitada, uso da resposta, tipo de fonte aceita, recorte de data.

## COM skill
- **`deep-research`**: pesquisa em várias fontes e síntese em relatório. Exige ferramentas de busca e subagentes, então só funciona quando a sessão as tem.
- **`find-skills`**: se a pesquisa for "existe skill para X?".
**Como acionar:** "Use a skill deep-research para [pergunta]".
**Fonte da indicação:** descrição das skills, não testado.

## Exemplo
Pergunta: "Qual o prazo decadencial aplicável a aferição de obra em [cenário]?". Saída esperada: norma, artigo, data da versão, divergência de entendimento se houver.

## Armadilhas
- Referência e número de norma inventados são o risco principal. Clique cada link.
- Resposta sem data pode estar desatualizada.

## Validação humana
Tema jurídico/previdenciário passa por conferência na norma vigente.
