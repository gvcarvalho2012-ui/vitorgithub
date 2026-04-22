# Shortcut: Limpar Memória

Fecha apps em segundo plano e sinaliza ao iOS para liberar RAM.

## Passos para criar no app Atalhos

1. Abra **Atalhos** > toque em **+**
2. Nomeie como **"Limpar Memória"**
3. Adicione as seguintes ações na ordem:

---

### Ação 1 — Notificação inicial
- Busque: **"Mostrar Notificação"**
- Título: `Limpando memória...`
- Corpo: `Fechando apps em segundo plano`

---

### Ação 2 — Fechar todos os apps
- Busque: **"Encerrar App"**
- Selecione: **Todos os Apps**

> Isso força o iOS a encerrar processos em segundo plano.

---

### Ação 3 — Aguardar
- Busque: **"Aguardar"**
- Duração: `2 segundos`

---

### Ação 4 — Desativar e reativar Wi-Fi (limpa cache de rede)
- Busque: **"Definir Wi-Fi"** → **Desativar**
- Adicione outro **"Aguardar"** → `1 segundo`
- Adicione **"Definir Wi-Fi"** → **Ativar**

---

### Ação 5 — Notificação final
- Busque: **"Mostrar Notificação"**
- Título: `Memória limpa!`
- Corpo: `Apps encerrados e cache de rede limpo.`

---

## Automatizar a execução

1. Abra **Atalhos** > aba **Automação**
2. Toque em **+** > **Automação Pessoal**
3. Gatilho: **Hora do dia** → `06:00` e `23:00`
4. Ação: **Executar Atalho** → selecione **"Limpar Memória"**
5. Desative **"Perguntar antes de executar"**

Isso fará a limpeza automática de manhã e à noite.

---

## Dica extra: Adicionar à Tela Inicial

1. Abra o atalho criado
2. Toque nos **três pontos** (...)
3. **Adicionar à Tela de Início**
4. Escolha um ícone e nome

Assim você terá um botão rápido de limpeza na tela inicial.
