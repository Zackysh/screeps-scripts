import { RoleStats } from "core/core.types";

export function calcRoleStats(bodyParts: BodyPartConstant[]): RoleStats {
  const workParts: number = bodyParts.filter(part => part === WORK).length;

  return {
    workStats: {
      energyIncome: workParts * 2,
      mineralIncome: workParts,
      buildCost: workParts * 5,
      repairStats: {
        hits: workParts * 100,
        energyCost: workParts,
      },
      dismantleStats: {
        hits: workParts * 50,
        energyIncome: workParts * 0.25,
      },
      upgradeSpeed: workParts,
    },
  };
}
