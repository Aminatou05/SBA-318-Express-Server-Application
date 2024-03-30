# SBA-318-Express-Server-Application
Creating  a server application using  Node and Express.
This is a simple server application built with Node.js and Express. It includes a 
RESTful API for managing users, middleware for logging requests, 
and uses the EJS template engine to render views.

API Endpoints
GET /api/users: Get all users
GET /api/users/:id: Get a single user by ID
POST /api/users: Add a new user
PUT /api/users/:id: Update a user by ID
DELETE /api/users/:id: Delete a user by ID
Views
GET /: Renders the home page using EJS template engine
GET /add-user: Renders a form to add a new user
POST /add-user: Submits the form to add a new user and redirects to the users list
Middleware
Request logging middleware logs HTTP method and URL of each request
Technologies Used
Node.js
Express
EJS (Embedded JavaScript) for templating
Last step 
I adde a new page and That page navigates to a  real state website called  "Lenco Realty" and used simple CSS to style the rendered views.
  