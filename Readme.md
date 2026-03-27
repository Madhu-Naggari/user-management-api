🚀 User Management API

A RESTful API built using Node.js, Express, and Prisma ORM (SQLite) that allows full user management with advanced features like search, sorting, and partial updates.

⸻

📌 Features
• ✅ Create, Read, Update, Delete (CRUD) users
• 🔍 Search users by name or email
• ↕️ Sort users (ascending/descending)
• ✏️ Partial updates using PATCH
• 🗂️ Clean and scalable folder structure
• ⚡ Fast and lightweight with SQLite

⸻

🛠️ Tech Stack
• Backend: Node.js, Express
• Database: SQLite
• ORM: Prisma

⸻

📁 Project Structure

user-management-api/
├── prisma/
├── src/
│ ├── controllers/
│ ├── routes/
│ ├── db/
│ └── app.js
├── package.json
└── README.md

⸻

⚙️ Installation & Setup

1. Clone the repository

git clone https://github.com/Madhu-Naggari/user-management-api.git
cd user-management-api

2. Install dependencies

npm install

3. Setup database

npx prisma generate
npx prisma migrate dev --name init

4. Run the server

npm run dev

Server will start at:

http://localhost:3000

⸻

📡 API Endpoints

🔹 Get all users

GET /users

🔹 Get user by ID

GET /users/:id

🔹 Create user

POST /users

🔹 Update user (full)

PUT /users/:id

🔹 Update user (partial)

PATCH /users/:id

🔹 Delete user

DELETE /users/:id

⸻

🔍 Query Parameters
• search → Search by name/email
• sort → Sort field (name, id, etc.)
• order → asc / desc

Example:

GET /users?search=madhu&sort=name&order=asc

⸻

🧪 Sample Request

Create User

{
"name": "Madhu",
"email": "madhu@gmail.com",
"age": 22
}

⸻

🌍 Deployment

This project can be deployed on platforms like Railway or Render.

Note: SQLite is used for simplicity. In production, PostgreSQL or another scalable database is recommended.

⸻

👨‍💻 Author

Madhu Sudhan Naggari

⸻

⭐ Acknowledgement

This project was built as part of a backend engineering assignment to demonstrate REST API design and development skills.
