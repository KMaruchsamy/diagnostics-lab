import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';
import { Store, StoreModule } from '@ngrx/store';
import { RegisterationComponent } from '../../components/registeration/registeration.component';
import { UserDetailsComponent } from '../../components/user-details/user-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContentComponent } from './content.component';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { AppState } from '../../+store/app.state';
import {
  AddAddress,
  AddUser,
  DeleteAddress,
  DeleteUser,
  getFilteredUsers,
} from '../../+store';
import { mockUser } from '../../models';

describe('ContentComponent', () => {
  let component: ContentComponent;
  let fixture: ComponentFixture<ContentComponent>;
  let store: Store<AppState>;

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
    store = TestBed.inject(Store);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    test('should call getFilteredUsers selector', () => {
      // arrange
      const selectSpy = jest.spyOn(store, 'select');
      // act
      component.ngOnInit();
      // assert
      expect(selectSpy).toHaveBeenCalledWith(getFilteredUsers);
    });
  });
  describe('Address Action Events', () => {
    test('addAddress action should be dispatched with address', () => {
      // arrange
      jest.spyOn(store, 'dispatch');
      const payload = {
        userId: '7f36e02f-09c7-4d79-aad7-90d519371b71',
        address: mockUser.address[0],
      };
      // act
      component.addAddress(payload);
      // assert
      expect(store.dispatch).toHaveBeenCalledWith(AddAddress(payload));
    });

    test('deleteAddress action should be dispatched with userId and addressId', () => {
      // arrange
      jest.spyOn(store, 'dispatch');
      const payload = {
        userId: '7f36e02f-09c7-4d79-aad7-90d519371b71',
        addressId: '026f6642-61bc-4aba-9507-094a355d5e9d',
      };
      // act
      component.deleteAddress(payload);
      // assert
      expect(store.dispatch).toHaveBeenCalledWith(DeleteAddress(payload));
    });
  });

  describe('Uesr Action Events', () => {
    test('AddUser action should be dispatched with user details', () => {
      // arrange
      jest.spyOn(store, 'dispatch');
      const payload = {
        user: mockUser,
      };
      // act
      component.userRegister(payload.user);
      // assert
      expect(store.dispatch).toHaveBeenCalledWith(AddUser(payload));
    });

    test('deleteAddress action should be dispatched with userId', () => {
      // arrange
      jest.spyOn(store, 'dispatch');
      const payload = {
        userId: '7f36e02f-09c7-4d79-aad7-90d519371b71',
      };
      // act
      component.deleteUser(payload.userId);
      // assert
      expect(store.dispatch).toHaveBeenCalledWith(DeleteUser(payload));
    });
  });
});
