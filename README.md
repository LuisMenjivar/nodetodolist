<img src="http://luismenjivar.herokuapp.com/images/nodetodolist.png" height=300>

# nodetodolist
Application written in javascript using Nodejs, Express, MongoDB(Mongoose, MongoLab), and Angular.
Visit the [production page](https://luisnodetodolist.herokuapp.com/)

## How to set up this application 

To run this application locally, you need to install in your computer :
* Nodejs
* MongoDB


To clone the application run :

    git clone https://github.com/LuisMenjivar/nodetodolist.git

Before you start the application, you need to start the MongoDB server **FIRST** otherwise the application will throw an error(it's hard coded in server.js), run:

    mongod

Now start the application, run 

    node server.js

That's it !!! visit the application at `localhost:3000`

You dont't need to install dependencies as all the dependencies are include in the repo(/node_modules).