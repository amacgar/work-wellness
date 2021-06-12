import { Document, Model } from "mongoose";

export interface IConsumption {
    date: Date,
    hour: Number,
    consumption: Number,
    price: Number,
    pricePerHour: Number
}

export interface IConsumptionDocument extends IConsumption, Document {}

export interface IConsumptionModel extends Model<IConsumptionDocument> {}