document.getElementById('salvarBtn').addEventListener('click', () => {
  const intervalo = document.getElementById('intervalo').value;
  
  chrome.runtime.sendMessage({ action: "ativarAlarme", intervalo: parseInt(intervalo) });
  window.close(); 
});

document.getElementById('desativarBtn').addEventListener('click', () => {
  
  chrome.runtime.sendMessage({ action: "desativarAlarme" });
  window.close();
});

function mostrarTempoRestante() {
  chrome.storage.local.get(["proximoAlarme"], ({ proximoAlarme }) => {
    if (proximoAlarme) {
      const agora = Date.now();
      let restanteMs = proximoAlarme - agora;
      
      if (restanteMs < 0) {
        restanteMs = 0;
      }
      
      const minutos = Math.floor(restanteMs / 60000);
      const segundos = Math.floor((restanteMs % 60000) / 1000);
      
      document.getElementById('tempoRestante').textContent =
        `Tempo restante: ${minutos}m ${segundos}s`;
    } else {
      document.getElementById('tempoRestante').textContent =
        "Nenhum alarme ativo.";
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  // Chamada inicial e depois a cada segundo
  setInterval(mostrarTempoRestante, 1000);

  chrome.storage.local.get(['volume'], ({ volume }) => {
    if (volume !== undefined) {
      volumeInput.value = volume;
      alarmeAudio.volume = volume;
    }
  });
});

const alarmeAudio = document.getElementById('alarmeAudio');
const pararAlarmeBtn = document.getElementById('pararAlarmeBtn');
const volumeInput = document.getElementById('volume');


function tocarAlarme() {
  alarmeAudio.volume = volumeInput.value;
  alarmeAudio.currentTime = 0;
  alarmeAudio.play();
  pararAlarmeBtn.style.display = "block";
}

pararAlarmeBtn.addEventListener('click', () => {
  alarmeAudio.pause();
  alarmeAudio.currentTime = 0;
  pararAlarmeBtn.style.display = "none";
});

volumeInput.addEventListener('input', () => {
  alarmeAudio.volume = volumeInput.value;
  chrome.storage.local.set({ volume: volumeInput.value });
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "tocarAlarmeSonoro") {
    tocarAlarme();
  }
});