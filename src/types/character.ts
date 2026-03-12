import type {Stat, HyperStat, AbilityInfo, AbilityPreset,
    Item, SpecialItem, CashItem, SetEffect, Face, Hair, Skin,
    AndroidCashItem, Android, PetEquipment, PetSkill,
    SKillBase, Skill, HexaStat} from "./character-base.js";

export interface Character {
    ocid: string;
}

export interface CharacterBasic {
    date: string;
    character_name: string;
    world_name: string;
    character_gender: string;
    character_class: string;
    character_class_level: string;
    character_level: number;
    character_exp: number;
    character_exp_rate: string;
    character_guild_name: string;
    character_image: string;
    character_date_create: string
    access_flag: string;
    liberation_quest_clear: string;
}

export interface CharacterPopularity {
    date: string;
    popularity: number;
}

export interface CharacterStat {
    date: string;
    character_class: string;
    final_stat: Stat[];
    remain_ap: number;
}

export interface CharacterHyperStat {
    date: string;
    character_class: string;
    use_preset_no: string;
    use_available_hyper_stat: number;
    hyper_stat_preset_1: HyperStat[];
    hyper_stat_preset_1_remain_point: number;
    hyper_stat_preset_2: HyperStat[];
    hyper_stat_preset_2_remain_point: number;
    hyper_stat_preset_3: HyperStat[];
    hyper_stat_preset_3_remain_point: number;
}

export interface CharacterPropensity {
    date: string;
    charisma_level: number;
    sensibility_level: number;
    insight_level: number;
    willingness_level: number;
    handicraft_level: number;
    charm_level: number;
}

export interface CharacterAbility {
    date: string;
    ability_grade: string;
    ability_info: AbilityInfo[];
    remain_fame: number;
    preset_no: number;
    ability_preset_1: AbilityPreset;
    ability_preset_2: AbilityPreset;
    ability_preset_3: AbilityPreset;
}

export interface CharacterItemEquipment {
    date: string;
    character_gender: string;
    character_class: string;
    preset_no: number;
    item_equipment: Item[];
    item_equipment_preset_1: Item[];
    item_equipment_preset_2: Item[];
    item_equipment_preset_3: Item[];
    title: {
        title_name: string;
        title_icon: string;
        title_description: string;
        date_expire: string;
        date_option_expire: string;
        title_shape_name: string;
        title_shape_icon: string;
        title_shape_description: string;
    };
    medal_shape: {
        medal_shape_name: string;
        medal_shape_icon: string;
        medal_shape_description: string;
        medal_shape_changed_name: string;
        medal_shape_changed_icon: string;
        medal_shape_changed_description: string;
    };
    dragon_equipment: SpecialItem[];
    mechanic_equipment: SpecialItem[];
}

export interface CharacterCashItemEquipment {
    date: string;
    character_gender: string;
    character_class: string;
    character_look_mode: string;
    preset_no: number;
    cash_item_equipment_base: CashItem[];
    cash_item_equipment_preset_1: CashItem[];
    cash_item_equipment_preset_2: CashItem[];
    cash_item_equipment_preset_3: CashItem[];
    additional_cash_item_equipment_base: CashItem[];
    additional_cash_item_equipment_preset_1: CashItem[];
    additional_cash_item_equipment_preset_2: CashItem[];
    additional_cash_item_equipment_preset_3: CashItem[];
}

export interface CharacterSymbolEquipment {
    date: string;
    character_class: string;
    symbol: {
        symbol_name: string;
        symbol_icon: string;
        symbol_description: string;
        symbol_other_effect_description: string;
        symbol_force: string;
        symbol_level: string;
        symbol_str: string;
        symbol_dex: string;
        symbol_int: string;
        symbol_luk: string;
        symbol_hp: string;
        symbol_drop_rate: string;
        symbol_meso_rate: string;
        symbol_exp_rate: string;
        symbol_growth_count: number;
        symbol_require_growth_count: number;
    }[];
}

