import { connect, disconnect } from '../tools/database';
import Handler from '../services/handler';
import CRUD from '../__mocks__/cases';

describe('[MAIN', () => {
    
    beforeEach(() => {
        connect();
    });

    it('[GET ALL ELEMENTS]', async () => {
        const info = await Handler.getAll();
        expect(info.length).toBeGreaterThan(0);
    });

    it('[INSERT ELEMENT]', async () => {
        const res = await Handler.insertData(CRUD.INSERT);
        expect(res).toBeTruthy();
    });

    it('[UPDATE ELEMENT]', async () => {
        const info = await Handler.getAll();
        const toUpdate = info[0];
        toUpdate.price = 200000;
        const res = await Handler.updateElement(toUpdate);
        expect(res).toBeTruthy();
    });

    it('[FIND ELEMENT]', async () => {
        const res = await Handler.findElement(CRUD.FIND);
        expect(res.length).toBeGreaterThan(0);
    });

    it('[REMOVE ELEMENT]', async () => {
        const res = await Handler.removeOneElement(CRUD.REMOVE);
        expect(res).toBeTruthy();
    });

})