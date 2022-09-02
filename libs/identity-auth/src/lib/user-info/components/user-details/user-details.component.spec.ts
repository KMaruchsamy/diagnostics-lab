import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserDetailsComponent } from './user-details.component';
import { MatTableModule } from '@angular/material/table';

describe('UserDetailsComponent', () => {
  let component: UserDetailsComponent;
  let fixture: ComponentFixture<UserDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserDetailsComponent],
      imports: [MatTableModule],
    }).compileComponents();

    fixture = TestBed.createComponent(UserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('remove user event triggered', () => {
    jest.spyOn(component.deleteUser, 'emit');
    const userId = '7f36e02f-09c7-4d79-aad7-90d519371b71';
    component.removeUser(userId);
    expect(component.deleteUser.emit).toHaveBeenCalledWith(userId);
  });
});
