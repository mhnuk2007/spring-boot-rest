\# 🚀 Spring Boot REST API - Job Post Application



This is the backend REST API of the Job Post Application built with \*\*Spring Boot\*\*.



---



\## 📦 Technologies



\- Java

\- Spring Boot

\- Spring Web

\- Spring Data JPA

\- H2 Database



---



\## ✅ Features



\- RESTful API for CRUD operations

\- Data access using Spring Data JPA

\- In-memory H2 DB (can be configured for others)

\- Tested via Postman



---



\## 📁 Project Structure



```

spring-boot-rest-backend/

├── controller/

├── model/

├── repository/

└── service/

```



---



\## 🔗 API Endpoints



| Method | Endpoint           | Description          |

|--------|--------------------|----------------------|

| GET    | `/jobPosts`        | Get all job posts    |

| GET    | `/jobPost/{id}`    | Get single job post  |

| POST   | `/jobPost`         | Create job post      |

| PUT    | `/jobPost`         | Update job post      |

| DELETE | `/jobPost/{id}`    | Delete job post      |



---



\## ▶️ Run Locally



```bash

./mvnw spring-boot:run

```



---



\## 🧑‍💻 Author



\- GitHub: \[mhnuk2007](https://github.com/mhnuk2007)



