## Base Node.js Project Template

A fully featured Node.js starter template, pre-configured with best practices for rapid development.

### Key Features

- **Modular Architecture**  
  Clean separation of concerns: routes, controllers, services, repositories, middleware, and utilities.
- **Environment Configuration**  
  Built-in support for environment variables via `.env` (powered by `dotenv`).
- **Database Migrations & Seeding**  
  Integrated with Sequelize CLI for versioned migrations and seed data.
- **Logging**  
  Easily configurable logging library for consistent, structured logs.
- **Extensible**  
  Ready to plug in additional libraries, tests, or CI/CD pipelines.

---

## Folder Structure

```
.
├── src
│   ├── config
│   │   └── server-config.js        # Environment & library configuration
│   ├── controllers                 # Business logic for each resource
│   ├── middleware                  # Request interceptors (validation, auth, etc.)
│   ├── repositories                # Database access layer
│   ├── routes                      # Route definitions and bindings
│   ├── services                    # Business logic (non-DB-related)
│   └── utils                       # Reusable helper functions
├── migrations                      # Sequelize migration scripts
├── seeders                         # Sequelize seed scripts
├── .env.example                    # Sample environment variables file
├── package.json
└── README.md
```

---

## Getting Started

1. **Clone the Repository**  
   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
   ```

2. **Install Dependencies**  
   ```bash
   npm install
   ```

3. **Environment Setup**  
   - Copy `.env.example` to `.env`  
   - Edit `.env` to configure your database credentials and any other variables.

4. **Configure Sequelize**  
   Inside `src/config/config.json`, update the database connection settings for each environment:

   ```jsonc
   {
     "development": {
       "username": "root",
       "password": null,
       "database": "database_development",
       "host": "127.0.0.1",
       "dialect": "mysql"
     },
     "test": {
       "username": "root",
       "password": null,
       "database": "database_test",
       "host": "127.0.0.1",
       "dialect": "mysql"
     },
     "production": {
       "username": "root",
       "password": null,
       "database": "database_production",
       "host": "127.0.0.1",
       "dialect": "mysql"
     }
   }
   ```

---

## Database Migrations & Seeding

- **Initialize Sequelize**  
  ```bash
  npx sequelize-cli init
  ```

- **Run Migrations**  
  ```bash
  npx sequelize-cli db:migrate
  ```

- **Seed the Database**  
  ```bash
  npx sequelize-cli db:seed:all
  ```

- **Undo Last Migration**  
  ```bash
  npx sequelize-cli db:migrate:undo
  ```

- **Undo All Migrations**  
  ```bash
  npx sequelize-cli db:migrate:undo:all
  ```

---

## Running the Server

- **Development Mode** (with hot-reload via Nodemon)  
  ```bash
  npm run dev
  ```

- **Production Mode**  
  ```bash
  npm start
  ```

---

## Contributing

1. Fork this repository.  
2. Create a feature branch: `git checkout -b feature/your-feature`  
3. Commit your changes: `git commit -m 'Add some feature'`  
4. Push to the branch: `git push origin feature/your-feature`  
5. Open a Pull Request.

---

## License

Distributed under the [MIT License](LICENSE). Feel free to use, modify, and distribute.

---

*Happy coding!*

