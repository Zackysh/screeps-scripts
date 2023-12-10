import { RoleNames } from './roles/role.types';
import PopulationStore from './stores/population.store';

const logger = {
  header: (message: unknown) => {
    console.log('\n➰     ➰     ➰      🟢 ', message, ' 🟢');
  },
  population: () => {
    const creeps = Object.keys(Game.creeps);
    console.log('👨‍👩‍👧 Population', creeps.length);
    for (const roleName of Object.values(RoleNames)) {
      console.log('◽ ', roleName, PopulationStore.population[roleName] || 0);
    }
  },
  spawns: () => {
    console.log('🏠 Spawns', Object.values(Game.spawns).length);
    for (const spawn of Object.values(Game.spawns)) {
      console.log('◽ ', spawn.name, spawn.store.getUsedCapacity(RESOURCE_ENERGY), '⚡');
    }
  },
  footer: () => {
    console.log('➰     ➰     ➰      ⭕  LOG END  ⭕');
  }
};

export default logger;
