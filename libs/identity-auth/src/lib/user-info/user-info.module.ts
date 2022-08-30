import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './containers/header/header.component';
import { FooterComponent } from './containers/footer/footer.component';
import { MainComponent } from './main.component';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './containers/content/content.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { userInfoReducer } from './+store';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
];

@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    RouterModule.forChild(routes),
    StoreModule.forRoot({
      user: userInfoReducer,
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: true,
    }),
  ],
})
export class UserInfoModule {}
