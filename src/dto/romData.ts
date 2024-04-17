import {RomDataRaw} from "@/dto/romDataRaw";
import {Accessibility, Goal, Logic, Mode, OnOff, Weapons} from "@/types/romDataTypes";
import {SpoilerDataSanitized} from "@/dto/spoilerDataSanitized";

export class RomData {
    constructor(
        public readonly generated: string,
        public readonly hash: string,
        public readonly size: number,
        public readonly accessibility: Accessibility,
        public readonly build: string,
        public readonly goal: Goal,
        public readonly logic: Logic,
        public readonly mode: Mode,
        public readonly name: string,
        public readonly variation: null,
        public readonly weapons: Weapons,
        public readonly shuffle: unknown,
        public readonly difficultyMode: unknown,
        public readonly difficulty: unknown,
        public readonly notes: unknown,
        public readonly tournament: boolean,
        public readonly spoilers: OnOff,
        public readonly allowQuickSwap: boolean,
        public readonly special: unknown,
        public readonly spoiler: SpoilerDataSanitized,
        public readonly music: unknown,
    ) {

    }
    public static fromRomDataRaw(romDataRaw: RomDataRaw): RomData {
        return new RomData(
            romDataRaw.generated,
            romDataRaw.hash,
            romDataRaw.size,

            romDataRaw.spoiler.meta.accessibility,
            romDataRaw.spoiler.meta.build,
            romDataRaw.spoiler.meta.goal,
            romDataRaw.spoiler.meta.logic,
            romDataRaw.spoiler.meta.mode,
            romDataRaw.spoiler.meta.name,
            null, //romDataRaw.spoiler.meta.variation,
            romDataRaw.spoiler.meta.weapons,
            null, //romDataRaw.spoiler.meta.shuffle,
            null, //romDataRaw.spoiler.meta.difficulty_mode,
            null, //romDataRaw.spoiler.meta.difficulty,
            null, //romDataRaw.spoiler.meta.notes,
            romDataRaw.spoiler.meta.tournament,
            romDataRaw.spoiler.meta.spoilers,
            romDataRaw.spoiler.meta.allow_quickswap,
            null, //romDataRaw.spoiler.meta.special,
            SpoilerDataSanitized.fromSpoilers(romDataRaw.spoiler),
            null, //???
        );
    }
}