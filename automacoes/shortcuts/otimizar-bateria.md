# Shortcut: Otimizar Bateria e Performance

Ativa configurações que reduzem consumo de energia e aumentam a velocidade do dispositivo.

## Passos para criar no app Atalhos

1. Abra **Atalhos** > toque em **+**
2. Nomeie como **"Modo Performance"**

---

### Ação 1 — Ativar Modo de Baixo Consumo
- Busque: **"Definir Modo de Baixo Consumo de Energia"**
- Valor: **Ativar**

> O Modo de Baixo Consumo reduz processamento em segundo plano e aumenta a autonomia em até 3h.

---

### Ação 2 — Reduzir Brilho
- Busque: **"Definir Brilho"**
- Valor: `40%`

---

### Ação 3 — Desativar Bluetooth (se não estiver usando)
- Busque: **"Definir Bluetooth"** → **Desativar**

---

### Ação 4 — Ativar Modo Avião por 10 segundos (limpa conexões travadas)
- Busque: **"Definir Modo Avião"** → **Ativar**
- Adicione **"Aguardar"** → `10 segundos`
- Adicione **"Definir Modo Avião"** → **Desativar**

---

### Ação 5 — Desativar Atualização em Segundo Plano
- Busque: **"Definir Atualização em Segundo Plano do App"**
- Valor: **Desativar**

---

### Ação 6 — Notificação
- Busque: **"Mostrar Notificação"**
- Título: `Modo Performance ativado`
- Corpo: `Bateria e RAM otimizadas.`

---

## Reverter (Modo Normal)

Crie um segundo atalho chamado **"Modo Normal"** com as mesmas ações, mas com valores invertidos:
- Baixo Consumo → **Desativar**
- Brilho → `80%`
- Bluetooth → **Ativar**
- Atualização em Segundo Plano → **Ativar**

---

## Automatizar por horário

| Horário | Atalho |
|---|---|
| 22:00 | Modo Performance (para dormir) |
| 07:00 | Modo Normal (ao acordar) |
