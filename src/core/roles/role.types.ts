import { Role } from "core/core.types";
import harvester from "./harvester/harvester.role";

export const RoleNames = {
  HARVESTER: '⚡ harvester',
} as const;

type RoleName = typeof RoleNames[keyof typeof RoleNames];
type RoleMap<T> = { [key in RoleName]: T };

export const roles: RoleMap<Role> = {
  [RoleNames.HARVESTER]: harvester,
}

export const TargetPopulation: RoleMap<number> = {
  [RoleNames.HARVESTER]: 5,
} as const;

export function isRole(role?: string): role is RoleName {
  return role !== undefined && Object.values(RoleNames).some(r => r === role);
}
