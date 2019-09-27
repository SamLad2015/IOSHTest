import {Component, OnInit} from '@angular/core';
import { UsersService} from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  users: any = [];
  selectedUser: any;
  title = 'IOSHTest';

  constructor(private usersService: UsersService) {
  }

  ngOnInit() {
    this.usersService.getAllUsers().subscribe(users => {
      this.users = users;
    });
  }


  onItemClick(user) {
    this.usersService.getAUser(user.id).subscribe(returnedUser => {
      this.selectedUser = returnedUser[0];
    });
  }
}
