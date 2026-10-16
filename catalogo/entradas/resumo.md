# /RESUMO

| Campo | Valor |
|---|---|
| **Tipo** | código (estudo) |
| **Origem** | 001 · nº 67 (e 70 /ARTIGO) |
| **Categoria** | estudos e aprendizado |
| **Função** | Condensar um tema, texto ou artigo |
| **Quando usar** | Triagem de material longo antes de decidir se vale ler |
| **Status** | não testado |

## SEM skill
**Prompt cru:** `/RESUMO` + colar o texto. Resultado: resumo corrido, sem hierarquia, que repete o óbvio.

**Prompt com contexto:**
```
/RESUMO
Texto/PDF: [anexo]. Uso: preparar [decisão/prova/proposta].
Quero: (1) tese em 2 linhas, (2) 5 pontos que mudam o que eu faço, (3) o que o texto afirma sem fonte, (4) o que eu faria com isso na prática.
Não repita o que já é senso comum.
```
**Insumos obrigatórios:** o texto completo, o objetivo de uso, o formato e o tamanho da saída.

## COM skill
- **`pdf`**: extrai texto e tabelas quando a fonte é PDF (inclui OCR de escaneado).
- **`humanizer`** / **`stop-slop`**: limpam o texto final de marcas de escrita de IA.
- **`docx`** ou **`docs`**: entregam o resumo como documento.
**Como acionar:** "Use a skill pdf para extrair o texto de [arquivo] e depois resuma conforme o modelo acima".
**Fonte da indicação:** descrição das skills, não testado.

## Exemplo
Insumo: artigo técnico de 12 páginas sobre cimento. Saída: tese + 5 pontos acionáveis + afirmações sem fonte.

## Armadilhas
- Resumo de IA omite a ressalva que muda o sentido. Releia as conclusões do original.
- Se o texto não está completo, a IA completa com o que "parece".

## Validação humana
Para fonte técnica ou normativa, confira o trecho citado no original.
