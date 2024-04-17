import {
    Goal,
    Mode,
    OnOff,
    Logic,
    Weapons,
    ItemPool,
    Accessibility,
    DungeonItems,
    ItemPlacement,
    ItemFunctionality,
    BossShuffle,
    EnemyDamage,
    EnemyHealth,
    EnemyShuffle,
} from "@/types/romDataTypes";

export interface RomDataRaw {
    readonly generated: string;
    readonly hash: string,
    readonly logic: number,
    readonly size: 2,
    readonly spoiler: {
        meta: {
            goal: Goal,
            mode: Mode,
            name: string,
            size: number,
            build: string,
            hints: OnOff,
            logic: Logic,
            worlds: number,
            weapons: Weapons,
            rom_mode: Logic,
            spoilers: OnOff,
            world_id: number,
            item_pool: ItemPool,
            tournament: boolean,
            pseudoboots: boolean,
            accessibility: Accessibility,
            dungeon_items: DungeonItems,
            item_placement: ItemPlacement,
            allow_quickswap: boolean,
            item_functionality: ItemFunctionality,
            "enemizer.pot_shuffle": OnOff,
            entry_crystals_ganon: string | number,
            entry_crystals_tower: string | number,
            "enemizer.boss_shuffle": BossShuffle,
            "enemizer.enemy_damage": EnemyDamage,
            "enemizer.enemy_health": EnemyHealth,
            "enemizer.enemy_shuffle": EnemyShuffle,
            spoilers_ongen?: boolean
        }
    } & {[key: string]: {[key: string]: string}}
}