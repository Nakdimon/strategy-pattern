import { CompressionStrategy } from '../../interfaces/CompressionStrategy';

import { File } from '../File/File'

export class CompressionContext {
    private strategy: CompressionStrategy;
    //this can be set at runtime by the application preferences
    public setCompressionStrategy(strategy: CompressionStrategy) {
        this.strategy = strategy;
    }

    //use the strategy
    public createArchive(files: File[]): string {
        return this.strategy.compressFiles(files);
    }
}