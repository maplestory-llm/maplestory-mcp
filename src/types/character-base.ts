// Base types for Character related types

// Stat related type
export interface Stat {
    stat_name: string;
    stat_value: string;
}

// HyperStat related type
export interface HyperStat {
    stat_type: string;
    stat_point: number;
    stat_level: number;
    stat_increase: string;
}

// Ability related types
export interface AbilityInfo {
    ability_no: string;
    ability_grade: string;
    ability_value: string;
}

export interface AbilityPreset {
    description: string;
    ability_preset_grade: string;
    ability_info: AbilityInfo[];
}

// ItemEquipment related types
interface OptionBase1 {
    str: string;
    dex: string;
    int: string;
    luk: string;
    max_hp: string;
    max_mp: string;
    attack_power: string;
    magic_power: string;
}

interface OptionBase2 extends OptionBase1 {
    armor: string;
    speed: string;
    jump: string;
}

interface OptionBase3 extends OptionBase2 {
    boss_damage: string;
    damage: string;
    all_stat: string;
}

interface OptionBase4 extends OptionBase3 {
    ignore_monster_armor: string;
    max_hp_rate: string;
    max_mp_rate: string;
}

interface ExceptionalOption extends OptionBase1 {
    exceptional_upgrade: number;
}

interface AddOption extends OptionBase3 {
    equipment_level_decrease: number;
}

interface TotalOption extends OptionBase4 {
    equipment_level_decrease: number;
}

interface BaseOption extends OptionBase4 {
    base_equipment_level: number;
}

interface ItemBase {
    item_equipment_part: string;
    item_name: string;
    item_icon: string;
    item_description: string;
    item_shape_name: string;
    item_shape_icon: string;
    item_gender: string;
    item_total_option: TotalOption;
    item_base_option: BaseOption;
    equipment_level_increase: number;
    item_exception_option: ExceptionalOption;
    item_add_option: AddOption;
    growth_exp: number;
    growth_level: number;
    scroll_upgrade: string;
    cuttable_count: string;
    golden_hammer_flag: string;
    scroll_resilience_count: string;
    scroll_upgradable_count: string;
    soul_name: string;
    soul_option: string;
    item_etc_option: OptionBase2;
    starforce: string;
    starforce_scroll_flag: string;
    item_starforce_option: OptionBase2;
    special_ring_level: number;
    date_expire: string;
    freestyle_flag: string;
}

export interface Item extends ItemBase {
    item_equipment_slot: string;
    potential_option_flag: string;
    additional_potential_option_flag: string;
    potential_option_grade: string;
    additional_potential_option_grade: string;
    potential_option_1: string;
    potential_option_2: string;
    potential_option_3: string;
    additional_potential_option_1: string;
    additional_potential_option_2: string;
    additional_potential_option_3: string;
}

export interface SpecialItem extends ItemBase {
    equipment_slot: string;
}

// CashItemEquipment related type
interface ItemOption {
    option_type: string;
    option_value: string;
}

interface Prism {
    color_range: string;
    hue: number;
    saturation: number;
    value: number;
}

interface CashItemBase {
    cash_item_equipment_part: string;
    cash_item_equipment_slot: string;
    cash_item_name: string;
    cash_item_icon: string;
    cash_item_description: string;
    cash_item_option: ItemOption;
    date_expire: string;
    date_option_expire: string;
    cash_item_label: string;
    cash_item_coloring_prims: Prism;
    freestyle_flag: string;
}

export interface CashItem extends CashItemBase {
    cash_item_effect_prims: Prism;
    item_gender: string;
    skills: string[];
    emotion_name: string;
}

// SetEffect related type
export interface SetEffect {
    set_count: number;
    set_option: string;
}

// BeautyEquipment related types
interface BeautyBase {
    base_color: string;
    mix_color: string;
    mix_rate: string;
    freestyle_flag: string;
}

export interface Hair extends BeautyBase {
    hair_name: string;
}

export interface Face extends BeautyBase {
    face_name: string;
}

export interface Skin {
    skin_name: string;
    color_style: string;
    hue: number;
    saturation: number;
    brightness: number;
}

// AndroidEquipment related types
export interface AndroidCashItem extends CashItemBase {
    android_item_gender: string;
}

export interface Android {
    date: string;
    android_name: string;
    android_nickname: string;
    android_icon: string;
    android_description: string;
    android_gender: string;
    android_grade: string;
    android_hair: Hair;
    android_face: Face;
    android_skin: Skin;
    android_ear_sensor_clip_flag: string;
    android_non_humanoid_flag: string;
    android_shop_usable_flag: string;
}

// CharacterPetEquipment related types
export interface PetEquipment {
    item_name: string;
    item_icon: string;
    item_description: string;
    item_option: ItemOption[];
    scroll_upgrade: number;
    scroll_upgradable: number;
    item_shape: string;
    item_shape_icon: string;
}

export interface PetSkill {
    skill_1: string;
    skill_1_icon: string;
    skill_2: string;
    skill_2_icon: string;
}

// CharacterSkill related types
export interface SKillBase {
    skill_name: string;
    skill_description: string;
    skill_level: number;
    skill_effect: string;
    skill_icon: string;
}

export interface Skill {
    skill_effect_next: string;
}

// CharacterHexaMatrixStat related type
export interface HexaStat {
    slot_id: string;
    main_stat_name: string;
    sub_stat_name_1: string;
    sub_stat_name_2: string;
    main_stat_level: number;
    sub_stat_level_1: number;
    sub_stat_level_2: number;
    stat_grade: number;
}