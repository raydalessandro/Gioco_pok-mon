import { LIMITS } from "./rules";
import { PokemonType } from "./types";

export const interpretPrompt = (name: string, type: PokemonType, command: string, player: number) =>
  `Sei ${name}, un Pokémon di tipo ${type} controllato da Player ${player}.
Il tuo allenatore ti ha dato questo comando: "${command}"
Rispondi in PRIMA PERSONA con 1-2 frasi cinematografiche su come esegui l'azione. Solo testo.`;

export const evaluatePrompt = (args: {
  attack_command: string; defense_command: string;
  attacker: { name: string; type: PokemonType; hp: string; energy: string; momentum: number };
  defender: { name: string; type: PokemonType; hp: string; energy: string; momentum: number };
  attacker_player: number; defender_player: number; type_multiplier: number;
}) => {
  const R = LIMITS, A = args.attacker, D = args.defender;
  return `Sei l'ARBITRO IMPARZIALE di una battaglia Pokémon.
ATTACCANTE: ${A.name} (tipo: ${A.type}), Player ${args.attacker_player}, Stat: HP ${A.hp} | Energy ${A.energy} | Momentum ${A.momentum}
Comando attacco: "${args.attack_command}"

DIFENSORE: ${D.name} (tipo: ${D.type}), Player ${args.defender_player}, Stat: HP ${D.hp} | Energy ${D.energy} | Momentum ${D.momentum}
Comando difesa: "${args.defense_command}"

Vantaggio di tipo: ${args.type_multiplier}x

RISPOSTA SOLO JSON VALIDO, senza markdown:
{
  "narrative": "descrizione epica con ${A.name} e ${D.name}",
  "attackerDamage": numero_${R.MIN_A_DMG}_to_${R.MAX_A_DMG},
  "defenderDamage": numero_${R.MIN_D_DMG}_to_${R.MAX_D_DMG},
  "attackerEnergyUsed": numero_${R.MIN_A_EN}_to_${R.MAX_A_EN},
  "defenderEnergyUsed": numero_${R.MIN_D_EN}_to_${R.MAX_D_EN},
  "defenderStatus": "normal|burned|paralyzed|poisoned",
  "momentumShift": numero_-2_to_2,
  "effectiveness": "critical|effective|normal|weak|failed"
}`;
};
