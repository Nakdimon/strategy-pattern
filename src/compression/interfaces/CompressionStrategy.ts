import { File } from '../classes/File/File'

export interface CompressionStrategy {
    compressFiles(files: Array<File>): string;
}