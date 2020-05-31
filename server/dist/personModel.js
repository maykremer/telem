"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default.connect("mongodb://localhost:27017/telem", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true
});
const db = mongoose_1.default.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function callback() {
    console.log("connection is on");
});
const personSchema = new mongoose_1.default.Schema({
    _id: mongoose_1.default.Types.ObjectId,
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
const PersonModel = mongoose_1.default.model("person", personSchema);
exports.default = PersonModel;
