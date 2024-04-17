import {Meta, PlayThrough, Region, RomDataRaw, Shop} from "@/dto/romDataRaw";

export class SpoilerDataSanitized {
    constructor(
        public readonly regions: {[key: string]: Region},
        public readonly shops: Shop[],
        public readonly meta: Meta,
        public readonly playthrough: PlayThrough,
        public readonly bosses: {[key: string]: string},
        public readonly paths: unknown,
        public readonly entrances: unknown,
    ) {
    }

    public static fromSpoilers(spoiler: RomDataRaw['spoiler']) {
        const regionKeys = Object.keys(spoiler).filter((key) => {
            return !["meta", "playthrough", "Entrances", "paths", "Shops", "Bosses"].includes(key);
        })

        const regions: SpoilerDataSanitized['regions'] = {};
        regionKeys.forEach((key) => {
            regions[key] = spoiler[key];
        })

        return new SpoilerDataSanitized(
            regions,
            spoiler.Shops,
            spoiler.meta,
            spoiler.playthrough,
            spoiler.Bosses,
            null,
            null,
        )
    }
}