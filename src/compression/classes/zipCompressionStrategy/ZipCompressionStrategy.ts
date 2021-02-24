import { CompressionStrategy } from '../../interfaces/CompressionStrategy'
import { File } from '../File/File'

export class ZipCompressionStrategy implements CompressionStrategy {
    compressFiles(files: Array<File>): string {
        return 'Compressed as zip'
    }
}