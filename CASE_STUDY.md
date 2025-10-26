
# Project Case Study: Weather Dashboard

## Project Overview

This project is a sleek and responsive Weather Dashboard application that provides users with real-time weather information for any city in the world. It is built with a modern tech stack, featuring a Node.js backend that serves a dynamic frontend built with HTML, CSS, and vanilla JavaScript. The application is designed with a focus on user experience, providing a clean, intuitive interface and visually appealing animations.

## Key Features

*   **Node.js & Express Backend**: A lightweight and efficient backend server built with Node.js and Express, responsible for serving the frontend application and handling API requests.
*   **RESTful API Endpoint**: Implements a `/weather` endpoint that securely communicates with the OpenWeatherMap API to fetch weather data. It handles user location queries and manages the API key securely using environment variables.
*   **Dynamic Frontend**: The user interface is built with HTML, CSS, and vanilla JavaScript. It allows users to search for a city and dynamically updates the display with the current temperature, weather description, humidity, and wind speed without needing to reload the page.
*   **Responsive & Modern UI/UX**: The application features a "glassmorphism" design for the weather card, creating a modern and visually appealing look. It is fully responsive and adapts to different screen sizes, providing a seamless experience on both desktop and mobile devices.
*   **Dynamic Styling**: The background and icons of the weather card change dynamically based on the current weather conditions (e.g., Clear, Clouds, Rain, Snow), enhancing the user experience.
*   **Secure API Key Management**: Utilizes the `dotenv` package to manage the OpenWeatherMap API key, keeping sensitive information out of the version-controlled code.
*   **Efficient Data Fetching**: Uses `axios` on the backend to make asynchronous HTTP requests to the external weather API, ensuring non-blocking operations.

## Learning Outcomes

This project demonstrates proficiency in the following areas:

*   **Full-Stack Application Development**: Building a complete web application with a separate backend and frontend.
*   **Backend Development with Node.js**: Creating a server, routing, and handling API requests using Node.js and Express.
*   **Frontend Development**: Manipulating the DOM, handling user events, and making asynchronous API calls (using `fetch`) with vanilla JavaScript.
*   **API Integration**: Consuming data from a third-party RESTful API (OpenWeatherMap).
*   **Modern CSS Techniques**: Implementing responsive design using media queries, and creating modern UI effects like gradients, animations, and backdrop-filter.
*   **Development Best Practices**: Managing environment variables for secure configuration and serving static files with Express.
