import mongoose from "mongoose";

async function asyncInitMongo() {
    await mongoose.connect("mongodb://localhost:27017/test");
}

export default asyncInitMongo;
