# Jornada do Cuidado (CAREinho) — Projeto Challenge FIAP

![React](https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Oracle Data Modeler](https://img.shields.io/badge/Modelagem-MER_%26_L%C3%B3gico-F80000?style=for-the-badge&logo=oracle&logoColor=white)

**Autor:** Renan Santa Rosa Xavier — RM566997

---

## Sobre o Projeto

O **CAREinho (Jornada do Cuidado)** é uma plataforma digital desenvolvida para o **Challenge FIAP** com foco na redução da taxa de **absenteísmo (*no-show*) em consultas e tratamentos médicos**. Em vez de apenas cobrar presença, a solução engaja pacientes e acompanhantes por meio de uma jornada gamificada, acolhedora e acessível.

![Capa Jornada do Cuidado CAREinho](docs/img/apresentacao_p01.png)

---

## O Problema, a Solução e a Trilha Gamificada

| O Custo Real do No-Show | Engajamento pelo Positivo |
| :---: | :---: |
| ![Problema No-Show](docs/img/apresentacao_p02.png) | ![Solução CAREinho](docs/img/apresentacao_p03.png) |

| Funcionalidades do MVP | A Trilha do Cuidado (Gamificação) |
| :---: | :---: |
| ![Funcionalidades MVP](docs/img/apresentacao_p04.png) | ![Trilha do Cuidado](docs/img/apresentacao_p05.png) |

---

## Protótipo de Interface e Modelagem de Banco de Dados

### Protótipo Navegável das Telas
![Protótipo Jornada do Cuidado](docs/img/prototipo_p01.png)

### Modelo Lógico Relacional (MER)
![Modelo Lógico Jornada do Cuidado](docs/img/modelo_logico_p01.png)

---

## Estrutura do Repositório

- [`Challenge sprint 2/`](Challenge%20sprint%202): Aplicação Web Front-End construída com **React 18**, **Vite**, **Tailwind CSS** e integração com **Google OAuth (`@react-oauth/google`)**.
- [`MER challenge proj Jornada do cuidado/`](MER%20challenge%20proj%20Jornada%20do%20cuidado): Projeto completo de modelagem de dados no Oracle SQL Developer Data Modeler (`.dmd`).
- Documentações das etapas (`Etapa 1`, `Etapa 2 Modelo Lógico`, `Etapa 3 Protótipo` e `Apresentação CAREinho`).

---

## Como Executar a Aplicação React

```bash
cd "Challenge sprint 2"
npm install
npm run dev
```
A aplicação ficará disponível em `http://localhost:5173`.
