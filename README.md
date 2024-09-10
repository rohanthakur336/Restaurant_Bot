# Restaurant Web App Backend

## Overview

This project is a backend service for a restaurant web application developed using Node.js. It provides a RESTful API for functionalities such as restaurant discovery, menu browsing, reservations, and order management. The backend also supports secure payment processing and user authentication.

## Features

- **Restaurant Discovery:** API endpoints to search and discover restaurants based on location, cuisine, and other filters.
- **Menu Browsing:** Endpoints to retrieve menu details for specific restaurants.
- **Reservations:** API support for booking tables at restaurants.
- **Order Management:** Endpoints for placing and managing orders.
- **User Authentication:** Secure user registration and login endpoints.
- **Secure Payments:** API integration with payment gateways to handle transactions.

## Technology Stack

- **Backend:** Node.js
- **Database:** MongoDB
- **API Documentation:** Postman

## Database

- **MongoDB:** Utilized for scalable data management, including storage and retrieval of restaurant data, user profiles, and transaction records.

## Setup and Installation

### Prerequisites

- Node.js (v14.x or higher)
- MongoDB (Ensure that you have a running MongoDB instance)
- Postman (For API testing)

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/rohanthakur336/Restaurant_Bot.git
    ```

2. Navigate to the project directory:

    ```bash
    cd food-app
    ```

3. Install the required dependencies:

    ```bash
    npm install
    ```

4. Set up environment variables by creating a `.env` file in the root directory:

    ```bash
    touch .env
    ```

   Add your environment variables (e.g., MongoDB URI, API keys, JWT secret) to the `.env` file.

5. Start the application:

    ```bash
    npm start
    ```
## Usage

### API Testing with Postman

1. **Import the Postman Collection:**
   - Import the provided Postman collection into your Postman app. The collection includes all necessary requests for testing the API endpoints.

2. **Base URL:**
   - Set the base URL to `http://localhost:8080/api/v1` in your Postman environment settings.

3. **Available Endpoints:**
   - **User Authentication:**
     - `POST /auth/register` - Register a new user.
     - `POST /auth/login` - Log in as an existing user.
   - **Restaurant Discovery:**
     - `GET /restaurants` - Retrieve a list of restaurants.
     - `GET /restaurants/:id` - Retrieve details of a specific restaurant.
   - **Menu Browsing:**
     - `GET /restaurants/:id/menu` - Retrieve the menu for a specific restaurant.
   - **Reservations:**
     - `POST /reservations` - Make a reservation at a restaurant.
     - `GET /reservations/:id` - Retrieve details of a specific reservation.
   - **Order Management:**
     - `POST /orders` - Place an order at a restaurant.
     - `GET /orders/:id` - Retrieve details of a specific order.
   - **Payments:**
     - `POST /payments` - Process a payment.

4. **Testing the API:**
   - **Login Example:**
     - URL: `http://localhost:8080/api/v1/auth/login`
     - Method: `POST`
     - Body (JSON):
       ```json
       {
         "email": "user@example.com",
         "password": "yourpassword"
       }
       ```
     - Use Postman to send a POST request to the above URL to log in.
   - **Other Requests:**
     - Use the endpoints provided in the list above to interact with the API. You can create, retrieve, update, and delete resources using the corresponding HTTP methods (GET, POST, etc.).

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
