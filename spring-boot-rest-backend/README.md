
# 🧩 Spring Boot REST API with PostgreSQL

This is a simple and secure RESTful API built with Spring Boot. It demonstrates user registration, Basic Authentication, and integration with a PostgreSQL database using Spring Data JPA. It is ideal for beginners looking to learn how to build secure backend services with Spring Boot.

---

## 📌 Features

- ✅ User registration (`POST /register`)
- ✅ Public endpoint (`GET /greet`)
- ✅ PostgreSQL database with Spring Data JPA
- ✅ Basic Authentication using Spring Security
- ✅ Clean code using Lombok
- ✅ Maven for dependency management

---

## 🗂 Project Structure

```
spring-boot-rest/
├── src/
│   └── main/
│       └── java/com/learning/springbootrest/
│           ├── controller/       # REST Controllers
│           ├── model/            # Entity classes
│           ├── repo/             # JPA Repositories
│           └── service/          # Business logic
├── resources/
│   └── application.properties    # Configuration
├── pom.xml                       # Maven dependencies
└── README.md
```

---

## 🧪 API Endpoints

| Method | Endpoint      | Description                | Auth Required |
|--------|---------------|----------------------------|---------------|
| `GET`  | `/greet`      | Public greeting endpoint   | ❌ No         |
| `POST` | `/register`   | Register a new user        | ✅ Yes        |

---

## 📥 Request/Response Samples

### 🔐 Register User

**URL:** `POST http://localhost:8080/register`

**Headers:**
- `Content-Type: application/json`
- Basic Auth: `user:user`

**Body:**
```json
{
  "id": 1,
  "username": "john",
  "password": "password123"
}
```

---

### 📤 Sample Response

```json
{
  "id": 1,
  "username": "john",
  "password": "password123"
}
```

---

## ⚙️ Security

- Enabled **Basic Authentication** via Spring Security.
- Default credentials (configurable in `application.properties`):

```properties
spring.security.user.name=user
spring.security.user.password=user
```

Use Basic Auth in Postman or Curl for protected endpoints like `/register`.

---

## 🧩 Database Configuration

Ensure PostgreSQL is installed and running.

Update your `application.properties` with correct credentials:

```properties
spring.datasource.driver-class-name=org.postgresql.Driver
spring.datasource.url=jdbc:postgresql://localhost:5432/jobportaldb
spring.datasource.username=postgres
spring.datasource.password=0000

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
```

---

## ▶️ Running the Project

```bash
# Clone the repository
git clone <repo-url>

# Navigate to the folder
cd spring-boot-rest

# Run with Maven
./mvnw spring-boot:run
```

Application will be available at:  
👉 `http://localhost:8080`

---

## 📬 Contact

**Mohan Lal**  
GitHub: [@mhnuk2007](https://github.com/mhnuk2007)  
LinkedIn: [linkedin.com/in/mohan-lal-b79790126](https://www.linkedin.com/in/mohan-lal-b79790126/)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

> Feel free to fork, contribute, or use this as a base for your own secure backend services!
