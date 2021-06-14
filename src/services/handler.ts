import fs from 'fs';
import path from 'path';
import csv  from 'csv-parser';
import { ConsumptionModel } from '../types/consumption/consumption.model';
import { parse } from '../tools/parser';

class Handler {

    /**
     * @author Alberto Machado Garcia
     * 
     * @description Method to load all data from csv in the database
     */
    preloadData() {
        const pathDir = path.join(__dirname, '../../utility');
        const directory = fs.readdirSync(pathDir);
        try {
            directory.forEach( element => {
                fs.createReadStream(path.join(pathDir, element))
                    .pipe(csv())
                    .on('data', (data) => this.insertData(parse(data)))
                    .on('end', () => {
                        console.log(`Database updated with file ${element}`);
                    });
            });
            return true;
        } catch (e) {
            console.log(e);
            return false;
        }
    }

    /**
     * @author Alberto Machado Garcia
     * 
     * @param element Object to save in the database
     * 
     * @description Method to insert new object in the database
     */
    async insertData(element: any) {
        try {
            if (!element.date) {
                return false;
            }
            await ConsumptionModel.create(element);
            return true;
        } catch (e) {
            console.log(`Error trying insert data for: ${e}`);
            return false;
        }
    }

    /**
     * @author Alberto Machado Garcia
     * 
     * @returns Return the information saved in the database
     */
    async getAll() {
        try {
            return await ConsumptionModel.find({});
        } catch (e) {
            return [];
        }
    }

    /**
     * @author Alberto Machado Garcia
     * 
     * @returns Return true o false depending if we can remove all data from database
     */
    async removeAll() {
        try {
            await ConsumptionModel.deleteMany({});
            return true;
        } catch (e) {
            console.log(e);
            return false;
        }
    }

    /**
     * @author Alberto Machado Garcia
     * 
     * @param element Key value to find an element in the database
     * 
     * @description Find an element through the object received in the parameter
     * 
     * @return Return the element found
     */
    async findElement(element: any) {
        try {
            const response = await ConsumptionModel.find(element);
            return response;
        } catch (e) {
            return [];
        }
    }

    /**
     * @author Alberto Machado Garcia
     * 
     * @param element Object to update in the database
     * 
     * @description Update the element in the database
     */
    async updateElement(element: any) {
        try {
            const exist = await this.findElement({_id: element._id});
            if (exist.length > 0) {
                await ConsumptionModel.updateOne({_id: element._id}, element, { multi: true });
            } else {
                delete element._id;
                await this.insertData(element);
            }
            return true;
        } catch (e) {
            console.log(e);
            return false;
        }
    }

    async removeOneElement(element: any) {
        try {
            await ConsumptionModel.deleteOne(element);
            return true;
        } catch (e) {
            console.log(e);
            return false;
        }
    }

}

export default new Handler();