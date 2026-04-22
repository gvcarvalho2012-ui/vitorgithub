# Shortcut: Limpeza Semanal Automática

Rotina completa que roda toda semana para manter o iPhone sempre limpo e rápido.

## Passos para criar no app Atalhos

1. Abra **Atalhos** > toque em **+**
2. Nomeie como **"Limpeza Semanal"**

---

### Ação 1 — Verificar Armazenamento Disponível
- Busque: **"Obter Espaço em Disco"**
- Salve o resultado como variável: `Espaço Livre`

---

### Ação 2 — Limpar Cache do Safari
- Busque: **"Limpar Histórico e Dados do Site do Safari"**

> Remove cookies, cache e histórico acumulados.

---

### Ação 3 — Fechar Todas as Abas do Safari
- Busque: **"Fechar Abas do Safari"**
- Selecione: **Todas as Abas**

---

### Ação 4 — Encerrar Apps em Segundo Plano
- Busque: **"Encerrar App"** → **Todos os Apps**

---

### Ação 5 — Desativar Localização Temporariamente
- Busque: **"Definir Localização"** → **Desativar**
- Adicione **"Aguardar"** → `5 segundos`
- Adicione **"Definir Localização"** → **Ativar**

> Reinicia o serviço de localização, que pode acumular cache.

---

### Ação 6 — Relatório Final
- Busque: **"Mostrar Alerta"**
- Título: `Limpeza concluída!`
- Mensagem: `Espaço livre: [Espaço Livre]`
- Use a variável `Espaço Livre` no campo da mensagem

---

## Configurar Automação Semanal

1. Abra **Atalhos** > aba **Automação**
2. Toque em **+** > **Automação Pessoal**
3. Gatilho: **Hora do dia**
   - Hora: `03:00` (enquanto você dorme)
   - Repetir: **Semanalmente** — escolha **Domingo**
4. Ação: **Executar Atalho** → **"Limpeza Semanal"**
5. Desative **"Perguntar antes de executar"**

---

## O que é limpo

| Item | Método |
|---|---|
| Cache Safari | Limpar Histórico e Dados |
| Abas abertas | Fechar Todas as Abas |
| Apps em segundo plano | Encerrar Apps |
| Cache de localização | Reiniciar serviço GPS |
| Conexões de rede | Ciclo do Wi-Fi |
