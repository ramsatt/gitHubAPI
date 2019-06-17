import { Component, OnInit } from '@angular/core';
import {GithubService} from '../../services/github.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  userList;
  userName: any;

  constructor(private githubService: GithubService, private router: Router) { }

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.githubService.getUsersByURL().subscribe(
        users => {
          this.userList = users;
        }
    );
  }

  userDetails(username) {
    this.router.navigate(['details/' + username]);
  }

}
