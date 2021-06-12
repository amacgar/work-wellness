import mongoose from 'mongoose';
import { ConsumptionModel } from '../types/consumption/consumption.model';

let database: any;

/**
 * Init the connection with the database
 */
export const connect = () => {

    const uri = "mongodb://localhost:27017/consumption";

    if (database) {
        return;
    }

    mongoose.connect(uri, {
        useNewUrlParser: true,
        useFindAndModify: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      });

    database = mongoose.connection;

    database.once("open", async () => {
        console.log('Connected to the database');
    });  
    
    database.on("error", () => {
        console.log('Error connecting to the database');
    });
};

/**
 * Close the connection with the database
 */
export const disconnect = () => {  
    
    if (!database) {
        return;
    }  
  
    mongoose.disconnect();
};