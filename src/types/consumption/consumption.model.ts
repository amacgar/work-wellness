import { model } from "mongoose";
import { IConsumptionDocument } from "./consumption.types";
import ConsumptionSchema from "./consumption.schema";

export const ConsumptionModel = model<IConsumptionDocument>("consumption", ConsumptionSchema);