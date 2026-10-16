# /RISCOS

| Campo | Valor |
|---|---|
| **Tipo** | código |
| **Origem** | 001 · nº 04 |
| **Categoria** | planejamento e gestão |
| **Função** | Identificar e priorizar riscos de um projeto |
| **Quando usar** | Antes de fechar prazo/orçamento e a cada mudança de fase |
| **Status** | não testado |

## Uso SEM contexto
```
/RISCOS
```
Resultado típico: lista genérica (atraso, estouro de custo, clima, falta de mão de obra). Serve para qualquer obra, logo não ajuda nenhuma.

## Uso COM contexto
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

## Exemplo
Saída esperada (trecho): `Cliente não entrega documentos | causa: sem prazo contratual | P4 × I5 = 20 | gatilho: 5 dias sem retorno | mitigação: cláusula de suspensão de prazo | resp.: comercial`.

## Armadilhas
- A IA não conhece seu histórico: ela inventa probabilidades. Calibre com casos reais.
- Lista longa dilui prioridade. Limite a quantidade.

## Validação humana
Probabilidade e impacto são julgamento seu. A IA estrutura, não decide.
