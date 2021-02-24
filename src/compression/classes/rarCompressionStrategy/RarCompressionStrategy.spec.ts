import { RarCompressionStrategy } from '../rarCompressionStrategy/RarCompressionStrategy'
import { File } from '../File/File'

let rarCompressionStrategy;

beforeEach(() => {
    rarCompressionStrategy = new RarCompressionStrategy();
})

describe('Tests for RarCompressionStrategy', () => {
    it('Should be able to instantiate', () => {
        expect(rarCompressionStrategy).toBeTruthy();
    })

    it('Should compress as zip', () => {
        let files: Array<File> = [new File('test0', 10, 'txt'), new File('test1', 10, 'txt'), new File('test2', 10, 'txt')]
        expect(rarCompressionStrategy.compressFiles(files)).toEqual('Compressed as rar')
    })
})