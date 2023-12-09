# Taxi Booking App Backend

This repository contains the backend implementation for the Taxi Booking application.

## Technology Stack

- **Architecture**: Follows the Clean Architecture principles for a structured and maintainable codebase.
- **Language**: Implemented using TypeScript instead of JavaScript to leverage strong typing and better development experience.
- **Database**: MongoDB was chosen as the database solution for storing application data.
- **Security**: Utilized [bcrypt](https://www.npmjs.com/package/bcrypt) for secure password hashing and storage.
- **Framework**: Developed using [Express](https://expressjs.com/), a minimal and flexible Node.js web application framework, for building the API endpoints and handling HTTP requests.

## Clean Architecture

The backend codebase is organized using the Clean Architecture approach, which emphasizes separation of concerns and independence of frameworks and libraries. It consists of distinct layers:

- **Use Cases**: Contain application-specific business rules and use case logic.
- **Repositories**: Abstract database interactions, providing an interface for data access.
- **Controllers/Routers**: Handle incoming HTTP requests, interact with use cases, and return appropriate responses.

## Setup

To set up and run the backend server locally:

1. Clone this repository.
2. Install dependencies using `npm install`.
3. Set up your MongoDB database and configure connection settings in the project.
4. Run the server using `npm start`.

## API Endpoints

The backend provides various API endpoints for handling user authentication, ride bookings, user/driver interactions, etc. Each endpoint performs specific functions related to the Taxi Booking application.

---
