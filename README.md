# Bootcamp II – Projeto em Três Entregas

Repositório oficial do **Bootcamp II**, que evolui de uma extensão Chrome simples até um PWA completo com backend e CI/CD.  
O projeto é dividido em **três entregas** principais, cada uma com objetivos e tecnologias específicos.

---

## 📌 Resumo das Entregas

### 1️⃣ Entrega Inicial — Extensão Chrome (Manifest V3)
Criação de uma **extensão do Google Chrome** totalmente funcional utilizando **Manifest V3**.  
Inclui popup em HTML/CSS/JS, service worker em background e, opcionalmente, content scripts.

**Principais pontos:**
- Publicação do código no GitHub e página demonstrativa no **GitHub Pages**.  
- Versão empacotada em `.zip` ou release oficial.  
- Permissões mínimas e ícones nos tamanhos padrão (16/32/48/128 px).

---

### 2️⃣ Entrega Intermediária — Containerização + Testes E2E + CI
Containerização da extensão e automação de testes.

**Principais pontos:**
- Criação de **Dockerfile** e **docker-compose.yml** para empacotar e rodar a extensão.  
- **Testes end-to-end (Playwright/Chromium)** executados localmente e no CI.  
- **GitHub Actions** para build, testes e publicação de artefatos (relatório HTML do Playwright e `.zip` da extensão).

---

### 3️⃣ Entrega Final — PWA + Backend + CI/CD
Transformação da extensão em um **Progressive Web App (PWA)** completo com backend.

**Principais pontos:**
- **PWA** instalável (manifest.webmanifest, service worker, HTTPS).  
- Integração com **API pública** ou **backend próprio** (Node/Express ou similar).  
- **Docker Compose** orquestrando pelo menos dois serviços (web + api).  
- **CI/CD no GitHub Actions** com build, testes (unitários e E2E) e deploy no GitHub Pages.

---


