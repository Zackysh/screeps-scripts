import { debug } from 'core/utils/debug.util';
import { Role } from '../role.types';

const harvester: Role = {
  run: (creep: Creep) => {
    if (creep.store.getFreeCapacity() > 0) {
      const sources = creep.room.find(FIND_SOURCES);

      const closestSource = sources.reduce((closest, source) =>
        distanceTo(creep, source.pos) < distanceTo(creep, closest.pos) ? source : closest
      );

      const result = creep.harvest(closestSource);
      if (result == ERR_NOT_IN_RANGE) {
        // TODO: handle taken sources
        creep.moveTo(closestSource);
      } else if (result == OK) {
        debug('harvested', creep.name);
      }

      return;
    }

    if (creep.transfer(Game.spawns['Spawn1'], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
      creep.moveTo(Game.spawns['Spawn1']);
    }
  },
  body: [WORK, CARRY, MOVE],
  cost: 200,
  stats: {
    workStats: {
      energyIncome: 2,
      mineralIncome: 1,
      buildCost: 5,
      repairStats: {
        hits: 100,
        energyCost: 1,
      },
      dismantleStats: {
        hits: 50,
        energyIncome: 0.25,
      },
      upgradeSpeed: 1,
    },
  },
};

function distanceTo(creep: Creep, target: RoomPosition): number {
  return creep.pos.getRangeTo(target);
}

export default harvester;
