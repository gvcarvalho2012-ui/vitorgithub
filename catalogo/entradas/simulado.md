# /SIMULADO

| Campo | Valor |
|---|---|
| **Tipo** | código (estudo) |
| **Origem** | 001 · nº 72 (e 77 /RESOLUÇÃO) |
| **Categoria** | estudos e aprendizado |
| **Função** | Criar questões para testar domínio de um tema |
| **Quando usar** | Depois de estudar, para achar o que você não sabe |
| **Status** | não testado |

## SEM skill
**Prompt cru:** `/SIMULADO [tema]`. Resultado: questões fáceis, de memorização, com gabarito sem justificativa.

**Prompt com contexto:**
```
/SIMULADO
Tema: [x]. Banca/estilo: [concurso/prova CREA/uso prático].
10 questões, 3 níveis de dificuldade. Inclua 3 de cálculo.
Para cada uma: gabarito, justificativa, norma/fonte e o erro mais comum.
Depois de eu responder, corrija e liste meus pontos fracos.
```
**Insumos obrigatórios:** tema, estilo de cobrança, quantidade, dificuldade, material-base.

## COM skill
**Skill indicada:** `vc-estudo` (modo simulado). Gera questões em 3 níveis, gabarito justificado, fonte e erro comum; exige material-base para tema normativo; corrige e lista pontos fracos.
**Como acionar:** "/SIMULADO sobre [material anexo], 10 questões, nível profissional".
Apoio: `pdf` (base em PDF de norma) e `xlsx` (placar por tema).
**Fonte da indicação:** skill criada nesta sessão, não testada.

## Exemplo
Base: capítulo da NBR 6118 sobre durabilidade. Pedir questões que cobrem a tabela de classes de agressividade, com justificativa.

## Armadilhas
- A IA erra gabarito de cálculo e de norma. Confira cada resposta na fonte.
- Sem material-base, as questões saem genéricas.

## Validação humana
Gabarito de questão técnica deve ser conferido no texto da norma.
