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

export interface CharacterItemEquipment {
    date: string
    character_gender: string
    character_class: string
    preset_no: number
    
}