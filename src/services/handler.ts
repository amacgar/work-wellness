import fs from 'fs';
import path from 'path';
import csv  from 'csv-parser';
import { ConsumptionModel } from '../types/consumption/consumption.model';

class Handler {

    init() {}

    /**
     * @author Alberto Machado Garcia
     * 
     * @description Method to load all data from csv in the database
     */
    preloadData(db: any) {
        const directory = fs.readdirSync(path.join(__dirname, '../utility'));
        directory.forEach( element => {
            fs.createReadStream(element)
                .pipe(csv())
                .on('data', (data) => this.insertData(element))
                .on('end', () => {
                    console.log(`Database updated with file ${element}`);
                });
        })
    }

    /**
     * @author Alberto Machado Garcia
     * 
     * @param db 
     * @param element 
     * 
     * @description Method to insert new object in the database
     */
    async insertData(element: any) {
        try {
            await ConsumptionModel.create(element);
        } catch (e) {
            console.log('Error trying insert in the Database');
            
        }
    }

    async getAll() {
        const res = await ConsumptionModel.find({});
        console.log(res);
    }

}

export default new Handler();