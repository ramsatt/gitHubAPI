import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsRoutingModule } from './details-routing.module';
import { DetailsComponent } from './details/details.component';
import {HttpClientModule} from '@angular/common/http';
import {GithubService} from '../services/github.service';
import {
    MatCardModule,
    MatGridListModule, MatIconModule,
    MatLineModule,
    MatListModule,
    MatSidenavModule,
    MatTableModule,
    MatToolbarModule
} from '@angular/material';

@NgModule({
  declarations: [DetailsComponent],
    imports: [
        CommonModule,
        DetailsRoutingModule,
        HttpClientModule,
        MatToolbarModule,
        MatSidenavModule,
        MatTableModule,
        MatCardModule,
        MatLineModule,
        MatListModule,
        MatGridListModule,
        MatIconModule
    ],
  providers: [GithubService]
})
export class DetailsModule { }
