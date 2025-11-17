export enum PokemonType { ELECTRIC="electric", FIRE="fire", WATER="water", GRASS="grass", NORMAL="normal" }

export type PokemonStats = {
  name: string; type: PokemonType;
  max_hp: number; max_energy: number;
  icon: string; description: string; moves: string[];
  current_hp: number; current_energy: number; status: "normal"|"burned"|"paralyzed"|"poisoned"; momentum: number;
};

export type BattleOutcome = {
  narrative: string;
  attacker_damage: number; defender_damage: number;
  attacker_energy_used: number; defender_energy_used: number;
  defender_status: "normal"|"burned"|"paralyzed"|"poisoned";
  momentum_shift: number; effectiveness: "critical"|"effective"|"normal"|"weak"|"failed";
};

export type BattlePhase = "attack" | "defend";
