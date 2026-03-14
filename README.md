# User Registration System (React.js + PHP + MySQL)

A simple full-stack registration application where users can sign up. The project handles duplicate email validation and provides real-time feedback.

## 🚀 Features
* **Frontend:** React.js with functional components and Axios for API calls.
* **Backend:** PHP (REST API) for handling requests.
* **Database:** MySQL for secure data storage.
* **Validation:** Checks for empty fields and duplicate email entries.

## 🛠️ Tech Stack
* **Frontend:** React.js, CSS
* **Backend:** PHP, XAMPP/Apache
* **Database:** MySQL

## ⚙️ Setup Instructions

### 1. Database Setup
* Open **phpMyAdmin**.
* Create a database named `my_db`.
* Create a table named `user` with the following columns:
    * `id` (INT, Auto Increment, Primary Key)
    * `name` (VARCHAR)
    * `email` (VARCHAR, UNIQUE)
    * `password` (VARCHAR)

### 2. Backend Setup
* Place your `auth_api` folder inside the `htdocs` directory of your XAMPP installation.
* Ensure the database connection settings in `login.php` match your local environment.

### 3. Frontend Setup
* Navigate to the React project folder.
* Run `npm install` to install dependencies.
* Run `npm start` to launch the application.

## 📝 License
This project is open-source and free to use.
