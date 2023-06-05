const mongoose = require('mongoose');
const { Schema } = mongoose;

const MemeSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    postId: {
        type: String,
        required: true,
        unique: true
    },
    memeUrl: {
        type: String,
        required: true,
    },
    description:{
        type: String
    },
    likes: {
        type: Array
    },
    reports: {
        type: Array
    },
    date: {
        type: Date,
        default: Date.now
    },
});


export default mongoose.models.Meme || mongoose.model("Meme",MemeSchema);