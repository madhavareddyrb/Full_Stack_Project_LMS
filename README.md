# LMS PROJECT

### Step 1- downloading dependencies

1. Download Frontend react with vite

2. create server in backend and to run need to install configure packages using (npm init -y), we use express to skip boilerplate code of node and clean code, to restart the backend again again without stping server need to install nodemon and Check server start with express.

3. Install react router dom for path(urls frontend)

### Step 2: Shadcn SetUp and TS 

1. we need to create jsconfig.json file poject level and install type node(npm install -D @types/node) and update vite.config.js 

2. now install shadcn and it will create an ui,lib automatically. UI for advance create and ui and use that anywhere. For Example cards(with same cards courses) and install lucide react for icons


### Authentication:

#### Steps for Backend

1. Connect MOngoDB using mongoose and check connection before moving, cors setup, express setup 

2. Define all data fields required

3. create models folder in backend and crete User.js schema and export that schema with required rules 

4. create config for DataBase Connection and .env for mongodb url and PORT install dotenv

5. create variables data PORT, MONGO_URL in .env at app level file  import them using require("dotenv").config();  install dotenv to access data

6. buy using MONGO_URI cretae db connection in db.js  import this in server.js file

7. And cretae an api with http method POST for signup and import User modal and use this api in frontend using axios to connect frontend and backend. this is possible because of cors

8. in frontend cretae form data and with async call backend api 3000/signip in axios post method and in backend server.js use that req.body to cretae new user and  save user

9. If Everything went well you see your first document in mongodb

