import * as winston from 'winston';
import { Format } from 'logform';


const createFormatter = (name: string): Format => winston.format.combine(
  winston.format.colorize(),
  winston.format.timestamp(),
  winston.format.align(),
  winston.format.printf(info => `${info.timestamp} [${name}] ${info.level}: ${info.message}`)
);

const createLogger = (name: string): winston.Logger => winston.createLogger({
  level: 'info',
  format: createFormatter(name),
  transports: [
    new winston.transports.Console()
  ]
});

export default createLogger;