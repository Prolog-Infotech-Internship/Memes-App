const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    profilePic: {
        type: String,
        default: "https://upload-file-demo.onrender.com/file/1684758461724-any-name-356-3563630_continue-marketing.png"
    },
    userName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
});

let User;
try {
  User = mongoose.model('User');
} catch {
  User = mongoose.model('User', UserSchema);
}

export default User;