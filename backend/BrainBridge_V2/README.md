

# BrainBridge

A full-stack web application built with Spring Boot and React, designed to facilitate collaboration and project management.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Development](#development)
- [Contributing](#contributing)
- [License](#license)

## 🎯 Overview

BrainBridge is a collaborative platform that enables users to manage projects, share ideas, and track analytics. The application follows a modern microservices architecture with a RESTful backend API and a responsive React frontend.

## ✨ Features

- **User Management**: User registration, authentication, and profile management
- **Project Management**: Create, update, and manage projects
- **Comments System**: Add and manage comments on projects
- **Analytics**: Track and analyze project metrics and user engagement
- **File Upload**: Support for file uploads via Cloudinary integration
- **Email Notifications**: Email functionality for user communications
- **JWT Authentication**: Secure authentication using JSON Web Tokens

## 🛠 Tech Stack

### Backend
- **Java 21**: Programming language
- **Spring Boot 4.0.0**: Application framework
- **Maven**: Build tool and dependency management
- **JWT**: Authentication and authorization
- **Spring Mail**: Email functionality
- **Cloudinary**: Cloud-based image and file management

### Frontend
- **React 19.2.0**: UI library
- **TypeScript 5.9.3**: Type-safe JavaScript
- **Vite 7.2.4**: Build tool and development server
- **ESLint**: Code linting

## 📁 Project Structure

```
BrainBridge/
├── Backend/
│   └── brainbridge/
│       └── brainbridge/
│           ├── src/
│           │   ├── main/
│           │   │   ├── java/com/learn/brainbridge/
│           │   │   │   ├── controllers/      # REST API controllers
│           │   │   │   ├── entity/           # JPA entities
│           │   │   │   ├── dtos/             # Data Transfer Objects
│           │   │   │   ├── repository/        # Data access layer
│           │   │   │   ├── service/          # Business logic layer
│           │   │   │   ├── config/           # Configuration classes
│           │   │   │   ├── Exception/        # Exception handling
│           │   │   │   ├── Filters/          # Request/Response filters
│           │   │   │   ├── util/             # Utility classes
│           │   │   │   └── scheduler/        # Scheduled tasks
│           │   │   └── resources/
│           │   │       └── application.properties
│           │   └── test/                     # Test files
│           └── pom.xml
│
└── Frontend/
    └── BrainBridge-Frontend/
        ├── src/
        │   ├── components/    # React components
        │   ├── pages/         # Page components
        │   ├── store/         # State management
        │   ├── utils/         # Utility functions
        │   ├── App.tsx
        │   └── main.tsx
        ├── package.json
        └── vite.config.ts
```

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- **Java 21** or higher
- **Maven 3.6+**
- **Node.js 18+** and **npm** (or **yarn**)
- **Git**

## 🚀 Installation

### Backend Setup

1. Navigate to the backend directory:
```bash
cd Backend/brainbridge/brainbridge
```

2. Install dependencies using Maven:
```bash
mvn clean install
```

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd Frontend/BrainBridge-Frontend
```

2. Install dependencies:
```bash
npm install
```

## ⚙️ Configuration

### Backend Configuration

Edit `Backend/brainbridge/brainbridge/src/main/resources/application.properties`:

1. **Email Configuration**:
   - Set `spring.mail.username` and `spring.mail.password`
   - Or use environment variables: `MAIL_USERNAME` and `MAIL_PASSWORD`

2. **Cloudinary Configuration**:
   - Set `cloudinary.cloud-name`
   - Set `cloudinary.api-key`
   - Set `cloudinary.api-secret`

3. **JWT Secret**:
   - Set `jwt.secret.key` or use environment variable `JWT_SECRET`

4. **Application URLs**:
   - Configure `app.frontend.url`
   - Configure `app.base_url`
   - Configure `app.frontend.admin.url`

### Environment Variables

Create a `.env` file or set the following environment variables:

```bash
MAIL_USERNAME=your-email@gmail.com
MAIL_PASSWORD=your-app-password
JWT_SECRET=your-secret-key
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret
```

## 🏃 Running the Application

### Backend

1. Navigate to the backend directory:
```bash
cd Backend/brainbridge/brainbridge
```

2. Run the Spring Boot application:
```bash
mvn spring-boot:run
```

Or use the Maven wrapper:
```bash
./mvnw spring-boot:run
```

The backend will start on `http://localhost:8080` (default Spring Boot port).

### Frontend

1. Navigate to the frontend directory:
```bash
cd Frontend/BrainBridge-Frontend
```

2. Start the development server:
```bash
npm run dev
```

The frontend will start on `http://localhost:5173` (default Vite port).

## 📡 API Endpoints

The application includes the following main controllers:

- **UserController**: User management endpoints
- **ProjectController**: Project management endpoints
- **CommentController**: Comment management endpoints
- **AnalyticsController**: Analytics and metrics endpoints

> **Note**: Detailed API documentation will be available once the controllers are fully implemented.

## 💻 Development

### Backend Development

- The backend uses Spring Boot with Java 21
- Controllers are located in `controllers/` package
- Entities are defined in `entity/` package
- Services contain business logic in `service/` and `ServiceImpl/` packages
- DTOs are used for data transfer in `dtos/` package

### Frontend Development

- The frontend uses React with TypeScript
- Components are organized in `components/` directory
- Pages are in `pages/` directory
- State management is handled in `store/` directory
- Utility functions are in `utils/` directory

### Building for Production

**Backend**:
```bash
mvn clean package
```

**Frontend**:
```bash
npm run build
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is currently in development. License information will be added upon completion.

## 📧 Contact

For questions or support, please open an issue in the repository.

---

**Note**: This project is currently in active development. Some features may be incomplete or subject to change.

