import work from "core/roles/work";

function commandCreeps() {
  for (const name in Game.creeps) {
    work(Game.creeps[name]);
  }
}

export default commandCreeps;
