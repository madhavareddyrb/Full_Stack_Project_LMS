# LMS PROJECT

### Step 1- downloading dependencies

1. Download Frontend react with vite

2. create server in backend and to run need to install configure packages using (npm init -y), we use express to skip boilerplate code of node and clean code, to restart the backend again again without stping server need to install nodemon and Check server start with express.

3. Install react router dom for path(urls frontend)

### Step 2: Shadcn SetUp and TS 

1. we need to create jsconfig.json file poject level and install type node(npm install -D @types/node) and update vite.config.js 

2. now install shadcn and it will create an ui,lib automatically. UI for advance create and ui and use that anywhere. For Example cards(with same cards courses) and install lucide react for icons


### Authentication:

#### Steps - SignUp

1. Connect MOngoDB using mongoose and check connection before moving, cors setup, express setup 

2. Define all data fields required

3. create models folder in backend and crete User.js schema and export that schema with required rules 

4. create config for DataBase Connection and .env for mongodb url and PORT install dotenv

5. create variables data PORT, MONGO_URL in .env at app level file  import them using require("dotenv").config();  install dotenv to access data

6. buy using MONGO_URI cretae db connection in db.js  import this in server.js file

7. And cretae an api with http method POST for signup and import User modal and use this api in frontend using axios to connect frontend and backend. this is possible because of cors

8. in frontend cretae form data and with async call backend api 3000/signip in axios post method and in backend server.js use that req.body to cretae new user and  save user

9. If Everything went well you see your first document in mongodb

#### Steps - SignIn

1. After succesfull register or SignUp the data is going to store in User Schema and check where data is Present first.

2. After Checking Data where is present. To get That Data there are three methods are there find(), findOne(), findbyId(). Every method has there roles for examples what is correct method to flow accroding to process. 

3. For find(), find means it will get all documenst present in DB. This is good for getting list of data in our project like geting all data at home api,myLearning all data (courses) which we have enrolled etc

4. For findOne(), findOne means find that data by using any one filed.which already present DB. For In Our case we have used findOne to check where email is present and password is present in signIn. Used To check if user is present or not. Any Particular this is present or not

5. For findById(), findById is used to select using id. for every DB document and Id is going to create automatically by DB Mongoose. We use that id get that particular data only. Direct Filter. 

6. NOw Come back to signin we use FindOne() and we pass email and get that particular document which present in DB. If not it return undefined to log this errror we use if condton if DB return undefined we pass an error mesaage to user that email is not registerd. 

7. If we get any document for that email means that user is alreday regiseterd and now we specifically check password. If user types wrongs password we send an message tat password is wrong.

8. If both conditions meet then we enter to Login page succcess and we movie to User Profile.

9. This are the steps to follow. And First Check API is working are not properly getting data,checking user email, password data in POSTMAN api, thunder client and Later connect to frontend

10. Create an Form and create to variables to egt email password fileds and and message for getting error display on client.

11. Write an submit method that hits LOgin api and  check the functonality.