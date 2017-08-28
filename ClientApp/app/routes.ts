import { Routes } from '@angular/router';

import { Error404Component } from './components/errors/404.component';

export const appRoutes: Routes = [
    { path: '', redirectTo: 'events', pathMatch: 'full' },
    { path: '404', component: Error404Component },
    { path: 'user', loadChildren:'./components/user/user.module#UserModule'},
]