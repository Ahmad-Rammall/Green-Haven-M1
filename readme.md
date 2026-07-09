# Green Haven

Green Haven is a plant-centered full-stack application developed as part of a Master 1 academic project. The project provides a complete digital ecosystem for plant lovers by combining plant identification, plant care assistance, a personal virtual garden, social interaction, live chat, and a marketplace for plant-related products.

The system is composed of three main parts:

- **Mobile Application** for users and sellers
- **Desktop Administration Panel** for administrators
- **Backend Server** connected to a cloud-hosted database

---

## Project Links

| Resource | Link |
|---|---|
| Admin Panel | https://www.greenhaven-admin.netlify.app |
| Backend Server | https://green-haven-m1.onrender.com |
| APK Download | https://drive.google.com/drive/u/5/folders/1iPG85x53lrHCU9lzjDkOGndINNzRaXzb |
| Database Hosting | MongoDB Atlas |

---

## Main Features

### Mobile Application

The mobile application is the main user-facing part of Green Haven. It allows users to interact with the platform through a simple and practical plant-centered experience.

Main mobile features include:

- User registration and login
- Plant identification from images
- Plant care assistance using an AI chatbot
- Personal virtual garden
- Posts and social interaction
- Real-time live chat
- Marketplace browsing
- Product ordering
- Seller product management
- Seller order tracking

### Admin Panel

The administration panel allows administrators to supervise and manage the platform from a desktop interface.

Admin panel features include:

- User management
- Post management
- Product management

### Backend Server

The backend server connects the mobile application, admin panel, database, and external services. It provides REST APIs for authentication, users, plants, posts, products, orders, images, chat, and administration features.

Backend features include:

- REST API development
- Authentication and authorization
- Role-based access control
- Cloudinary image storage integration
- External API integration
- Admin management routes

---

## Technologies Used

### Mobile Application

- React Native
- Expo
- JavaScript

### Admin Panel

- Electron
- React
- Vite
- Netlify hosting

### Backend Server

- Node.js
- Express.js
- MongoDB
- Render deployment

### Database

- MongoDB Atlas

### External Services

- Plant.id for plant recognition
- Google Gemini for plant-focused AI assistance
- Stream Chat for real-time communication
- Cloudinary for online image storage

---

## Deployment

### Backend Deployment

The backend server is deployed on Render.

Backend URL:

```text
https://green-haven-m1.onrender.com
```

### Database Deployment

The project database is hosted on MongoDB Atlas, which allows the backend server to connect to a cloud database instead of relying on a local MongoDB installation.

### Admin Panel Deployment

The admin panel is hosted on Netlify.

Admin panel URL:

```text
https://www.greenhaven-admin.netlify.app
```

### Mobile APK

An APK version of the mobile application was generated to allow Android installation and testing.

APK download link:

```text
https://expo.dev/accounts/ahmad.123/projects/green-haven-frontend/builds/0ad7040b-992c4664-be97-b38171318fa0
```

---

## Installation and Setup

The project is divided into three main folders: the mobile application, the admin panel, and the backend server.

### Backend Setup

```bash
cd green-haven-backend
npm install
npm start
```

The backend requires environment variables such as the database connection string, authentication secret, API keys, and external service credentials.

Example environment variables:

```env
MONGODB_URL=your_mongodb_atlas_connection_string
JWT_SECRET=your_jwt_secret
PLANT_API_KEY=your_plant_id_api_key
GOOGLE_API=your_google_gemini_api_key
STREAM_KEY=your_stream_chat_key
STREAM_SECRET=your_stream_chat_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

### Mobile Application Setup

```bash
cd green-haven-frontend
npm install
npx expo start
```

For Android testing, the generated APK can be installed directly on an Android device.

```env
API_HOST=your_api_host
PUBLIC_FOLDER=your_api_host/images/
STREAM_KEY=your_stream_chat_key
GOOGLE_API=your_google_gemini_api_key
PLANT_API_KEY=your_plant_id_api_key
```

### Admin Panel Setup

```bash
cd admin
npm install
npm run dev

cd frontend
npm install
npm run dev
```

To build the admin panel for production:

```bash
npm run build
```

```env
VITE_REACT_APP_API_HOST=your_api_host
VITE_REACT_APP_PUBLIC_FOLDER=your_api_host/images/
```

---

## Future Improvements

Possible future improvements for Green Haven include:

- Improving the recommendation system for plant care
- Adding more advanced marketplace features
- Adding payment integration
- Improving notification features
- Expanding the admin dashboard with more statistics
- Adding IoT support using Arduino sensors for soil moisture, water level, air quality, and light detection
- Improving performance, security, and production deployment configuration