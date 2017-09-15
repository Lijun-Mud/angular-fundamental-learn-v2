import { Component,OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import {Router} from "@angular/router";

import {AuthService} from "./auth.service";

@Component({
    templateUrl: "./profile.component.html",
    styles: [`
    em {float:right; color:#E05C65; padding-left: 10px;}
    .error input {background-color:#E3C3C5;}
    .error ::-webkit-input-placeholder { color: #999; }
    .error ::-moz-placeholder { color: #999; }
    .error :-moz-placeholder { color:#999; }
    .error :ms-input-placeholder { color: #999; }
    `]
})
export class ProfileComponent implements  OnInit {
    profileForm:FormGroup;
    private firstName: FormControl;
    private lastName: FormControl;

    constructor(private auth: AuthService, private router: Router) {
        
    }

    ngOnInit(): void {
        this.auth.loginUser("", "");//06-collecting-data-with-angular-forms-and-validation

        this.firstName = new FormControl(this.auth.currentUser.firstName, [Validators.required, Validators.pattern("[a-zA-Z].*")]);
        this.lastName = new FormControl(this.auth.currentUser.lastName, Validators.required);

        this.profileForm = new FormGroup({
            lastName: this.lastName,
            firstName:this.firstName
        });
    }

    validateFirstName() {
        return this.firstName.valid || this.firstName.untouched;
    }

    validateLastName() {
        return this.lastName.valid || this.lastName.untouched;
    }

    saveProfile(formValues:any) {
        this.auth.updateCurrentUser(formValues.firstName, formValues.lastName);
        this.router.navigate(["events"]);
    }

    cancel() {
        this.router.navigate(["events"]);
    }
}