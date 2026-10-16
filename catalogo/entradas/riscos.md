# /RISCOS

| Campo | Valor |
|---|---|
| **Tipo** | código |
| **Origem** | 001 · nº 04 |
| **Categoria** | planejamento e gestão |
| **Função** | Identificar e priorizar riscos de um projeto |
| **Quando usar** | Antes de fechar prazo/orçamento e a cada mudança de fase |
| **Status** | não testado |

## SEM skill
**Prompt cru:**
```
/RISCOS
```
Resultado típico: lista genérica (atraso, estouro de custo, clima, falta de mão de obra). Serve para qualquer obra, logo não ajuda nenhuma.

**Prompt com contexto:**
```
/RISCOS
Projeto: regularização de obra residencial 180 m², Goiânia, CNO a abrir.
Fase: pré-contratação. Prazo prometido ao cliente: 45 dias.
Dependências: documentos do cliente, habite-se, matrícula, SERO.
Restrições: cliente costuma demorar a enviar documentos.
Saída: tabela com risco, causa, probabilidade (1-5), impacto (1-5), nota, gatilho de alerta, mitigação, responsável.
Ordene pela nota e mostre só os 8 principais.
```
**Insumos obrigatórios:** tipo e porte, fase, prazo e orçamento, dependências externas, histórico de problemas parecidos, formato da saída.

## COM skill
- **`compliance-nbr-iso-37301`**: indicada para avaliação de risco alinhada à ISO 31000, com rastreabilidade (cita cláusula/lei/fonte). Serve quando o risco é de conformidade.
- **`pericia-inss`**: indicada quando o risco é previdenciário (cenários de regularização INSS/CNO com base normativa e memória de cálculo).
- **`contratos-premium`**: indicada quando o risco é contratual (documentos do cliente, escopo, distrato).

**Como acionar:** "Use a skill compliance-nbr-iso-37301 e faça a avaliação de risco deste projeto: [dados acima]".
**Fonte da indicação:** descrição das skills, não testado.

## Exemplo
Saída esperada (trecho): `Cliente não entrega documentos | causa: sem prazo contratual | P4 × I5 = 20 | gatilho: 5 dias sem retorno | mitigação: cláusula de suspensão de prazo | resp.: comercial`.

## Armadilhas
- A IA não conhece seu histórico: ela inventa probabilidades. Calibre com casos reais.
- Lista longa dilui prioridade. Limite a quantidade.

## Validação humana
Probabilidade e impacto são julgamento seu. A IA estrutura, não decide.
