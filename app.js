// use Express(Node.js libraries) to implement HTTP server
import express from 'express';
import cors from 'cors'
import HelloController
    from "./controllers/hello-controller.js"
import UserController
    from "./controllers/users/users-controller.js"
import TuitsController
    from "./controllers/tuits/tuits-controller.js";
import mongoose from "mongoose";


const CONNECTION_STRING = process.env.DB_CONNECTION_STRING
    || 'mongodb://localhost:27017/tuiter';
mongoose.connect(CONNECTION_STRING);
// creates an instance of the Express.js application, assigning it to the constant variable app
const app = express();
// CORS stands for Cross Origin Resource Sharing.
// This allows client applications running on other domains to access the resources provided by this server.
app.use(cors())
// tells the app to use the express.json() middleware, which parse JSON from HTTP request body.
// It is essential when dealing with JSON data sent via POST, PUT, or PATCH requests.
app.use(express.json());
TuitsController(app);
HelloController(app);
// responsible for handling user-related routes and logic in the application.
UserController(app);
// remote servers declare the proper port to use in an environment variable called PORT available from Node using process.env.PORT
// uses the PORT environment variable if available, otherwise uses 4000 when running locally on our machines
app.listen(process.env.PORT || 4000);
