export class SpriteData {
    constructor(
        public readonly generated: string,
        public readonly name: string,
        public readonly author: string,
        public readonly version: number,
        public readonly file: string,
        public readonly preview: string,
        public readonly tags: string[],
        public readonly usage: string[],
    ) {

    }
}