const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    fullname: {type: String},
    email: {type: String, required: true},
    // role: {type: Schema.Types.ObjectId, ref: 'role'},
    // password : {type: String, required: true},
    // sex : {type: String},
    // birthday : {type: Date},
    // address : {type: Array},
    created_at: {type: Date, default: Date.now},
    updated_at: {type: Date, default: Date.now}
  },
);

module.exports = mongoose.model('user', userSchema, 'user');