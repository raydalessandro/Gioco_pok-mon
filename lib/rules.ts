import { PokemonType } from "./types";

export const TYPE_ADVANTAGES: Record<PokemonType, Partial<Record<PokemonType, number>>> = {
  [PokemonType.ELECTRIC]: { [PokemonType.WATER]: 1.5, [PokemonType.GRASS]: 0.7, [PokemonType.FIRE]: 1.0, [PokemonType.ELECTRIC]: 1.0 },
  [PokemonType.FIRE]:     { [PokemonType.GRASS]: 1.5, [PokemonType.WATER]: 0.7, [PokemonType.ELECTRIC]: 1.0, [PokemonType.FIRE]: 1.0 },
  [PokemonType.WATER]:    { [PokemonType.FIRE]: 1.5, [PokemonType.ELECTRIC]: 0.7, [PokemonType.GRASS]: 1.0, [PokemonType.WATER]: 1.0 },
  [PokemonType.GRASS]:    { [PokemonType.WATER]: 1.5, [PokemonType.FIRE]: 0.7, [PokemonType.ELECTRIC]: 1.0, [PokemonType.GRASS]: 1.0 },
  [PokemonType.NORMAL]: {}
};

export const LIMITS = {
  MIN_A_DMG: 0, MAX_A_DMG: 25,
  MIN_D_DMG: 10, MAX_D_DMG: 40,
  MIN_A_EN: 10, MAX_A_EN: 25,
  MIN_D_EN: 5,  MAX_D_EN: 20,
};

export const typeMultiplier = (a: PokemonType, d: PokemonType) => TYPE_ADVANTAGES[a]?.[d] ?? 1.0;
export const clamp = (v:number,lo:number,hi:number)=>Math.max(lo,Math.min(v,hi));
