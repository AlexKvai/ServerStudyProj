import { LoggerService } from './logger/logger.service';
import { App } from './app';

async function bootstrap() {
  const app = new App(new LoggerService());
  await app.init();
}

bootstrap();
