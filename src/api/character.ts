import {nexonFetch} from "./client.js";
import type {Character, CharacterBasic} from "../types/character.js"

export async function fetchOcid(characterName: string): Promise<Character> {
    const query = new URLSearchParams({"character_name": characterName})
    return nexonFetch<Character>(`/id?${query}`)
}

export async function fetchCharacterBasic(ocid: string, date?: string): Promise<CharacterBasic> {
    const query = new URLSearchParams({"ocid": ocid})
    if (date)
        query.set("date", date)

    return nexonFetch<CharacterBasic>(`/character/basic?${query}`)
}