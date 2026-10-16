# /CONCRETO

| Campo | Valor |
|---|---|
| **Tipo** | código |
| **Origem** | 001 · nº 14 |
| **Categoria** | cálculo e dimensionamento |
| **Função** | Estimar o traço de concreto |
| **Quando usar** | Estimativa preliminar e conferência de dosagem de fornecedor |
| **Status** | não testado |

## Uso SEM contexto
```
/CONCRETO
```
Resultado típico: traço genérico (1:2:3) sem resistência, sem relação água/cimento, sem agregados definidos. Perigoso: parece resposta e não é.

## Uso COM contexto
```
/CONCRETO
Elemento: laje e vigas de residência, concreto armado.
fck alvo: 25 MPa. Classe de agressividade ambiental: II.
Cimento: CP II-E-32. Brita 1. Areia média. Abatimento: 10 ± 2 cm.
Lançamento: bomba. Obra em região urbana, sem controle laboratorial.
Entregue: traço em massa e em volume, consumo de cimento por m³, relação a/c máxima, observações de cura e controle.
Cite a norma de cada exigência.
```
**Insumos obrigatórios:** fck, classe de agressividade, tipo de cimento, agregados disponíveis, abatimento, forma de lançamento, volume total.

## Exemplo
Conferir se o requisito é coerente: para CAA II em concreto armado, a NBR 6118 pede classe mínima C25 e a/c máxima de 0,60. Se a IA responder fora disso, a resposta está errada.

## Armadilhas
- Traço de obra real exige dosagem experimental e ensaio. A IA só dá estimativa.
- Confusão comum entre traço em massa e em volume. Peça os dois.
- Norma citada sem número de item: desconfie.

## Validação humana
Responsável técnico confirma dosagem; controle conforme NBR 12655 e execução conforme NBR 14931.
