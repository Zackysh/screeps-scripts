import commandCreeps from './obligators/creep.obligator';
import commandSpawns from './obligators/spawn.obligator';

function commandAll() {
  commandCreeps();
  commandSpawns();
}

export default commandAll;
