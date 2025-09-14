const ALARM_NAME = "hydration_reminder";


chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "ativarAlarme") {
    const intervaloEmMinutos = request.intervalo;
    chrome.storage.local.set({ intervalo: intervaloEmMinutos });

    const now = Date.now();
    const proximoAlarme = now + intervaloEmMinutos * 60 * 1000;
    chrome.storage.local.set({ proximoAlarme });

    chrome.alarms.create(ALARM_NAME, {
      delayInMinutes: 1,
      periodInMinutes: intervaloEmMinutos
    });

    console.log(`Alarme ativado para cada ${intervaloEmMinutos} minutos.`);
  } else if (request.action === "desativarAlarme") {
    
    chrome.alarms.clear(ALARM_NAME);
    console.log("Alarme desativado.");
  }
});


chrome.alarms.onAlarm.addListener(alarm => {
  if (alarm.name === ALARM_NAME) {
    chrome.notifications.create({
      type: "basic",
      iconUrl: "icons/garrafa-de-agua.png",
      title: "Hora de beber água!",
      message: "Lembre-se de se hidratar. Seu corpo agradece!"
    });

    chrome.runtime.sendMessage({ action: "tocarAlarmeSonoro" });

    chrome.storage.local.get("intervalo", ({ intervalo }) => {
      const proximoAlarme = Date.now() + intervalo * 60 * 1000;
      chrome.storage.local.set({ proximoAlarme });
    });
    console.log("Notificação de hidratação enviada.");
  }
});