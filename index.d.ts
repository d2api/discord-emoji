import { DamageType, DestinyClass } from "bungie-api-ts/destiny2/interfaces";
export declare const loreBooksByHash: Record<string | number, string>;
export declare const eververseCategoryBanners: {
    Ornaments: string;
    Shaders: string;
    Emotes: string;
    Effects: string;
    GhostShells: string;
    Vehicles: string;
};
export declare const classesByName: {
    hunter: string;
    titan: string;
    warlock: string;
};
export declare const statsByName: {
    resilience: string;
    recovery: string;
    intellect: string;
    discipline: string;
    mobility: string;
    strength: string;
};
export declare const planetMatsByName: {
    legendary_shards: string;
    glimmer: string;
    alkane_dust: string;
    etheric_spiral: string;
    dusklight_shard: string;
    simulation_seed: string;
    helium_filaments: string;
    baryon_bough: string;
    seraphite: string;
    datalattice: string;
    phaseglass: string;
    glacial_starwort: string;
    spinmetal: string;
};
export declare const elementsByName: {
    kinetic: string;
    arc: string;
    solar: string;
    void: string;
    stasis: string;
};
export declare const legendaryLostSectors: {
    Master: {
        bottom: string;
        top: string;
    };
    Legend: {
        bottom: string;
        top: string;
    };
};
export declare const championTypes: {
    unstoppable: string;
    barrier: string;
    overload: string;
};
export declare const armorSlots: {
    helmet: string;
    gauntlets: string;
    chestarmor: string;
    legarmor: string;
    classarmor: string;
};
export declare const enemyFactions: {
    taken: string;
    vex: string;
    hive: string;
    fallen: string;
    cabal: string;
    scorn: string;
};
export declare const armorSlotsByBucketHash: Record<string | number, string>;
export declare const statsByEnDisplayName: Record<string, string>;
export declare const statsByHash: Record<string | number, string>;
export declare const elementsByDamageType: Record<DamageType, string>;
export declare const classesByDestinyClass: Record<DestinyClass, string>;
