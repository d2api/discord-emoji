import { DamageType, DestinyClass, DestinyEnergyType } from "bungie-api-ts/destiny2/interfaces";

export const loreBooksByHash: Record<string | number, string> = {
  2637550529: "<:ADriftersGambit:804831703456546817>",
  3747262457: "<:AManwithNoName:804831690932486166>",
  959742940: "<:ATangledWeb:804831684017127486>",
  1777644015: "<:AchillesWeavesaCocoon:885486479986552852>",
  3199877339: "<:Aspect:804831694027751444>",
  2175373739: "<:BeneaththeEndlessNight:885486092562890762>",
  1552617421: "<:BrayLabRecordsCONFIDENTIAL:804831720666693656>",
  3546582017: "<:CalloftheCryptolith:804831719039172618>",
  1428811610: "<:CaptainsLog:885485041176707072>",
  79401448: "<:Confessions:804831710067294218>",
  3105605471: "<:Constellations:804831679625166919>",
  1700031918: "<:DawningDelights:804831666493325345>",
  1834253235: "<:DuressandEgress:804831681957068810>",
  1826415049: "<:Dust:804831668476837900>",
  2231070379: "<:Ecdysis:804831690009870396>",
  1406970473: "<:Empress:809051669668298752>",
  2366686733: "<:EvasJourney:804831665486168064>",
  3596866167: "<:ForEveryRoseaThorn:804831706817232907>",
  2574655110: "<:FromtheFront:809051032256643094>",
  2436418635: "<:GhostStories:804831662059814922>",
  4108857026: "<:InquisitionoftheDamned:804831713980973117>",
  474580045: "<:LastDaysonKrakenMare:804831712302727209>",
  2032352737: "<:LegacysLament:804831698599804960>",
  2884616012: "<:LettersfromaRenegade:804831664487399424>",
  1737909884: "<:LettersfromEris:804831675435057182>",
  363696145: "<:LunasLost:804831673283117056>",
  158956081: "<:Marasenna:804831686701482064>",
  1707995037: "<:MostLoyal:804831662893432953>",
  2426835652: "<:NothingEnds:804831692409536514>",
  2745818827: "<:Pathfinding:885485517632851978>",
  2576543594: "<:RegardingStasis:804831683136323584>",
  4013031611: "<:Revelation:804831694824800357>",
  1362388863: "<:Ripples:905321147049066506>",
  18514483: "<:StolenIntelligence:804831670238707713>",
  859521420: "<:TalesoftheForgotten:905321179550720001>",
  1960700009: "<:TheAwokenoftheReef:804831687741407262>",
  1010799888: "<:TheBlackArmoryPapers:804831688861155328>",
  1087686644: "<:TheBookofUnmaking:804831706078117958>",
  382380436: "<:TheChronicon:804831708507537459>",
  3446053496: "<:TheDarkFuture:804831699845382144>",
  4206435289: "<:TheDreamingCity:804831685568102400>",
  1023088788: "<:TheForsakenPrince:804831700650688523>",
  1829493959: "<:TheLawlessFrontier:804831659680595978>",
  2956934961: "<:TheLiar:804831696536076288>",
  3303363217: "<:TheManTheyCallCayde:804831660763906058>",
  2100212624: "<:TheOnceShipstealer:804831717608128543>",
  1289219645: "<:ThePigeonandthePhoenix:804831677460906044>",
  3925368872: "<:TheSingularExegete:804831716585111623>",
  689443745: "<:TheWarlockAunor:804831671857840158>",
  2500489958: "<:TrialsandTribulations:804831715315023972>",
  181331842: "<:TruthtoPower:804831702294724658>",
  4135906247: "<:Unveiling:804831710864605226>",
  2897014415: "<:WallofWishes:804831704970821655>",
  28665996: "<:YourFriendMicahAbram:804831697652154368>",
};

export const eververseCategoryBanners = {
  Ornaments: "<:Ornaments1:752283531538858122><:Ornaments2:752283547506573372>",
  Shaders: "<:Shaders1:752284699879276604><:Shaders2:752284712281833517>",
  Emotes: "<:Emotes1:752284761086754826><:Emotes2:752284771224125602>",
  Effects: "<:Effects1:752284940124815380><:Effects2:752284955857387623>",
  GhostShells: "<:GhostShells1:752285102847033396><:GhostShells2:752285124019879946>",
  Vehicles: "<:Vehicles1:752285229292716052><:Vehicles2:752285242102120549>",
};

export const classesByName = {
  hunter: "<:hunter:807240641808564234>",
  titan: "<:titan:807240673262305310>",
  warlock: "<:warlock:807240697220300800>",
};

export const statsByName = {
  resilience: "<:Resilience:749123754063429772>",
  recovery: "<:Recovery:749123765723725854>",
  intellect: "<:Intellect:749123774791811084>",
  discipline: "<:Discipline:749123786376216669>",
  mobility: "<:Mobility:749123798627778640>",
  strength: "<:Strength:749123809138835486>",
};

