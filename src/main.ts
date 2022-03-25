import { IExeptionFilter } from './errors/exception.filter.interface';
import { TYPES } from './types';
import { ILogger } from './logger/logger.interface';
import { LoggerService } from './logger/logger.service';
import { App } from './app';
import { UserController } from './users/users.controller';
import { ExeptionFilter } from './errors/exeption.filter';
import { Container, ContainerModule, interfaces } from 'inversify';

// const logger = new LoggerService();
// const app = new App(
//   logger,
//   new UserController(logger),
//   new ExceptionFilter(logger)
// );

export interface IBoostrapReturn {
	appContainer: Container;
	app: App;
}

export const appBindings = new ContainerModule((bind: interfaces.Bind) => {
	bind<ILogger>(TYPES.ILogger).to(LoggerService);
	bind<IExeptionFilter>(TYPES.ExeptionFilter).to(ExeptionFilter);
	bind<UserController>(TYPES.UserController).to(UserController);
	bind<App>(TYPES.Application).to(App);
});

function boostrap(): IBoostrapReturn {
	const appContainer = new Container();
	appContainer.load(appBindings);
	const app = appContainer.get<App>(TYPES.Application);
	app.init();
	return { app, appContainer };
}

export const { app, appContainer } = boostrap();
