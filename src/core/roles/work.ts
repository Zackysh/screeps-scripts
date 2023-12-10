import { isRole, roles } from './role.types';

const work = (creep: Creep) => {
  if (isRole(creep.memory.role)) {
    roles[creep.memory.role].run(creep);
  } else {
    console.log('⚠️ No role found for', creep.name);
  }
};

export default work;
