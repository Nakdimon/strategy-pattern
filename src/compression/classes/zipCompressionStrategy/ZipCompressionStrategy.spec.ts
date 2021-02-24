import { ZipCompressionStrategy } from './ZipCompressionStrategy'
import { File } from '../File/File'

let zipCompressionStartegy;

beforeEach(() => {
    zipCompressionStartegy = new ZipCompressionStrategy();
})

describe('Tests for ZipCompressionStartegy', () => {
    it('Should be able to instantiate', () => {
        expect(zipCompressionStartegy).toBeTruthy();
    })

    it('Should compress as zip', () => {
        let files: Array<File> = [new File('test0', 10, 'txt'), new File('test1', 10, 'txt'), new File('test2', 10, 'txt')]
        expect(zipCompressionStartegy.compressFiles(files)).toEqual('Compressed as zip')
    })
})