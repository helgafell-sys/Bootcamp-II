# 💧 Beba Awa

Um lembrete simples e personalizável para te ajudar a se manter hidratado durante o dia. Esta extensão de navegador dispara alertas periódicos para que você não se esqueça de beber água.

---

### ✨ Funcionalidades

* **Configuração de Intervalo:** Defina o tempo, em minutos, entre os lembretes.
* **Notificações do Sistema:** Receba alertas na sua área de trabalho, mesmo com o navegador minimizado.
* **Contador Regressivo:** O popup da extensão mostra o tempo restante para o próximo alarme.
* **Controle de Volume:** Ajuste o volume do som de alarme diretamente no popup.

---

### 💻 Instalação (Modo Desenvolvedor)

Siga estes passos para instalar a extensão no Google Chrome:

1.  **Baixe** os arquivos do projeto e salve-os em uma pasta no seu computador.
2.  Abra o Google Chrome e navegue até a página de extensões digitando `chrome://extensions` na barra de endereços.
3.  No canto superior direito, ative o **Modo do desenvolvedor**.
4.  Clique no botão **Carregar sem compactação**.
5.  Selecione a pasta raiz do projeto (`BebaAwa`) que contém os arquivos `manifest.json`, `popup.html`, etc.

A extensão agora estará instalada e seu ícone aparecerá na barra de ferramentas do Chrome.

---

### 💡 Como Usar

1.  Clique no ícone da garrafa de água na sua barra de ferramentas para abrir o popup da extensão.
2.  Use o campo de entrada para definir o **intervalo de tempo** desejado para os lembretes (em minutos).
3.  Clique em **Salvar e Ativar** para iniciar o alarme.
4.  Um contador regressivo aparecerá no popup, mostrando o tempo restante para o próximo lembrete.
5.  Quando o tempo acabar, você receberá uma **notificação na área de trabalho** e, se o popup estiver aberto, um som de alarme será reproduzido.
6.  Para desativar o lembrete, clique no botão **Desativar**.

---

### 📂 Estrutura do Projeto

* `├── audio/`
    * `└── alarm.mp3` - Arquivo de som para o alarme.
* `├── icons/`
    * `└── garrafa-de-agua.png` - Ícones da extensão em diversos tamanhos.
* `├── manifest.json` - O arquivo de manifesto que descreve a extensão.
* `├── popup.html` - A interface de usuário (UI) do popup.
* `├── popup.js` - O script que controla a lógica do popup, como botões e contador.
* `└── service-worker.js` - O script de fundo que gerencia os alarmes e envia as notificações.

---

### 👤 Autor

Desenvolvido por **João Gabriel**.

---

### 📜 Licença

Este projeto está sob a **GNU General Public License v3.0**.
