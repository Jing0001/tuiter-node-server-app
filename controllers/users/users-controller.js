// import the array of users.
import people from './users.js'
let users = people

const UserController = (app) => {
    // map path pattern to handler function
    // use express instance app to declare HTTP GET, request pattern /api/users to call a function
    app.get('/api/users', findUsers)
    app.get('/api/users/:uid', findUserById);
    app.post('/api/users', createUser);
    app.delete('/api/users/:uid', deleteUser);
    app.put('/api/users/:uid', updateUser);
}

// function runs when /api/users requested, responds with JSON array of users
const findUsers = (req, res) => {
    // retrieve type parameter from query
    const type = req.query.type
    // if type parameter in query
    if(type) {
        const usersOfType = users
            .filter(u => u.type === type)
        // respond with users of that type
        res.json(usersOfType)
        return
    }
    res.json(users)
}

const findUserById = (req, res) => {
    const userId = req.params.uid;
    const user = users
        .find(u => u._id === userId);
    res.json(user);
}

const createUser = (req, res) => {
    // extract new user from BODY in request
    const newUser = req.body;
    newUser._id = (new Date()).getTime() + '';
    // append new user to users array
    users.push(newUser);
    res.json(newUser);
}

const deleteUser = (req, res) => {
    const userId = req.params['uid'];
    users = users.filter(usr =>
        usr._id !== userId);
    // respond with success code
    res.sendStatus(200);
}

const updateUser = (req, res) => {
    const userId = req.params['uid'];
    const updates = req.body;
    users = users.map((usr) =>
        usr._id === userId ?
            // merge old usr with new updates
            {...usr, ...updates} :
            usr
    );
    res.sendStatus(200);
}

// exports so app.js can import
export default UserController
