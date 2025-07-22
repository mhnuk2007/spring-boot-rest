# 🧩 Full Stack Job Post Application
This project is a full-stack Job Post application with a \*\*Spring Boot\*\* backend and a \*\*React (Vite)\*\* frontend. It demonstrates CRUD operations for job postings using a RESTful API and a modern React UI.

---

## 📁 Project Structure
```

spring-boot-rest/
├── spring-boot-rest-backend/   # Spring Boot backend
└── spring-boot-rest-frontend/  # React frontend (Vite)

```
---
## ✅ Features
- Full CRUD operations on job posts
- REST API with Spring Boot
- Vite + React frontend
- CORS enabled for local development
- JSON-based communication between frontend and backend
---

## 🚀 Getting Started
### 1. Clone the repository

```bash
git clone https://github.com/mhnuk2007/spring-boot-rest.git
cd spring-boot-rest
```
### 2. Run the backend

```bash
cd spring-boot-rest-backend
./mvnw spring-boot:run

```
### 3. Run the frontend

```bash

cd ../spring-boot-rest-frontend

npm install

npm run dev

```
---

## 🔗 Endpoints

| Method | Endpoint           | Description          |
|--------|--------------------|----------------------|
| GET    | `/jobPosts`        | Get all job posts    |
| GET    | `/jobPost/{id}`    | Get single job post  |
| POST   | `/jobPost`         | Create job post      |
| PUT    | `/jobPost`         | Update job post      |
| DELETE | `/jobPost/{id}`    | Delete job post      |
---

## 📦 Tech Stack
- \*\*Backend\*\*: Java, Spring Boot, Spring Data JPA
- \*\*Frontend\*\*: React, Vite, Axios
- \*\*Build Tool\*\*: Maven
- \*\*Database\*\*: List
---

## 🧑‍💻 Author

- LinkedIn: \[Mohan Lal](https://www.linkedin.com/in/mohan-lal-b79790126/)
- GitHub: \[mhnuk2007](https://github.com/mhnuk2007)





