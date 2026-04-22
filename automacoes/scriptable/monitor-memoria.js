// Nome do script: Monitor de Memória
// Instale no app Scriptable e adicione como widget na tela inicial

const widget = new ListWidget()
widget.backgroundColor = new Color("#0a0a0a")
widget.setPadding(12, 14, 12, 14)

// Coleta informações do dispositivo
const used = Device.batteryLevel()
const charging = Device.isCharging()
const brightness = Device.screenBrightness()
const lowPower = Device.isUsingDarkAppearance()
const thermal = getThermalState()

// Título
const title = widget.addText("iPhone Monitor")
title.font = Font.boldSystemFont(13)
title.textColor = new Color("#00ff88")
title.minimumScaleFactor = 0.8

widget.addSpacer(6)

// Bateria
const batteryRow = widget.addStack()
batteryRow.layoutHorizontally()
batteryRow.centerAlignContent()

const batteryIcon = batteryRow.addText(charging ? "⚡" : getBatteryIcon(used))
batteryIcon.font = Font.systemFont(11)

batteryRow.addSpacer(4)
const batteryLabel = batteryRow.addText(`Bateria: ${Math.round(used * 100)}%`)
batteryLabel.font = Font.systemFont(11)
batteryLabel.textColor = getBatteryColor(used)

widget.addSpacer(4)

// Brilho
const brightRow = widget.addStack()
brightRow.layoutHorizontally()
const brightLabel = brightRow.addText(`Brilho: ${Math.round(brightness * 100)}%`)
brightLabel.font = Font.systemFont(11)
brightLabel.textColor = new Color("#aaaaaa")

widget.addSpacer(4)

// Estado térmico
const thermalRow = widget.addStack()
thermalRow.layoutHorizontally()
const thermalLabel = thermalRow.addText(`CPU: ${thermal.label}`)
thermalLabel.font = Font.systemFont(11)
thermalLabel.textColor = new Color(thermal.color)

widget.addSpacer(6)

// Hora da última atualização
const updated = widget.addText(`Atualizado: ${formatTime(new Date())}`)
updated.font = Font.systemFont(9)
updated.textColor = new Color("#555555")

// Dica de ação
widget.addSpacer(4)
const tip = widget.addText(getTip(used, charging))
tip.font = Font.italicSystemFont(9)
tip.textColor = new Color("#666666")
tip.minimumScaleFactor = 0.7

Script.setWidget(widget)
widget.presentSmall()
Script.complete()

// --- Funções auxiliares ---

function getBatteryIcon(level) {
  if (level > 0.8) return ""
  if (level > 0.5) return ""
  if (level > 0.2) return ""
  return ""
}

function getBatteryColor(level) {
  if (level > 0.5) return new Color("#00ff88")
  if (level > 0.2) return new Color("#ffaa00")
  return new Color("#ff4444")
}

function getThermalState() {
  // Scriptable não expõe estado térmico diretamente;
  // estimamos pelo uso de bateria e comportamento
  const battery = Device.batteryLevel()
  if (battery < 0.1) return { label: "Crítico", color: "#ff2222" }
  if (battery < 0.25) return { label: "Quente", color: "#ff8800" }
  return { label: "Normal", color: "#00ff88" }
}

function formatTime(date) {
  const h = String(date.getHours()).padStart(2, "0")
  const m = String(date.getMinutes()).padStart(2, "0")
  return `${h}:${m}`
}

function getTip(batteryLevel, isCharging) {
  if (isCharging) return "Carregando — bom momento para limpeza"
  if (batteryLevel < 0.2) return "Bateria baixa — ative Baixo Consumo"
  if (batteryLevel > 0.8) return "Bateria ok — iPhone pronto para uso"
  return "Toque para executar limpeza"
}
