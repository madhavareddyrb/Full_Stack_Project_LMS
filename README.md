# LMS PROJECT

#Step 1- downloading dependencies

1. Download Frontend react with vite

2. create server in backend and to run need to install configure packages using (npm init -y), we use express to skip boilerplate code of node and clean code, to restart the backend again again without stping server need to install nodemon and Check server start with express.

3. Install react router dom for path(urls frontend)

#Step 2: Shadcn SetUp and TS

1. we need to create jsconfig.json file poject level and install type node(npm install -D @types/node) and update vite.config.js

2. now install shadcn and it will create an ui,lib automatically. UI for advance create and ui and use that anywhere. For Example cards(with same cards courses) and install lucide react for icons

#Authentication:

##Steps - SignUp

1. Connect MOngoDB using mongoose and check connection before moving, cors setup, express setup

2. Define all data fields required

3. create models folder in backend and crete User.js schema and export that schema with required rules

4. create config for DataBase Connection and .env for mongodb url and PORT install dotenv

5. create variables data PORT, MONGO_URL in .env at app level file import them using require("dotenv").config(); install dotenv to access data

6. buy using MONGO_URI cretae db connection in db.js import this in server.js file

7. And cretae an api with http method POST for signup and import User modal and use this api in frontend using axios to connect frontend and backend. this is possible because of cors

8. in frontend cretae form data and with async call backend api 3000/signip in axios post method and in backend server.js use that req.body to cretae new user and save user

9. If Everything went well you see your first document in mongodb

##Steps - SignIn

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

11. Write an submit method that hits LOgin api and check the functonality.

#Login,SignUp,Protected Route , LogOut

###1. User Registration: Redefined My model

1. Fields required name,email, password

2. Here all are reequired and string type

3. Before saving data in DB we need to hash password, so we use bcrypt to hash password in direct model

4. we check with previous save and current if password is not modified return none, we don't want to run hashpassword unneccassary

5. i have used this method in model to save hash password, this indicates that only one particular document. we we use modal name that is worng and mismatch values .

6. we call this api in fronted and we save this to DB and check errors all functionality befor integrating with frontend.

##2. Sign In Functionality

1. We create an login api by checking the user is present ot not

2. we validate email,password its really coming or not from user

3. we Find user in signupmodel with email. If user not found we return user account not exists

4. if account exists we check password match. we compare passwords using bcrypt in signup model and coming from user

5. If password is not match we return Invalid Password

6. If password correct then we create an JWT token.we need to use jwt.sign(to confirm the account exists ) here we have 3 options first send data,check with secreact key to verify later, expiresin (to expire token and user need to login again)

7. then send response to user saying success and jwt token

8. If anything failes send interval server in catch method

##3. Token Passing through headers from FE to give authentication permision

####Backend Steps:

1. create an middleware to get check user is authorised user or not

2. this authorization means access_token(jwt_token) comes from Frontend

3. so we pass req,res, next and first we check headers the authorization present or not

we use like this app.get("/userprofile", authMiddleware, userProfile);

4. here we pass next because we have to use this middleware for every route that contains only authorization people who can see that page and data comes another api 

5. so create an api to get user data with findone to get only particular email data. 

6. pass this api in FE and send here cretae an function with await get method and pass headers Authorization with Bearer ${token}

7. store this data and now hit it. From FE it move to authMiddleware and there we decoded the jwt token with verify method, we erify secret key with token.

8. we send req.email = decoded and next() call next  

9. catech error. 

10. On ui if authorization failes backend data is not getting but FE is displaying not good so use Protected Routes

##Protected Routes

1. in this if access_token present render the component and if not return to login page


##Logout 

1. Create am Function in navbar and if access_token present remove it 

2. if not accees token aitomatic unauthorization will come and protected rotut protect tha componet

3. render login page afetr logout


#### Some learning from above

1. When i try to authorization i am not getting data becuase of cors issues this came from my typo mistake in corsoptions 

2. i tried in postapi calling middleware i am getting undefind and headers no authorization becuase postmanapi calling and FE calling is not same

3. and getting data in backend but not passing throigh FE just simple close all and open again

4. know where api checking useful and when FE hiting that api is different

#### Build Teach With Us Complete UI and add logic to it

1. Now user register for teaching with us if user loginIn we render form or else login page so here use this route in protected

2. the Form fields is how much experience you have in teaching,video recording, editing

3. Now Big Question How form will come, do i need to store this data, are we using this data somewhere

4. so we are not this data anywhere so no need to store this data

5. But there is an issue here user clicked on teachWithus and he completed the steps and i don't want to repeat this steps again for user so we need to store is instructor or student by just storing status(instructor or not)

6. Based on That I don't want repeat tha form to instructor again

7. Need To add one More Field to userModel is it create or worng at middle on this

##### Navbar fixing befor login and After login

1. Before Login signin,sinup buttons reasonable after login showing this buttons are usefull i  need to remove it

2. Based on token and protected route we can achive it. Learn how to properly use already existed navbar. 