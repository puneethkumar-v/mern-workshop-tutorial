# FULLSTACK WEB APPLICATION WORKSHOP


##  TECHNOLOGIES:

- FRONTEND:
    - REACT
    - MATERIAL UI
- BACKEND: 
    - NODE
    - EXPRESS
- DATABASE:
    - MONGODB

## TASKS:

- [x] Create Two Project Folders:

  - [x] backend
    - [x] create a package.json file using@mui/icons-material
          `npm init -y`
    - [x] install backend dependencies:
          `npm install express mongoose cors body-parser`
          `npm install -D nodemon`
    - [x] Create a index.js file as a main file
    - [x] Create a new command to run application
          `"start": "nodemon index.js"`
    - [x] Creating MongoDB Atlas Database
      - [x] Create CLuster on Atlas
      - [x] Create a Database
      - [x] Copy the DB_URL and paste it on the .env file
            `DB_URL="paste your Atlas url here`    
    - [x] Creating HTTPS requests:
        |   METHOD      |   API                             |   DESCRIPTION                 |
        |---------------|-----------------------------------|-------------------------------|
        |   GET         |  {{baseURL}}/getAllStudents       |   Getting All the students    |
        |   POST        |   {{baseURL}}/student             |   Post a single student       |
        |   DELETE      |   {{baseURL}}/student/:id         |   Delete a Single Student     |
        |   DELETE      |   {{baseURL}}/deleteAllStudents   |   Delete Every Student        |
        |   PUT         |   {{baseURL}}/student/:id         |   Update a Single Student     |



      - [x] frontend
    - [x] Install dependencies:
        ```npm install react-router react-router-dom @mui/material @emotion/react @emotion/styled @fontsource/roboto @mui/icons-material```
    - [x] Components:
        - [x] Navbar
        - [x] Registration Form
        - [x] Display Table
