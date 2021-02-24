import { CompressionStrategy } from '../../interfaces/CompressionStrategy'
import { File } from '../File/File'

export class RarCompressionStrategy implements CompressionStrategy {
    compressFiles(files: Array<File>): string {
        return 'Compressed as rar'
    }
}