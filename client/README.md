# Movie Explorer

This project is a full-stack web application called Movie Explorer. It allows users to search for movies by title, view detailed information, and interact with an external movie database API to retrieve movie data.

## Features
- **Search Functionality**: Users can search for movies by title.
- **Movie Details**: Display basic information like title, year, and poster image.
- **API Integration**: Utilize the OMDb API to retrieve movie information.
- **User Interface**: A user-friendly interface with search input fields and movie listings.

## Technologies Used
### Front-end
- React
- React Router
- Axios
- CSS

### Back-end
- Node.js
- Express
- Mongoose
- CORS

## Installation

1. **Clone the repository**:
    ```sh
    git clone https://github.com/your-username/movie-explorer.git
    cd movie-explorer
    ```

2. **Set up the server**:
    - Navigate to the `server` directory:
        ```sh
        cd server
        ```
    - Install server dependencies:
        ```sh
        npm install
        ```
    - Create a `.env` file in the `server` directory and add your OMDb API key:
        ```
        OMDB_API_KEY=your_omdb_api_key
        ```
    - Start the server:
        ```sh
        npm start
        ```

3. **Set up the client**:
    - Navigate to the `client` directory:
        ```sh
        cd ../client
        ```
    - Install client dependencies:
        ```sh
        npm install
        ```
    - Start the client:
        ```sh
        npm start
        ```

## Usage

1. Open your web browser and go to `http://localhost:3000`.
2. Use the search bar to look for movies by title.
3. Click on a movie to view detailed information.

## API Integration

The application integrates with the OMDb API to fetch movie data. The server handles API requests and responses, ensuring efficient data retrieval and error handling.

### Example API Endpoints:
- **Search Movies**: `GET /api/movies/search?title={title}`
- **Movie Details**: `GET /api/movies/details/{id}`

## Assumptions

- The OMDb API is used for movie data retrieval.
- Basic error handling is implemented for API requests.
- The application does not include advanced features like user ratings or movie trailers, but these can be added as enhancements.

## Development Process

1. Set up the project structure with separate client and server directories.
2. Developed the React components for the user interface.
3. Implemented API integration in the Express server.
4. Added styling and ensured the application is responsive.
5. Tested the application to ensure functionality and fixed any bugs.

## Conclusion

This project demonstrates a full-stack web application that interacts with an external API to provide movie information. The code is well-structured and documented, ensuring easy maintenance and scalability.

---

