import express from 'express';
import ROUTES from './routes/routes';
import { connect } from './tools/database';
import Handler from './services/handler';
import bodyParser from 'body-parser';

const app = express();
const port = 8080;

connect();

/**
 * Parse the request to get the body in JSON format
*/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
    
app.post(ROUTES.preload, ( req, res ) => {
    const result = Handler.preloadData();
    if (result) {
        res.status(202).send('');
    } else {
        res.status(400).send('');
    }
})

app.post(ROUTES.crud.insert, async ( req, res ) => {
    const result = await Handler.insertData(req.body);
    if (result) {
        res.status(202).send('');
    } else {
        res.status(400).send('Error trying insert data in the database');
    }
})

app.post(ROUTES.crud.findElement, async ( req, res ) => {
    const result = await Handler.findElement(req.body);
    if (!result) {
        res.status(400).send('Error getting element from database');
    } else {
        res.status(200).send(result);
    }
})

app.get(ROUTES.crud.getAll, async ( req, res ) => {
    const result = await Handler.getAll();
    if (result.length > 0) {
        res.status(200).send(result);
    } else {
        res.status(400).send('Error trying collect the data from the database');
    }
})

app.delete(ROUTES.crud.removeAll, async ( req, res ) => {
    const result = await Handler.removeAll();
    if (result) {
        res.status(202).send('');
    } else {
        res.status(400).send('Error trying delete all data from database');
    }
})

app.post(ROUTES.crud.update, async ( req, res ) => {
    const result = await Handler.updateElement(req.body.element, req.body.newElement);
    if (result) {
        res.status(202).send('');
    } else {
        res.status(400).send('Error trying update the element in the database');
    }
})

app.listen( port, () => {
    console.log(`App listen at http://localhost:${port}`);
})