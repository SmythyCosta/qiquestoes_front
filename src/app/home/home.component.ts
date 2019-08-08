import { Component } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '../_models';
import { UserService, AuthenticationService } from '../_services';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
    //users: User[] = [];
    user: any;

    constructor(private userService: UserService) { }

    ngOnInit() {
        this.userService.getAll()
            .pipe()
            .subscribe(data => {
                this.user = data;
        }, error =>{
            console.log('error');
        });
    }
}