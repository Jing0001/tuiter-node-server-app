import mongoose from 'mongoose';
const schema = mongoose.Schema({
    topic: String,
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
    replies: Number
}, {collection: 'tuits'});
export default schema;