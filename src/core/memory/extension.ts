import PopulationStore from "core/stores/population.store";

declare global {

  interface CreepMemory {
    role?: string;
    targetSourceId?: string;
  }

  function myGlobalFunction(): void;
}

export function freeMem() {
  for (const name in Memory.creeps) {
    if (!(name in Game.creeps)) {
      PopulationStore.removeCreep(Memory.creeps[name].role || '🦥 No role');
      delete Memory.creeps[name];
    }
  }
}
