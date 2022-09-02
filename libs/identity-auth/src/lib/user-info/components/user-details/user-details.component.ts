import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'identity-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent {
  @Input() userDetails: any;
  @Input() displayedColumns?: string[];
  @Output() deleteUser: EventEmitter<string> = new EventEmitter();

  removeUser(userId: string) {
    this.deleteUser.emit(userId);
  }
}
