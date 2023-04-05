import * as tuitsDao from '../tuits/tuits-dao.js'

const findTuits = async(req, res) => {
    // const tuits = await tuitsDao.findTuits()
    // res.json(tuits);
    res.send('Life is goodddddd!')
}

const createTuit = async(req, res) => {
    const newTuit = req.body;
    newTuit.image = "../images/nasa.jpg";
    newTuit.userName = "NASA";
    newTuit.topic = "Space";
    newTuit.handle = "@nasa";
    newTuit.likes = 0;
    newTuit.liked = false;
    newTuit.disliked = false;
    newTuit.dislikes = 0;
    newTuit.time = "just now";
    newTuit.replies = 0;
    newTuit.retuits = 0;
    const insertedTuit = await tuitsDao.createTuit(newTuit);
    res.json(insertedTuit);
}

const deleteTuit = async(req, res) => {
    const tuitdIdToDelete = req.params.tid;
    const status = await tuitsDao.deleteTuit(tuitdIdToDelete);
    res.json(status);
}

const updateTuit = async(req, res) => {
    const tuitdIdToUpdate = req.params.tid;
    const updates = req.body;
    const status = await tuitsDao.updateTuit(tuitdIdToUpdate, updates);
    res.json(status);
}

export default (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}