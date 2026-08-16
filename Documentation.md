# Coffee Brew Log

## XPL Full-Stack Developer Bootcamp Assessment

Coffee Brew Log is a full-stack web application built for a micro-roastery to record and manage coffee brews.

The application allows users to:

- Create a new brew
- View all recorded brews
- Filter brews by brewing method
- Edit an existing brew
- Delete a brew
- Validate form input before submission

The project was developed as part of the XPL Full-Stack Developer Bootcamp assessment.

---

# 1. Project Overview

The Coffee Brew Log application provides a simple interface for recording information about coffee brews.

Each brew contains information such as:

- Coffee/bean name
- Brewing method
- Rating
- Tasting notes

The application uses a React frontend that communicates with a Node.js/Express backend through a JSON REST API.

The backend uses Prisma ORM to communicate with a PostgreSQL database hosted on Neon.

---

# 2. Technology Stack

## Frontend

- React
- Vite
- Tailwind CSS
- JavaScript
- HTML5
- CSS3

## Backend

- Node.js
- Express.js
- JavaScript
- REST API

## Database

- PostgreSQL
- Neon PostgreSQL

## ORM

- Prisma

## Development Tools

- Git
- GitHub
- npm
- VS Code
- Postman/Thunder Client for API testing

---

# 3. Project Structure

The repository is divided into separate frontend and backend folders as required by the assessment.

```text
full-stack-developer-bootcamp-lebogang-developer/
│
├── frontend/
│   ├── public/
│   │
│   ├── src/
│   │   ├── components/
│   │   │   ├── BrewCard.jsx
│   │   │   ├── BrewForm.jsx
│   │   │   ├── BrewList.jsx
│   │   │   └── FilterBar.jsx
│   │   │
│   │   ├── App.jsx
│   │   ├── brewService.js
│   │   ├── index.css
│   │   └── main.jsx
│   │
│   ├── package.json
│   ├── .env
│   └── .env.example
│
├── backend/
│   ├── prisma/
│   │   └── schema.prisma
│   │
│   ├── src/
│   │   ├── config/
│   │   │   └── db.js
│   │   │
│   │   ├── controllers/
│   │   │   └── brewController.js
│   │   │
│   │   ├── routes/
│   │   │   └── BrewRoutes.js
│   │   │
│   │   ├── services/
│   │   │   └── brewServices.js
│   │   │
│   │   ├── generated/
│   │   │   └── prisma/
│   │   │
│   │   ├── app.js
│   │   └── server.js
│   │
│   ├── package.json
│   ├── prisma.config.ts
│   ├── .env
│   └── .env.example
│
├── Documentation.md
├── deployment.md
└── .gitignore