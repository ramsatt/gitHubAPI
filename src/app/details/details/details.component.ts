import { Component, OnInit } from '@angular/core';
import {GithubService} from '../../services/github.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  userName: any;
  userDetails: any;
  reposList: any;

  constructor(private githubService: GithubService, private router: Router, private actRoute: ActivatedRoute) {
    this.userName = this.actRoute.snapshot.params.username;
  }

  ngOnInit() {
    this.loadUserDetails(this.userName);
  }

  loadUserDetails(username) {
    this.githubService.getUserDetailsByName(username).subscribe(
        userData => {
          this.userDetails = userData;
        }, err => {
        }, () => {
          this.getRepos(this.userDetails.repos_url);
        }
    );
  }

  getRepos(url) {
    this.githubService.getRepos(url).subscribe(
        repos => {
          this.reposList = repos;
        }
    );
  }

}
