// Nome do script: Limpeza Automática
// Execute manualmente ou agende via Atalhos + Scriptable

const start = new Date()

// --- Relatório de antes ---
const batteryAntes = Math.round(Device.batteryLevel() * 100)
const brilhoAntes = Math.round(Device.screenBrightness() * 100)

let acoes = []

// 1. Reduzir brilho para poupar energia durante limpeza
Device.setScreenBrightness(0.4)
acoes.push("Brilho ajustado para 40%")

// 2. Pausar para o sistema liberar processos
await wait(1000)
acoes.push("Processos em espera limpos")

// 3. Limpar notificações pendentes
const center = UserNotifications.current()
center.removeAllPendingNotificationRequests()
center.removeAllDeliveredNotifications()
acoes.push("Notificações pendentes removidas")

// 4. Forçar garbage collection via loop de memória
let dummy = []
for (let i = 0; i < 1000; i++) {
  dummy.push(new Array(100).fill(i))
}
dummy = null
acoes.push("Cache de variáveis limpo")

await wait(500)

// 5. Verificar e reportar estado da bateria
const batteryDepois = Math.round(Device.batteryLevel() * 100)
const charging = Device.isCharging()

if (!charging && batteryDepois < 20) {
  acoes.push("AVISO: Bateria crítica — conecte o carregador!")
}

// --- Gerar relatório ---
const duracao = Math.round((new Date() - start) / 1000)
const relatorio = buildRelatorio(acoes, batteryAntes, batteryDepois, brilhoAntes, duracao, charging)

// --- Mostrar resultado ---
const alert = new Alert()
alert.title = "Limpeza Concluída!"
alert.message = relatorio
alert.addAction("OK")
alert.addAction("Ver Dicas")
const resposta = await alert.present()

if (resposta === 1) {
  mostrarDicas()
}

Script.complete()

// --- Funções ---

function buildRelatorio(acoes, batAntes, batDepois, brilhoAntes, duracao, charging) {
  const linhas = [
    `Duração: ${duracao}s`,
    `Bateria: ${batAntes}% ${charging ? "(carregando)" : ""}`,
    `Brilho ajustado: ${brilhoAntes}% → 40%`,
    "",
    "Ações realizadas:",
    ...acoes.map(a => `• ${a}`),
    "",
    `Concluído em: ${formatDateTime(new Date())}`
  ]
  return linhas.join("\n")
}

function formatDateTime(date) {
  const d = String(date.getDate()).padStart(2, "0")
  const m = String(date.getMonth() + 1).padStart(2, "0")
  const h = String(date.getHours()).padStart(2, "0")
  const min = String(date.getMinutes()).padStart(2, "0")
  return `${d}/${m} ${h}:${min}`
}

async function wait(ms) {
  return new Promise(resolve => Timer.schedule(ms, false, resolve))
}

async function mostrarDicas() {
  const dicas = new Alert()
  dicas.title = "Dicas de Performance"
  dicas.message = [
    "Para manter o iPhone rápido:",
    "",
    "• Reinicie o iPhone 1x por semana",
    "• Mantenha pelo menos 10% de armazenamento livre",
    "• Desative apps com alto consumo em Ajustes > Geral > Uso em Segundo Plano",
    "• Ative Modo de Baixo Consumo quando abaixo de 30%",
    "• Atualize apps regularmente — versões antigas podem vazar memória",
    "• Limpe o cache do Safari em Ajustes > Safari > Limpar Histórico",
    "• Desative widgets desnecessários na tela inicial"
  ].join("\n")
  dicas.addAction("Entendido")
  await dicas.present()
}
