import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';
import { StoreModule } from '@ngrx/store';
import { RegisterationComponent } from '../../components/registeration/registeration.component';
import { UserDetailsComponent } from '../../components/user-details/user-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContentComponent } from './content.component';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';

describe('ContentComponent', () => {
  let component: ContentComponent;
  let fixture: ComponentFixture<ContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ContentComponent,
        RegisterationComponent,
        UserDetailsComponent,
      ],
      imports: [
        FormsModule,
        MatFormFieldModule,
        MatDialogModule,
        ReactiveFormsModule,
        MatTabsModule,
        BrowserAnimationsModule,
        MatInputModule,
        MatTableModule,
        StoreModule.forRoot([]),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
