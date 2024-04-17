import {Meta, PlayThrough, Region, RomDataRaw, Shop} from "@/dto/romDataRaw";

export class SpoilerDataSanitized {
    constructor(
        public readonly regions: Region[],
        public readonly shops: Shop[],
        public readonly meta: Meta,
        public readonly playthrough: PlayThrough,
        public readonly Bosses: {[key: string]: string},
    ) {
    }

    public static fromSpoilers(spoiler: RomDataRaw['spoiler']) {
        // WIP
    }
}