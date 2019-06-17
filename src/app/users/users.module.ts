import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import {MatFormFieldModule, MatInputModule, MatListModule, MatSidenavModule, MatToolbarModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {GithubService} from '../services/github.service';
import {FormsModule} from '@angular/forms';
import { UserSearchPipe } from './pipe/user-search.pipe';

@NgModule({
  declarations: [UserListComponent, UserSearchPipe],
    imports: [
        CommonModule,
        FormsModule,
        UsersRoutingModule,
        MatToolbarModule,
        MatSidenavModule,
        MatListModule,
        HttpClientModule,
        MatFormFieldModule,
        MatInputModule
    ],
    providers: [GithubService]
})
export class UsersModule { }
