import { RoleNames, TargetPopulation, roles } from 'core/roles/role.types';
import PopulationStore from 'core/stores/population.store';
import { DebugConfig } from 'core/utils/debug.util';



function commandSpawns(): void {
  for (const roleName of Object.values(RoleNames)) {
    if (PopulationStore.population[roleName] >= TargetPopulation[roleName]) {
      continue;
    }

    for (const spawn of Object.values(Game.spawns)) {
      if (spawn.spawning) {
        return;
      }

      if (spawn.store.getUsedCapacity(RESOURCE_ENERGY) < roles[roleName].cost) {
        if (DebugConfig.ENERGY) console.log('🚫', 'not enough energy ⚡ to spawn', roleName);
        return;
      }

      const result = spawn.spawnCreep(
        roles[roleName].body,
        `${roleName}-${Game.time}`,
        { memory: { role: roleName } }
      );

      if (result === OK) {
        PopulationStore.addCreep(roleName);
      } else {
        console.log('🚫', roleName, 'spawn error:', result);
      }
    }
  }
}

export default commandSpawns;
