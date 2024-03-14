import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { CartService} from './service/cart.service';
import { ListService } from './service/list.service';
import { StoreService } from './service/store.service';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),CartService,ListService,StoreService, provideAnimationsAsync()]
};
