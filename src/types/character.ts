// *_date 류의 날짜 데이터는 전부 아래의 양식을 따름.
// KST, 일단위 데이터. 시, 분은 일괄적으로 0으로 표기
// ex) 2023-12-21T00:00+09:00

export interface Character {
    ocid: string
}

export interface CharacterBasic {
    date: string
    character_name: string
    world_name: string
    character_gender: string
    character_class: string
    character_class_level: string
    character_level: number
    character_exp: number
    character_exp_rate: string
    character_guild_name: string
    character_image: string         // URL을 리턴함
    character_date_create: string
    access_flag: string             // true: 접속, false: 미접속
    liberation_quest_clear: string  // 0: 미해방, 1: 제네시스, 2: 데스티니 1차
}

export interface CharacterPopularity {
    date: string
    popularity: number
}

export interface CharacterStat {
    date: string
    character_class: string
    final_stat: {
        stat_name: string
        stat_value: string
    }[]
    remain_ap: number
}

interface HyperStat {
    stat_type: string
    stat_point: number
    stat_level: number
    stat_increase: string
}

export interface CharacterHyperStat {
    date: string
    character_class: string
    use_preset_no: string
    use_available_hyper_stat: number
    hyper_stat_preset_1: HyperStat[]
    hyper_stat_preset_1_remain_point: number
    hyper_stat_preset_2: HyperStat[]
    hyper_stat_preset_2_remain_point: number
    hyper_stat_preset_3: HyperStat[]
    hyper_stat_preset_3_remain_point: number
}

export interface CharacterPropensity {
    date: string
    charisma_level: number
    sensibility_level: number
    insight_level: number
    willingness_level: number
    handicraft_level: number
    charm_level: number
}

interface AbilityInfo {
    ability_no: string
    ability_grade: string
    ability_value: string
}

interface AbilityPreset {
    description: string
    ability_preset_grade: string
    ability_info: AbilityInfo[]
}

export interface CharacterAbility {
    date: string
    ability_grade: string
    ability_info: AbilityInfo[]
    remain_fame: number
    preset_no: number
    ability_preset_1: AbilityPreset
    ability_preset_2: AbilityPreset
    ability_preset_3: AbilityPreset
}

interface ItemOptionBase {
    str: string
    dex: string
    int: string
    luk: string
    max_hp: string
    max_mp: string
    attack_power: string
    magic_power: string
    armor: string
    speed: string
    jump: string
    boss_damage: string
    ignore_monster_armor: string
    all_stat: string
    damage: string
    max_hp_rate: string
    max_mp_rate: string
}

interface ItemTotalOption extends ItemOptionBase {
    equipment_level_decrease: number
}

interface ItemBaseOption extends ItemOptionBase {
    base_equipment_level: number
}

interface Item {
    item_equipment_part: string
    item_equipment_slot: string
    item_name: string
    item_icon: string                           // URL을 리턴함
    item_description: string
    item_shape_name: string
    item_shape_icon: string
    item_gender: string
    item_total_option: ItemTotalOption
    item_base_option: ItemBaseOption
    potential_option_flag: string               // true: 봉인, false: 봉인 없음
    additional_potential_option_flag: string    // true: 봉인, false: 봉인 없음
    potential_option_grade: string
    additional_potential_option_grade: string
    potential_option_1: string
    potential_option_2: string
    potential_option_3: string
    additional_potential_option_1: string
    additional_potential_option_2: string
    additional_potential_option_3: string
    equipment_level_increase: number
    item_exception_option: ItemOptionBase
    item_add_option: ItemOptionBase
    growth_exp: number
    growth_level: number
    scroll_upgrade: string
    cuttable_count: string                      // 교불장비나 무교 장비는 255
    golden_hammer_flag: string                  // 1: 황망 적용, 이외는 미적용
    scroll_resilience_count: string
    scroll_upgradable_count: string
    soul_name: string
    soul_option: string
    item_etc_option: ItemOptionBase
    starforce: string
    starforce_scroll_flag: string               // 0: 놀장 미사용 1: 놀장 사용
    item_starforce_option: ItemOptionBase
    special_ring_level: number
    date_expire: string                         // 장비 유효 기간. expired: 만료, null: 무제한, 그 외의 경우 날짜
    freestyle_flag: string                      // 0: 프리스타일 미적용 1: 프리스타일 적용
}

export interface CharacterItemEquipment {
    date: string
    character_gender: string
    character_class: string
    preset_no: number
    item_equipment: Item[]
    item_equipment_preset_1: Item[]
    item_equipment_preset_2: Item[]
    item_equipment_preset_3: Item[]
    title: {
        title_name: string
        title_icon: string              // URL로 리턴함
        title_description: string
        date_expire: string
        date_option_expire: string
        title_shape_name: string
        title_shape_icon: string        // URL로 리턴함
        title_shape_description: string
    }
    medal_shape: {
        medal_shape_name: string
        medal_shape_icon: string
        medal_shape_description: string
        medal_shape_changed_name: string
        medal_shape_changed_icon: string
        medal_shape_changed_description: string
    }
}