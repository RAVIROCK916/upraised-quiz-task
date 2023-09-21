# Upraised Quiz Task

## About

A Quiz based on React JS. Each question can be configured to be single choice or multiple choice. Scoring is calculated based on correct answers including partially corrected answers.

Backend is a `json-server` which was prebuilt.

## How to run

Install node

```bash
git clone https://github.com/RAVIROCK916/upraised-quiz-task.git
cd upraised-quiz-task/
npm install
```

Open two terminals to run frontend and backend

```bash
npm run json-server # Terminal 1
npm run dev         # Terminal 2
```

## Code Structure

assets/ - contains all the assets required for the project  
components/ - components which can be re-used  
pages/ - pages specific to the project  
store/ - contains all the upstream calls  
styles/ - containes all the styles  
db.json - file which will be handled by json-server using CRUD methods from the API calls

### Technologies

-   React JS
-   React Router
-   Axios
-   JSON server
