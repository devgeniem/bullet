import { Action, Get } from 'routing-controllers';
import { ILoggerFactory, ILoggerFactoryType } from '../LoggerFactory';


export default (iocContainer: { get<T>(someClass: any): any }) => async (action: Action, permissions: string[]) => {
  const lfactory = iocContainer.get<ILoggerFactory>(ILoggerFactoryType);
  const logger = lfactory.createLogger(module.filename);
  logger.info('Authorizing...');

  console.log('Permission:', permissions);
  console.log('params', action.request.params);
  console.log('query', action.request.query);

  return true;
};
