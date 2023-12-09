import { RoleNames } from "core/roles/role.types";

export default class PopulationStore {
  static population: { [key: string]: number } = {};

  static {
    console.log('📝 PopulationStore init');

    const creeps = Object.keys(Game.creeps);

    const roleNames = Object.values(RoleNames);
    for (const roleName of roleNames) {
      this.population[roleName] = 0;
    }

    for (const creepName of creeps) {
      const role = Game.creeps[creepName].memory.role || '🦥 No role';

      if (!this.population[role]) {
        this.population[role] = 0;
      }

      this.population[role]++;
    }
  }

  static addCreep(role: string) {
    this.population[role]++;
  }

  static removeCreep(role: string) {
    this.population[role]--;
  }

}
