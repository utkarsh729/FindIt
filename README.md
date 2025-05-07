# FindIt - E-commerce Search & Product Details Application

A full-stack application that provides a searchable e-commerce product catalog with product details.

## Project Structure

- `src/` - Spring Boot backend
- `frontend/` - React frontend

## Features

### Backend
- REST API with product listing and details endpoints
- Search functionality for products by name and brand
- H2 in-memory database with 20+ sample products
- API documentation with Swagger/OpenAPI

### Frontend
- Responsive product search page
- Product details view
- Error handling with toast notifications
- Loading indicators for API calls

## Running the Application

### Backend

1. Make sure you have Java 21 and Maven installed
2. Run the Spring Boot application:

```bash
./mvnw spring-boot:run
```

3. The API will be available at `http://localhost:8080`
4. Swagger UI is available at `http://localhost:8080/swagger-ui.html`
5. H2 Console is available at `http://localhost:8080/h2-console`

### Frontend

1. Make sure you have Node.js and npm installed
2. Navigate to the frontend directory:

```bash
cd frontend
```

3. Install dependencies:

```bash
npm install
```

4. Run the development server:

```bash
npm start
```

5. The React app will be available at `http://localhost:3000`

## API Endpoints

- `GET /products` - Get all products (with optional `search` query parameter)
- `GET /products/{id}` - Get product details by ID

## Technologies Used

### Backend
- Spring Boot
- Spring Data JPA
- H2 Database
- SpringDoc OpenAPI (Swagger)

### Frontend
- React
- React Router
- Material UI
- Axios
- React Toastify 