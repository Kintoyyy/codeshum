# CodeShum

**Project Overview:**

CodeShum is a personal project inspired by the original [CodeChum](https://codechum.com/). Created for fun and as a self-challenge, this project aims to replicate the features and functionality of CodeChum, providing a platform for coding challenges and enhancing my programming skills. CodeShum combines both the frontend and backend components into a single repository, offering a seamless development and deployment experience.

**Features:**

- **Challenge Library:** Explore a variety of coding challenges similar to those on CodeChum, categorized by difficulty and topic.
- **Code Playground:** Test your coding skills with a sandbox environment for experimenting with algorithms and code snippets.
- **Progress Tracking:** Keep track of your progress and monitor the challenges you’ve solved.
- **Community Interaction:** Engage with others by sharing solutions and discussing coding challenges.
- **Real-time Terminal:** Use WebSocket to create a live terminal experience, allowing users to run code and receive instant feedback.
- **User Management:** Implement user authentication and profile management to track progress and achievements.
- **Data Persistence:** Store user data and challenge information in MongoDB for reliable data management.

**Technologies Used:**

- **Frontend:** React, shadcn/ui
- **Backend:** Express.js
- **Database:** MongoDB
- **Real-time Communication:** WebSocket
- **Full-stack Framework:** Next.js (for frontend and API routes)

---

## Getting Started

### Local Development

To get started with CodeShum locally, follow these steps:

1. Clone the repository:  
   `git clone https://github.com/kintoyyy/codeshum.git`
2. Navigate to the project directory:  
   `cd codeshum`
3. Install dependencies:  
   `npm install` (or `yarn install`)
4. Configure environment variables:  
   Create a `.env` file in the root directory and populate it with the necessary variables. Refer to the `.env.example` file for the required structure.
5. Start the development server:  
   `npm run dev` (or `yarn dev`)

The frontend will be served on `http://localhost:3000`, and the backend API will be available at `http://localhost:3000/api`.

---

### Docker Deployment with Docker Compose

CodeShum can be easily deployed using Docker Compose, which simplifies the process of running multiple containers (e.g., the application and MongoDB) together. Follow these steps:

1. **Install Docker and Docker Compose:**  
   Ensure Docker and Docker Compose are installed on your system. You can download Docker from [here](https://www.docker.com/get-started). Docker Compose is included with Docker Desktop for Windows and macOS, or you can install it separately on Linux.
   ```

2. **Run Docker Compose:**  
   Navigate to the root directory of the project and run the following command to start the application and MongoDB:
   ```bash
   docker-compose up --build
   ```
   This command will:
   - Build the Docker image for the CodeShum application.
   - Start the MongoDB container.
   - Start the CodeShum application container.

3. **Access the Application:**  
   Once the containers are running, open your browser and navigate to `http://localhost:3000` to access the CodeShum application.

4. **Stop the Containers:**  
   To stop the containers, press `Ctrl+C` in the terminal or run the following command in the project directory:
   ```bash
   docker-compose down
   ```

---

### Docker Compose File (`docker-compose.yml`)

Here’s an example of the `docker-compose.yml` file used for this setup:

```yaml
version: "3.8"

services:
  backend:
    image: codeshum-backend:latest
    container_name: codeshum-backend
    build:
      context: ./backend
      dockerfile: backend.Dockerfile
    ports:
      - "5000:5000"
    environment:
      - NODE_ENV=production
      - MONGO_URI=mongodb://mongo:27017/mydatabase
      - FRONTEND_URL=http://frontend:3000
    depends_on:
      - mongo
    command: ["node", "app.js"]
    networks:
      - codeshum_network

  frontend:
    image: codeshum-frontend:latest
    container_name: codeshum-frontend
    build:
      context: .
      dockerfile: frontend.Dockerfile
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - BACKEND_URL=http://backend:5000
    depends_on:
      - backend
    command: ["npm", "start"]
    networks:
      - codeshum_network

  mongo:
    image: mongo:7.0
    container_name: mongodb
    ports:
      - "27017:27017"
    volumes:
      - mongo-data:/data/db
    environment:
      - MONGO_INITDB_ROOT_USERNAME=admin
      - MONGO_INITDB_ROOT_PASSWORD=secret
    networks:
      - codeshum_network

volumes:
  mongo-data:

networks:
  codeshum_network:
    driver: bridge

```

---

## Contributing

While CodeShum is inspired by the original CodeChum, any contributions or suggestions for improvements are welcome! Please submit a pull request or open an issue to discuss potential updates.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Contact

For questions, feedback, or support, contact Kent Rato via email at kent.oyyyyyyyy@gmail.com.

---