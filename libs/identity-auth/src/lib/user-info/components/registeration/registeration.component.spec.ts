import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { StoreModule } from '@ngrx/store';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RegisterationComponent } from './registeration.component';
import { MatInputModule } from '@angular/material/input';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { mockUser } from '../../models';

describe('RegisterationComponent', () => {
  let component: RegisterationComponent;
  let fixture: ComponentFixture<RegisterationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterationComponent],
      imports: [
        FormsModule,
        MatFormFieldModule,
        MatDialogModule,
        ReactiveFormsModule,
        MatInputModule,
        NoopAnimationsModule,
        StoreModule.forRoot([]),
      ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterationComponent);
    component = fixture.componentInstance;
    component.identityForm.patchValue(mockUser);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('open dialog', () => {
    // arrange
    const openDialogSpy = jest.spyOn(component.dialog, 'open');
    // act
    component.openDialog('data');
    fixture.detectChanges();
    // assert
    expect(openDialogSpy).toHaveBeenCalled();
  });
  describe('button click event', () => {
    it('rigister user event triggered', () => {
      //component.identityForm.patchValue(mockUser);
      jest.spyOn(component.userRegister, 'emit');
      jest.spyOn(component, 'setUniqueUser');
      jest.spyOn(component, 'setUniqueAddress');
      const event = {
        submitter: {
          name: 'register',
        },
      };
      component.register(event);
      component.identityForm.patchValue(mockUser);
      expect(component.setUniqueUser).toBeCalled();
      expect(component.setUniqueAddress).toBeCalled();
      expect(component.userRegister.emit).toHaveBeenCalled();
    });
  });

  it('add address event triggered', () => {
    //component.identityForm.patchValue(mockUser);
    jest.spyOn(component.addAddress, 'emit');
    jest.spyOn(component, 'setUniqueAddress');
    const event = {
      submitter: {
        name: 'addaddress',
      },
    };
    component.register(event);
    expect(component.setUniqueAddress).toBeCalled();
    expect(component.addAddress.emit).toHaveBeenCalled();
  });

  it('delete address event triggered', () => {
    jest.spyOn(component.deleteAddress, 'emit');
    jest.spyOn(component, 'setAddress');
    const event = {
      submitter: {
        name: 'deleteaddress',
      },
    };
    component.register(event);
    component.identityForm.patchValue(mockUser);
    expect(component.setAddress).toBeCalled();
    expect(component.deleteAddress.emit).toHaveBeenCalled();
  });
});
