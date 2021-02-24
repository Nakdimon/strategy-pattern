import { File } from '../File/File'
import { CompressionContext } from './CompressionContext'
import { ZipCompressionStrategy } from '../zipCompressionStrategy/ZipCompressionStrategy';
import { RarCompressionStrategy } from '../rarCompressionStrategy/RarCompressionStrategy';

describe('Tests for CompressionContext', () => {
    it('Should be able to instantiate', () => {
        expect(new CompressionContext()).toBeTruthy();
    })

    it('Should be able to set zip Compression strategy', () => {
        const compressionContext = new CompressionContext();
        compressionContext.setCompressionStrategy(new ZipCompressionStrategy())

        const compressionResult = compressionContext.createArchive([new File('test0', 10, 'txt'), new File('test1', 10, 'txt'), new File('test2', 10, 'txt')])

        expect(compressionResult).toEqual('Compressed as zip')
    })

    it('Should be able to set rar Compression strategy', () => {
        const compressionContext = new CompressionContext();
        compressionContext.setCompressionStrategy(new RarCompressionStrategy())

        const compressionResult = compressionContext.createArchive([new File('test0', 10, 'txt'), new File('test1', 10, 'txt'), new File('test2', 10, 'txt')])

        expect(compressionResult).toEqual('Compressed as rar')
    })
})