export const planetMatsByName = {
  legendary_shards: "<:legendary_shards:759887924187365437>",
  glimmer: "<:glimmer:759887945812672552>",
  alkane_dust: "<:alkane_dust:759888363876253696>",
  etheric_spiral: "<:etheric_spiral:759888527486877728>",
  dusklight_shard: "<:dusklight_shard:759888718239760434>",
  simulation_seed: "<:simulation_seed:759888780722438205>",
  helium_filaments: "<:helium_filaments:759890071192600617>",
  baryon_bough: "<:baryon_bough:760246163034210304>",
  seraphite: "<:seraphite:760249027852763176>",
  datalattice: "<:datalattice:760550460640854037>",
  phaseglass: "<:phaseglass:760551009411661854>",
  glacial_starwort: "<:glacial_starwort:776039703572906014>",
  spinmetal: "<:spinmetal:776040040546828300>",
};

export const elementsByName = {
  kinetic: "<:kinetic:798669538459123742>",
  arc: "<:arc:798669454942142494>",
  solar: "<:solar:798669324101353503>",
  void: "<:void:798669492124254230>",
  stasis: "<:stasis:798669578330832928>",
  strand: "<:strand:1080599049817837628>",
};

export const legendaryLostSectors = {
  Master: {
    bottom: "<:ls_master_bottom:815586804115570729>",
    top: "<:ls_master_top:815586825661054976>",
  },
  Legend: {
    bottom: "<:ls_legend_bottom:815586848754761738>",
    top: "<:ls_legend_top:815586865846419506>",
  },
};

export const championModifiers = {
  unstoppable: "<:unstoppable_champions:815932392186314792>",
  barrier: "<:barrier_champions:815932405759868949>",
  overload: "<:overload_champions:815932420079091743>",
};

export const championTypes = {
  unstoppable: "<:unstoppable:912198632592261172>",
  barrier: "<:barrier:912198632768405514>",
  overload: "<:overload:912198632831332372>",
};

export const armorSlots = {
  helmet: "<:helmet:811020954901282846>",
  gauntlets: "<:gauntlets:811020979329302620>",
  chestarmor: "<:chestarmor:811021005232668692>",
  legarmor: "<:legarmor:811021035444764715>",
  classarmor: "<:classarmor:811021059649699910>",
};

export const enemyFactions = {
  taken: "<:taken:815927733770649623>",
  vex: "<:vex:815927752259010613>",
  hive: "<:hive:815927789407436850>",
  fallen: "<:fallen:815927808055574559>",
  cabal: "<:cabal:815927827865141289>",
  scorn: "<:scorn:815932247727276052>",
};

export const armorSlotsByBucketHash: Record<string | number, string> = {
  3448274439: armorSlots.helmet,
  3551918588: armorSlots.gauntlets,
  14239492: armorSlots.chestarmor,
  20886954: armorSlots.legarmor,
  1585787867: armorSlots.classarmor,
};

export const statsByEnDisplayName: Record<string, string> = {
  Resilience: statsByName.resilience,
  Recovery: statsByName.recovery,
  Intellect: statsByName.intellect,
  Discipline: statsByName.discipline,
  Mobility: statsByName.mobility,
  Strength: statsByName.strength,
};

export const statsByHash: Record<string | number, string> = {
  2996146975: statsByName.mobility,
  392767087: statsByName.resilience,
  1943323491: statsByName.recovery,
  1735777505: statsByName.discipline,
  144602215: statsByName.intellect,
  4244567218: statsByName.strength,
};

export const elementsByDamageType: Record<DamageType, string> = {
  [DamageType.None]: "",
  [DamageType.Kinetic]: elementsByName.kinetic,
  [DamageType.Arc]: elementsByName.arc,
  [DamageType.Thermal]: elementsByName.solar,
  [DamageType.Void]: elementsByName.void,
  [DamageType.Raid]: "",
  [DamageType.Stasis]: elementsByName.stasis,
  [DamageType.Strand]: elementsByName.strand,
};

export const elementsByEnergyType: Record<DestinyEnergyType, string> = {
  [DestinyEnergyType.Any]: "",
  [DestinyEnergyType.Arc]: elementsByName.arc,
  [DestinyEnergyType.Thermal]: elementsByName.solar,
  [DestinyEnergyType.Void]: elementsByName.void,
  [DestinyEnergyType.Ghost]: "",
  [DestinyEnergyType.Subclass]: "",
  [DestinyEnergyType.Stasis]: elementsByName.stasis,
};

export const classesByDestinyClass: Record<DestinyClass, string> = {
  [DestinyClass.Unknown]: "❔",
  [DestinyClass.Titan]: classesByName.titan,
  [DestinyClass.Hunter]: classesByName.hunter,
  [DestinyClass.Warlock]: classesByName.warlock,
};

export const itemTypes = {
  armor: "<:armor:804934783658229801>",
  consumables: "<:consumables:804934690099953694>",
  cosmetics: "<:cosmetics:804934747833892874>",
  emblem: "<:emblem:809411150239629342>",
  emote: "<:emote:900674815973802014>",
  ghostshell: "<:ghostshell:905875425195081758>",
  mods: "<:mods:804934668209881108>",
  shaders: "<:shaders:804934728225914930>",
  weapons: "<:weapons:804934767320498176>",
};