export interface CharacterSetEffect {
    date: string;
    set_effect: {
        set_name: string;
        total_set_count: number;
        set_effect_info: SetEffect[];
        set_option_full: SetEffect[];
    }[];
}

export interface CharacterBeautyEquipment {
    date: string;
    character_gender: string;
    character_class: string;
    character_hair: Hair;
    character_face: Face;
    character_skin: Skin;
    additional_character_hair: Hair;
    additional_character_face: Face;
    additional_character_skin: Skin;
}

export interface CharacterAndroidEquipment extends Android {
    android_cash_item_equipment: AndroidCashItem[];
    android_preset_1: Android;
    android_preset_2: Android;
    android_preset_3: Android;
}

export interface CharacterPetEquipment {
    date: string;
    pet_1_name: string;
    pet_1_nickname: string;
    pet_1_icon: string;
    pet_1_description: string;
    pet_1_equipment: PetEquipment;
    pet_1_auto_skill: PetSkill;
    pet_1_pet_type: string;
    pet_1_skill :string[];
    pet_1_date_expire: string;
    pet_1_appearance: string;
    pet_1_appearance_icon: string;
    pet_2_name: string;
    pet_2_nickname: string;
    pet_2_icon: string;
    pet_2_description: string;
    pet_2_equipment: PetEquipment;
    pet_2_auto_skill: PetSkill;
    pet_2_pet_type: string;
    pet_2_skill :string[];
    pet_2_date_expire: string;
    pet_2_appearance: string;
    pet_2_appearance_icon: string;
    pet_3_name: string;
    pet_3_nickname: string;
    pet_3_icon: string;
    pet_3_description: string;
    pet_3_equipment: PetEquipment;
    pet_3_auto_skill: PetSkill;
    pet_3_pet_type: string;
    pet_3_skill :string[];
    pet_3_date_expire: string;
    pet_3_appearance: string;
    pet_3_appearance_icon: string;
}

export interface CharacterSkill {
    date: string;
    character_class: string;
    character_skill_grade: string;
    character_skill: Skill[];
}

export interface CharacterLinkSkill {
    date: string;
    character_class: string;
    character_link_skill: Skill[];
    character_link_skill_preset_1: SKillBase[];
    character_link_skill_preset_2: SKillBase[];
    character_link_skill_preset_3: SKillBase[];
    character_owned_link_skill: SKillBase[];
    character_owned_link_skill_preset_1: SKillBase[];
    character_owned_link_skill_preset_2: SKillBase[];
    character_owned_link_skill_preset_3: SKillBase[];
}

export interface CharacterVMatrix {
    date: string;
    character_class: string;
    character_v_core_equipment: {
        slot_id: string;
        v_core_name: string;
        v_core_type: string;
        v_core_level: number;
    }[];
    character_v_matrix_remain_slot_upgrade_point: number;
}

export interface CharacterHexaMatrix {
    date: string;
    character_hexa_core_equipment: {
        hexa_core_name: string;
        hexa_core_level: number;
        hexa_core_type: string;
        linked_skill: {
            hexa_skill_id: string;
        }[];
    };
}

export interface CharacterHexaMatrixStat {
    date: string;
    character_class: string;
    character_hexa_stat_core: HexaStat[];
    character_hexa_stat_core_2: HexaStat[];
    character_hexa_stat_core_3: HexaStat[];
    preset_hexa_stat_core: HexaStat[];
    preset_hexa_stat_core_2: HexaStat[];
    preset_hexa_stat_core_3: HexaStat[];
}

export interface CharacterDojang {
    date: string;
    character_class: string;
    world_name: string;
    dojang_best_floor: number;
    date_dojang_record: string;
    dojang_best_time: number;
}

export interface CharacterOtherStat {
    date: string;
    other_stat: {
        other_stat_type: string;
        stat_info: Stat[];
    }[];
}

export interface RingExchangeSkillEquipment {
    date: string;
    character_class: string;
    special_ring_exchange_name: string;
    special_ring_exchange_level: number;
    special_ring_exchange_icon: string;
    special_ring_exchange_description: string;
}
