import { Routes } from '@angular/router';
import { PageComponent } from './page/page.component';
import { CartComponent } from './cart/cart.component';
import {ZoomComponent} from './zoom/zoom.component';

export const routes: Routes = [
        { path: 'home',
    component: PageComponent
    },
    { path: 'cart',
    component: CartComponent
    },
    { 
    component: ZoomComponent,
    path: 'zoom/:productId'
    },
    {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
    }
    ];

//export default routes;