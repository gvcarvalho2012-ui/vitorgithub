# Catálogo

Três partes:

- **Fontes** (`NNN-*.md`): material bruto catalogado como chegou.
- **Entradas** (`entradas/*.md`): cada código, skill ou comando, com uso **sem skill** (prompt cru e com contexto) e **com skill**, exemplo, armadilhas e validação. Modelo em [_MODELO-ENTRADA.md](_MODELO-ENTRADA.md).
- **Inventário de skills** ([skills.md](skills.md)): o que está instalado e onde há lacuna.

## Fontes
| ID | Título | Tipo | Itens | Arquivo |
|----|--------|------|-------|---------|
| 001 | 99 Códigos para Engenheiros(a) | Prompts/comandos para IA | 99 (4 cortados na imagem) | [001-99-codigos-engenheiros.md](001-99-codigos-engenheiros.md) |
| 002 | Instruções personalizadas: parceiro intelectual | Instrução de perfil (7 blocos) | 7 | [002-instrucoes-parceiro-intelectual.md](002-instrucoes-parceiro-intelectual.md) |

## Entradas
| Comando | Origem | Categoria | Skill indicada | Status |
|---|---|---|---|---|
| [/RISCOS](entradas/riscos.md) | 001 · 04 | gestão | compliance-nbr-iso-37301, pericia-inss | não testado |
| [/CONCRETO](entradas/concreto.md) | 001 · 14 | cálculo | lacuna | não testado |
| [/RESUMO](entradas/resumo.md) | 001 · 67, 70 | estudo | vc-estudo, pdf | não testado |
| [/MAPA MENTAL](entradas/mapa-mental.md) | 001 · 73 | estudo | vc-estudo, artifact-diagramming | não testado |
| [/SIMULADO](entradas/simulado.md) | 001 · 72, 77 | estudo | vc-estudo | não testado |
| [/PESQUISA](entradas/pesquisa.md) | 001 · 71, 74 | estudo | vc-estudo, deep-research | não testado |

## Skills criadas
| Skill | Local no repositório | Pacote para upload |
|---|---|---|
| `vc-estudo` | [.claude/skills/vc-estudo](../.claude/skills/vc-estudo/SKILL.md) | [skills-dist/vc-estudo.skill](../skills-dist/vc-estudo.skill) |
