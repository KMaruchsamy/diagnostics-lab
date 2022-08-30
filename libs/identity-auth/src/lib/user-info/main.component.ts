import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './+store/app.state';

@Component({
  selector: 'identity-auth-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}
}
