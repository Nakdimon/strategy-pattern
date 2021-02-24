import { File } from './File'

let file;

beforeEach(() => {
    file = new File('test', 15, 'txt');
})


describe('Tests for File class', () => {
    it('Should be instantiable', () => {
        expect(file).toBeTruthy();
    });
    it('Should set file name, size and type in constructor', () => {
        expect(file.name).toEqual('test')
        expect(file.size).toEqual(15)
        expect(file.type).toEqual('txt')
    })
});