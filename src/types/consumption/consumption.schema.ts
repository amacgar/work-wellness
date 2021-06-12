import { Schema } from "mongoose";

const UserSchema = new Schema({
    date: Date,
    hour: Number,
    consumption: Number,
    price: Number,
    pricePerHour: Number
});

export default UserSchema;