import logger from 'core/logger';
import { freeMem } from 'core/memory/extension';
import commandAll from 'logic/obligator';

export const loop = () => {
  logger.header(Game.time);
  healthCheck();

  if (Game.time % 100 === 0) {
    freeMem();
  }

  commandAll();
  logger.footer();
};

// @ init functions

function healthCheck() {
  if (Game.time % 10 === 0) {
    logger.spawns();
    logger.population();
  }
}
