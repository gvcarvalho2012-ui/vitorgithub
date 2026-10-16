# Inventário de skills

Fonte: arquivos `SKILL.md` das skills sincronizadas na conta, lidos em 2026-10-16. Descrições resumidas do cabeçalho de cada skill. Nenhuma foi testada.

**Alerta de ambiente:** várias skills `vc-*` gravam em caminhos do Windows (`C:\Users\admin\...`). Esses caminhos não existem na sessão em nuvem, então a gravação automática só funciona no seu computador. Na nuvem, elas entregam o texto no chat.

## Estudo, pesquisa e conteúdo
| Skill | Para quê |
|---|---|
| **`vc-estudo`** (nova) | Triagem, resumo, mapa, simulado, revisão espaçada, pesquisa e nota. Ver `.claude/skills/vc-estudo/` |
| `deep-research` | Pesquisa em várias fontes e relatório; exige busca e subagentes |
| `pdf` | Ler, extrair, dividir, juntar, OCR |
| `docx` · `docs` | Entregar como Word ou documento compartilhável |
| `artifact-diagramming` | Diagramas legíveis (base de mapas) |
| `humanizer` · `stop-slop` | Limpar texto com cara de IA |
| `find-skills` · `skill-creator` | Achar e criar skills |
| `vc-cerebro` | Segundo cérebro: escreve notas no vault Obsidian (`C:\Users\admin\Documents\VC-Cerebro`) |
| `vc-revit-progresso` | Auditoria de aprendizado em Revit e Claude; grava `revit-profile.md` e nota no vault |

## Comercial e relacionamento
| Skill | Para quê |
|---|---|
| `projetebim` | Triagem comercial e relatório técnico de captação |
| `vc-mentor-comercial` | Mentor de vendas B2B premium (Gap Selling), análise de proposta e negociação |
| `vc-projete-cliente` | Explicar decisões técnicas a cliente leigo, WhatsApp, respostas a objeções |
| `vc-mediador-projeto` | Triagem e mediação de mensagens de grupos de projeto, pedidos duplicados ou conflitantes |
| `vc-revit-briefing` | Briefing estruturado com o cliente (8 blocos) |
| `contratos-premium` | Contratos de projeto e regularização com blindagem |

## INSS / regularização
| Skill | Para quê |
|---|---|
| `inss-sero-decadencia` · `vc-sero-decadencia-zero` | Playbook SERO/CNO/CND por decadência (CTN art. 173), baseado no caso TG01. **Parecem duplicadas**: comparar e fundir |
| `pericia-inss` | Cenários e enquadramento com memória de cálculo; não gera documento sem autorização |
| `vc-revit-nbr12721` | NBR 12721:2006, áreas equivalentes, quadro para INSS e cartório |
| `compliance-nbr-iso-37301` | Compliance e risco (ISO 37301/31000) |

## Viabilidade, aprovação e conformidade (Contagem-MG / BH)
| Skill | Para quê |
|---|---|
| `vc-contagem-viabilidade` | Viabilidade e memória de áreas sob a LC 362/2023: área computável, CA, vagas, permeabilidade, quadro de áreas |
| `vc-revit-aprovacao` | Checklist de aprovação na prefeitura em 6 etapas, documentos e causas de reprovação |
| `vc-revit-conformidade` | Conformidade com a LC 362/2023 e a NBR 9050; relatório pass/fail |

## Projeto, obra e orçamento
| Skill | Para quê |
|---|---|
| `vc-projete-obra` | Cronograma, sequência de serviços, equipes, checklist de início e memorial |
| `vc-projete-orcamento` | Materiais e pré-orçamento a partir de quantitativos do Revit, com perdas e comparação de propostas; sem SINAPI como base |
| `vc-revit-quantitativos` | Quantitativos do modelo, schedules, export CSV/Excel, SINAPI/CUB-MG 2025 |
| `vc-revit-eletrico` | Elétrica residencial NBR 5410 |
| `vc-revit-hidraulico` | Hidrossanitário NBR 5626, 8160 e 10844 |
| `vc-revit-executivo` | Revisão de projeto executivo (NBR 6492, 10067, 10068, 13531) |

## Revit / BIM técnico
| Skill | Para quê |
|---|---|
| `vc-projetebim` | Hub que roteia para 20 especialistas; lê `revit-profile.md` local |
| `vc-revit-senior` | Mentor Revit: topografia, quadro NBR 12721 via schedules, auditoria e compatibilização |
| `vc-revit-detalhamento` | Vistas de detalhe, componentes, regiões preenchidas |
| `vc-revit-familias` | Auditoria de famílias e arquivo pesado |
| `vc-revit-organizador` | Padronização do navegador de projetos |
| `vc-revit-automacao` | Dynamo/Python/API: lote de vistas, export, parâmetros |
| `vc-revit-humanizado` | Planta humanizada e render no Lumion 2024 |
| `vc-revit-inspiracoes` | Gestão de referências visuais e moodboard |
| `pyrevit-revit-2025` · `develop-pyrevit-extensions` | Extensões pyRevit e API do Revit |

## Documentos, dados e plataforma
`xlsx`, `pptx`, `docx`, `docs`, `google-workspace`, `dataviz`, `canvas-design`, `frontend-design`, `web-artifacts-builder`, `morning`, `import-memory`, navegadores e computer-use. Plugins de plataforma (`product-management`, `human-resources`, `design`, `cowork-plugin-management`): baixa aderência ao seu negócio.

## Diagnóstico
- **Duplicidade:** `inss-sero-decadencia` e `vc-sero-decadencia-zero` têm a mesma descrição. Duas fontes de verdade para o mesmo processo é risco de divergência em caso real de cliente.
- **Sobreposição com `vc-projetebim`:** ele roteia para 20 especialistas, mas depende de `revit-profile.md` local; na nuvem esse contexto some.
- **Lacuna fechada:** estudo e triagem, com `vc-estudo`. Continua sem skill dedicada: cálculo de materiais/estrutura (concreto, aço, fundação).
