import { Action, Get } from "routing-controllers";
import { ILoggerFactory, ILoggerFactoryType } from "../logging";


export default (iocContainer: { get<T>(someClass: any): any }) => async (action: Action, roles: string[]) => {
  // here you can use request/response objects from action
  // also if decorator defines roles it needs to access the action
  // you can use them to provide granular access check
  // checker must return either boolean (true or false)
  // either promise that resolves a boolean value
  // demo code:

  const lfactory = iocContainer.get<ILoggerFactory>(ILoggerFactoryType);
  const logger = lfactory.createLogger(module.filename);
  logger.info('Authorizing...');

  return true;
}