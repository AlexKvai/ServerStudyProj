import { LoggerService } from './logger/logger.service';
import { App } from './app';
import { UserController } from './users/users.controller';
import { ExceptionFilter } from './errors/exeption.filter';

async function bootstrap() {
  const logger = new LoggerService();
  const app = new App(
    logger,
    new UserController(logger),
    new ExceptionFilter(logger)
  );
  await app.init();
}

bootstrap();
