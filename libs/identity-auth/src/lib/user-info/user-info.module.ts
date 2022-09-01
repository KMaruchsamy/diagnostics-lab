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
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { userInfoReducer } from './+store';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterationComponent } from './components/registeration/registeration.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { MatTableModule } from '@angular/material/table';

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
    RegisterationComponent,
    UserDetailsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatTabsModule,
    MatInputModule,
    MatTableModule,
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
