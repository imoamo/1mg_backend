# Tata 1mg_backend

## Project Overview
`Tata 1mg_backend` is a Node.js-based backend project that supports an e-commerce platform. It provides functionalities for user authentication, cart management, and dynamic routing. The backend is built using Express.js, with MongoDB as the database, and JWT for authentication.

## Technologies Used
- **Node.js**: JavaScript runtime
- **Express.js**: Web framework for Node.js
- **bcrypt**: Library for hashing passwords
- **JSON Web Token (JWT)**: For user authentication
- **MongoDB**: NoSQL database
- **Mongoose**: ODM for MongoDB

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/imoamo/1mg_backend.git

2.Navigate to the project directory
cd 1mg_backend

3.Install the dependencies
npm install

API Endpoints
Auth Routes
Signup

URL: /api/auth/signup
Method: POST
Description: Creates a new user account.
Request Body: { "name": "string", "email": "string", "password": "string" }
Response: { "message": "User created successfully", "user": user }
Login

URL: /api/user/login
Method: POST
Description: Logs in a user and returns a JWT token.
Request Body: { "email": "string", "password": "string" }
Response: { "token": "JWT token" }
User Routes
Get User Profile
URL: /api/user/:id
Method: GET
Description: Fetches user profile details.
Response: { "user": user }

Product Routes
Add to Cart

URL: /api/product/create
Method: POST
Description: Adds a product to the user's cart.
Request Body: { "productId": "string", "quantity": "number" }
Response: { "message": "Product added to cart", "cart": cart }
Remove from Cart

URL: /api/Product/delete/:id
Method: Delete
Description: Removes a product from the user's cart.
Request Body: { "productId": "string" }
Response: { "message": "Product removed from cart", "cart": cart }

Get Cart
URL: /api/product/
Method: GET
Description: Fetches the user's cart.
Response: { "cart": cart }
Dynamic Routing
This backend supports dynamic routing based on user ID and other dynamic parameters, allowing personalized data retrieval.

Middleware
Authentication Middleware: Verifies JWT tokens and protects routes.
Error Handling Middleware: Centralized error handling for the application.
Error Handling
The application uses a global error handler to manage different types of errors, ensuring a consistent error response structure.

Security
Password Hashing: User passwords are hashed using bcrypt.
JWT: JSON Web Tokens are used for secure authentication.
