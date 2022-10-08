
![made-with-node](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white) ![made-with-react](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![made-with-react-rooter](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)  

# SportSee - Front end (New version of profile page)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## 1. Project

SportSee is a startup company dedicated to sports training. The profile page is a dashboard of users' sessions and progress.
In this repository you will find the new front-end version of the SportSee profile page.

## 2. Prerequisites

### Tools
- [NodeJS(16.13.1)](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)


## 3. Install project

### 3.1 With Micro API

#### Backend

- Fork the [Backend](https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard) repository
- Clone it on your computer.
- The `npm install` command will allow you to install the dependencies.
- The `npm run start` command will allow you to run the API.

#### Frontend

- Clone this repository.
- The `npm install` command will allow you to install the dependencies.
- The `npm run start` command will allow you to run the app.

### 3.2 With mocked data

#### Frontend only

- Clone this repository.
- The `npm install` command will allow you to install the dependencies.
- Before starting your app create a .env file and inside your file add the folowing variables:
    * **REACT_APP_BACKEND_HOST**=http://localhost:3000/
	* **REACT_APP_MOCK_DATA**=true


	**REACT_APP_BACKEND_HOST** is the hostname of the API and   **REACT_APP_MOCK_DATA** is a variable to controle wich data we want to use in our application if you want to use mock data set  **REACT_APP_MOCK_DATA** to true else set it to false.
- The `npm run start` command will allow you to run the app.

#### About `npm start`

Runs the app in the development mode.\
Open [http://localhost:3001](http://localhost:3001) to view it in your browser.

> Note: Due to the use of micro API run on the 3000 PORT the app while default be launch on the 3001 PORT. You can change this parameter on .env file.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### 4. Author

Zaidi Arezki