import mongoose from 'mongoose';

// create the schema
const schema = mongoose.Schema({
    topic: String,
    // tuit property of type String
    tuit: String,
    likes: Number,
    liked: Boolean,
    disliked: Boolean,
    dislikes: Number,
    userName: String,
    handle: String,
    time: String,
    image: String,
    retuits: Number,
    replies: Number},
    // collection name where tuits are stored in tuiter database
    {collection: 'tuits'});

// export schema so it can be used elsewhere
export default schema;
