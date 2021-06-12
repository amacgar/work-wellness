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

})

app.post(ROUTES.crud.insert, ( req, res ) => {
    Handler.insertData(req.body);
    res.status(202).send('');
})

app.get(ROUTES.crud.getAll, ( req, res ) => {
    Handler.getAll();
    res.status(202).send('');
})

app.listen( port, () => {
    console.log(`App listen at http://localhost:${port}`);
})