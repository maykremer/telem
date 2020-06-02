"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/telem", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function callback() {
    console.log("connection is on");
});
const personSchema = new mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    name: {
        type: String,
        required: true
    },
    armyId: {
        type: String,
        required: true
    },
    unit: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    }
});
const PersonModel = mongoose.model("person", personSchema);
exports.default = PersonModel;
//# sourceMappingURL=personModel.js.map