const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Add the bcrypt library
// validation and encryption inside of this schema 
const bcrypt = require('bcrypt');
const SALT_ROUNDS = 6;  

const songListSchema = new Schema(
  {
    songName: String, 
    done: {
        type: Boolean, 
        default: false
    }
}, 









{
    timestamps: true,
    // Even though it's hashed - don't serialize the password
    toJSON: {
      transform: function (doc, ret) {
        delete ret.password;
        return ret;
      },
    },
  }
);

songListSchema.pre("save", async function (next) {
    // 'this' is the songList doc
    if (!this.isModified("password")) return next();
    // update the password with the computed hash
    this.password = await bcrypt.hash(this.password, SALT_ROUNDS);
    return next();
  });
  
  module.exports = mongoose.model("SongList", songListSchema);

// const TodoSchema = new mongoose.Schema({
//     task: String, 
//     done: {
//         type: Boolean, 
//         default: false
//     }
// })

// const TodoModel = mongoose.model("todos", TodoSchema)
// module.exports = TodoModel