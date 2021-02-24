export class File {
    public name: string
    public size: number
    public type: string

    constructor(name: string, size: number, type: string) {
        this.name = name
        this.size = size
        this.type = type
    }

    public getDetails(): string {
        return `
        Name: ${this.name}
        Size: ${this.size}
        Type: ${this.type}
        `
    }
}