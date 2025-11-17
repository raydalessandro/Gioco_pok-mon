"use client";

import { useState } from "react";
import { POKEMON_DB } from "@/lib/pokemon";
import type { Pokemon, BattleState } from "@/lib/types";

export default function Home() {
  const [battleState, setBattleState] = useState<BattleState | null>(null);
  const [log, setLog] = useState<string[]>([]);

  const startBattle = () => {
    const playerPokemon = POKEMON_DB[0]; // Pikachu
    const opponentPokemon = POKEMON_DB[1]; // Charmander

    const initialState: BattleState = {
      playerPokemon: {
        ...playerPokemon,
        currentHp: playerPokemon.stats.hp,
        maxHp: playerPokemon.stats.hp,
        energy: 100,
        maxEnergy: 100,
        statusCondition: null,
      },
      opponentPokemon: {
        ...opponentPokemon,
        currentHp: opponentPokemon.stats.hp,
        maxHp: opponentPokemon.stats.hp,
        energy: 100,
        maxEnergy: 100,
        statusCondition: null,
      },
      turn: 1,
      playerTurn: true,
      battleLog: ["Battaglia iniziata!"],
      status: "active",
    };

    setBattleState(initialState);
    setLog(["Battaglia iniziata!"]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-300 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-900">
          Pokémon Battle AI
        </h1>

        {!battleState ? (
          <div className="text-center">
            <button
              onClick={startBattle}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-xl"
            >
              Inizia Battaglia
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Battle Arena */}
            <div className="grid grid-cols-2 gap-8">
              {/* Player Pokemon */}
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h2 className="text-2xl font-bold mb-4 text-green-600">
                  Il tuo {battleState.playerPokemon.name}
                </h2>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>HP:</span>
                    <span className="font-bold">
                      {battleState.playerPokemon.currentHp} /{" "}
                      {battleState.playerPokemon.stats.hp}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-4">
                    <div
                      className="bg-green-500 h-4 rounded-full"
                      style={{
                        width: `${
                          (battleState.playerPokemon.currentHp /
                            battleState.playerPokemon.stats.hp) *
                          100
                        }%`,
                      }}
                    />
                  </div>
                  <div className="flex justify-between mt-2">
                    <span>Energy:</span>
                    <span className="font-bold">
                      {battleState.playerPokemon.energy}/100
                    </span>
                  </div>
                </div>
              </div>

              {/* Opponent Pokemon */}
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h2 className="text-2xl font-bold mb-4 text-red-600">
                  Avversario {battleState.opponentPokemon.name}
                </h2>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>HP:</span>
                    <span className="font-bold">
                      {battleState.opponentPokemon.currentHp} /{" "}
                      {battleState.opponentPokemon.stats.hp}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-4">
                    <div
                      className="bg-red-500 h-4 rounded-full"
                      style={{
                        width: `${
                          (battleState.opponentPokemon.currentHp /
                            battleState.opponentPokemon.stats.hp) *
                          100
                        }%`,
                      }}
                    />
                  </div>
                  <div className="flex justify-between mt-2">
                    <span>Energy:</span>
                    <span className="font-bold">
                      {battleState.opponentPokemon.energy}/100
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Battle Log */}
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-4">Log di Battaglia</h3>
              <div className="bg-gray-100 rounded p-4 h-64 overflow-y-auto">
                {log.map((entry, index) => (
                  <div key={index} className="mb-2">
                    {entry}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
