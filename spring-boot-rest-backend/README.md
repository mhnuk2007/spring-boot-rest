# 🚀 Spring Boot REST API - Job Portal Backend


This is the backend REST API for a Job Portal Application built with **Spring Boot**.

---

## 📦 Technologies
- Java 21
- Spring Boot 3.5.3
- Spring Web
- Spring Data JPA
- PostgreSQL
- Lombok
- AOP (Aspect-Oriented Programming) for logging, performance monitoring, and validation

---

## ✅ Features
- RESTful API for CRUD operations on job posts
- Keyword search across job profile and description
- Data persistence with PostgreSQL
- CORS enabled for frontend integration
- AOP-based logging of service method calls
- AOP-based performance monitoring of service methods
- AOP-based validation for job ID normalization
- Sample data loader endpoint

---

## 📁 Project Structure
```
spring-boot-rest-backend/
├── controller/
├── model/
├── repo/
├── service/
├── aop/
└── resources/
```

---
## 🔗 API Endpoints

| Method | Endpoint                    | Description                        |
|--------|-----------------------------|------------------------------------|
| GET    | `/jobPosts`                 | Get all job posts                  |
| GET    | `/jobPost/{postId}`         | Get single job post by ID          |
| GET    | `/jobPosts/keyword/{keyword}` | Search job posts by keyword        |
| POST   | `/jobPost`                  | Create a new job post              |
| PUT    | `/jobPost`                  | Update an existing job post        |
| DELETE | `/jobPost/{postId}`         | Delete a job post by ID            |
| GET    | `/load`                     | Load sample job posts              |

---

## 🛠️ Improvements & Fixes
- Added ValidationAspect: normalizes negative job IDs to positive before service logic.
- Added PerformanceAspect: logs execution time for getJob service method.
- LoggingAspect improved: logs method calls, returns, exceptions for all JobService methods.
- Fixed search functionality: repository method typo, correct parameter usage, and service/controller integration.
- Ensured type compatibility for tech stack: changed String[] to List<String> in service layer.
- Application verified to start and run on port 8080.

---

## ⚙️ Configuration

Configure your PostgreSQL database in `src/main/resources/application.properties`:
```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/jobportaldb
spring.datasource.username=postgres
spring.datasource.password=YOUR_PASSWORD
```

---
## ▶️ Run Locally

```bash
./mvnw spring-boot:run
```

---

## 🧑‍💻 Author
- GitHub: [mhnuk2007](https://github.com/mhnuk2007)
