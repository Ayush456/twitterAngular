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
    user_email: string;
    user_status: string;
    user_dob: Date;
    user_id: string = localStorage.getItem('user_id');
    temp_dob: Date;

    constructor(private rest: RestapiServices, private router: Router) {

    }

    doEditChanges(user_id) {
        console.log(user_id);
        
        var body = {
            userId: user_id,
            userStatus: this.user_status,
            userEmail: this.user_email,
            userDob: this.user_dob
        }

        if(this.user_dob){
            console.log(this.user_dob);
            this.rest.updateProfile(body).subscribe(
                data => {
                    console.log(data);
                    this.router.navigate(['/home']);
                },
                error => {
                    console.log(error);
                }
            );
        }

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
    }

    ngOnInit(): void {

        this.rest.getInfo(this.user_id).subscribe(
            data => {
                console.log(data);
                this.user_status = data.status;
                this.user_email = data.email;
                this.temp_dob = new Date(data.dob);
            },
            err => {
                console.log(err);
            }
        );

    }

}