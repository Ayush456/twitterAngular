import { ToastrService } from 'ngx-toastr';
import { Component } from "@angular/core";
import { RestapiServices } from 'src/app/services/biz/restapi.services';
import { Router } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
    selector: 'app-root',
    templateUrl: './edit-profile.component.html',
    styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent {
    user_email_old:any;
    user_status_old: any;
    user_dob_old: any;
    user_email: string;
    user_status: string;
    user_dob: Date;
    user_id: string = localStorage.getItem('user_id');

    constructor(private rest: RestapiServices, private router: Router) {

    }

    doEditChanges(user_id) {
        
        console.log(user_id);

        let month = '' + (this.user_dob_old.getMonth() + 1),
        day = '' + this.user_dob_old.getDate(),
        year = this.user_dob_old.getFullYear();        
        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;
        this.user_dob_old = [year, month, day].join('-');

        let body = {
            userId: user_id,
            userStatus: this.user_status_old,
            userEmail: this.user_email_old,
            userDob: this.user_dob_old
        }

        if(this.user_dob && this.user_dob != this.user_dob_old) body.userDob = this.user_dob;
        if(this.user_status != this.user_status_old) body.userStatus = this.user_status;
        if(this.user_email != this.user_email_old) body.userEmail = this.user_email;

<<<<<<< HEAD
        this.rest.updateProfile(body).subscribe(
            data => {
                console.log(data);
                this.router.navigate(['/home']);
            },
            error => {
                console.log(error);
            }
        );
=======
        if (this.user_dob == null) {
            let new_formated_date = (this.temp_dob.getFullYear()) + "-" + (this.temp_dob.getMonth()+1 )+"-"+(this.temp_dob.getDate());
            console.log(new_formated_date);
            
            let body2 ={
                userId: user_id,
                user_status : this.user_status,
                user_dob : new_formated_date,
                user_email : this.user_email
            }
            this.rest.edit_p(body2).subscribe(
                data => {
                    localStorage.setItem('user_email', this.user_email);
                    console.log(data);
                    this.router.navigate(['/home']);
                },
                error => {
                    console.log(error);
                }
            );
        }
>>>>>>> b803cb265503a911f0eea33293e9f80bf0dfe578
    }

    ngOnInit(): void {

        this.rest.getInfo(this.user_id).subscribe(
            data => {
                console.log(data.dob);
                this.user_status_old = data.status;
                this.user_email_old = data.email;
                this.user_dob_old = new Date(data.dob);
                this.user_status = this.user_status_old;
                this.user_email = this.user_email_old;
            },
            err => {
                console.log(err);
            }
        );

    }

}