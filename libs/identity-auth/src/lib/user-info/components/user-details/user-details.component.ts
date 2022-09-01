import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'identity-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent implements OnInit {
  @Input() userDetails: any;
  @Input() displayedColumns?: string[];
  @Output() deleteUser: EventEmitter<string> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  removeUser(userId: string) {
    this.deleteUser.emit(userId);
  }
}
