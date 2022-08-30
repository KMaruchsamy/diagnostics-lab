import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRootComponent } from './app-root.component';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/user',
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./user-info/user-info.module').then((m) => m.UserInfoModule),
  },
];
@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  declarations: [AppRootComponent],
  exports: [AppRootComponent],
})
export class IdentityAuthModule {}
