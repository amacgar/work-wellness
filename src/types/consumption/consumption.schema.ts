import { Schema } from "mongoose";

const UserSchema = new Schema({
    date: Date,
    hour: String,
    consumption: String,
    price: String,
    pricePerHour: String
});

export default UserSchema;