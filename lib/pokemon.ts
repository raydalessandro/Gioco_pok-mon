import { PokemonStats, PokemonType } from "./types";

export const POKEMON_DB: Record<string, PokemonStats> = {
  pikachu:   { name:"Pikachu",   type:PokemonType.ELECTRIC, max_hp:100, max_energy:100, icon:"⚡", description:"Veloce e agile, esperto in attacchi elettrici", moves:["Thunderbolt","Quick Attack","Thunder Wave","Agility"], current_hp:100, current_energy:100, status:"normal", momentum:0 },
  charmander:{ name:"Charmander",type:PokemonType.FIRE,     max_hp:110, max_energy: 90, icon:"🔥", description:"Potente e aggressivo, padrone delle fiamme",    moves:["Flamethrower","Scratch","Ember","Fire Spin"],    current_hp:110, current_energy: 90, status:"normal", momentum:0 },
  squirtle:  { name:"Squirtle",  type:PokemonType.WATER,    max_hp:105, max_energy: 95, icon:"💧", description:"Difensivo e tattico, maestro dell'acqua",     moves:["Water Gun","Withdraw","Bubble","Aqua Tail"],     current_hp:105, current_energy: 95, status:"normal", momentum:0 },
  bulbasaur: { name:"Bulbasaur", type:PokemonType.GRASS,    max_hp:115, max_energy: 85, icon:"🌿", description:"Resiliente e persistente, controllo della natura", moves:["Vine Whip","Razor Leaf","Leech Seed","Synthesis"], current_hp:115, current_energy: 85, status:"normal", momentum:0 },
};

export const resetStats = (p: PokemonStats): PokemonStats =>
  ({ ...p, current_hp: p.max_hp, current_energy: p.max_energy, status:"normal", momentum:0 });
