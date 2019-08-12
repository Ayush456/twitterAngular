import { ToastrService } from 'ngx-toastr';
import { Component } from "@angular/core";
import { RestapiServices } from 'src/app/services/biz/restapi.services';
import { Router} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
    selector : 'app-root',
    templateUrl: './edit-profile.component.html',
    styleUrls : ['./edit-profile.component.css']
})
export class EditProfileComponent{
    user_email:string;
    user_status:string;
    user_dob:Date;
    user_id:string = localStorage.getItem('user_id');


    constructor(private rest: RestapiServices,private router: Router){

    }

    doEditChanges(user_id){
        console.log(user_id);

        const body = {
            userId : user_id,
            userStatus : this.user_status,
            userEmail  :this.user_email,
            userDob : this.user_dob
        }

        if(this.user_dob){
            this.rest.updateProfile(body).subscribe(
                data => {   
                    console.log(data);
                    this.router.navigate(['/home']);
                }
            );
        }

    }

    ngOnInit(): void {
        
        this.rest.getInfo(this.user_id).subscribe(
            data =>{
                console.log(data);
                this.user_status = data.status;
                this.user_email = data.email;                
            },
            err =>{
                console.log(err);
            }
        );
        
    }

}