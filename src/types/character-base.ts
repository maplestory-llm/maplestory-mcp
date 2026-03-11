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

// SetEffect related type
export interface SetEffect {
    set_count: number;
    set_option: string;
}