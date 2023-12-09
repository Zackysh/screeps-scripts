export interface RoleStats {
  workStats: {
    energyIncome: number;
    mineralIncome: number;
    buildCost: number;
    repairStats: {
      hits: number;
      energyCost: number;
    };
    dismantleStats: {
      hits: number;
      energyIncome: number;
    };
    upgradeSpeed: number;
  },
}

export interface Role {
  run: (creep: Creep) => void;
  body: BodyPartConstant[];
  cost: number;
  stats: RoleStats;
}
