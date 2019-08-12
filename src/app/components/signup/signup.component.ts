import { Component } from '@angular/core';
import { RestapiServices } from 'src/app/services/biz/restapi.services';
import { Router} from '@angular/router';

@Component({
    selector: 'app-root',
    template: ` 
    <div class='row'>
        <div class='col-md-3'></div> 
        <div class='col-md-6'>
        <div class="card" style="margin-top:10vh;">
        <article class="card-body">
            <a href="" style="height:40px;width:70px;font-size" class="float-right btn btn-outline-primary" routerLink="./../login">Log In</a>
            <h4 class="card-title mb-4 mt-1">Sign Up</h4>
            <form>
                <div class="form-group">
                    <label>Your name</label>
                    <input name="" [(ngModel)]="username" [ngModelOptions]="{standalone: true}" class="form-control" placeholder="Name" type="text" id="user-name">
                    <div class="error" id="name-error">Name Cannot be Null!</div>
                </div> 
    
                <div class="form-group">
                    <label>Birth Date</label>
                    <input name="" [(ngModel)]="dob" [ngModelOptions]="{standalone: true}" class="form-control" type="date" id="user-dob">
                    <div class="error" id="dob-error">DOB cannot be null!</div>
                </div> 
    
                <div class="form-group">
                    <label>Your email</label>
                    <input name="" [(ngModel)]="user_email" [ngModelOptions]="{standalone: true}" class="form-control" placeholder="Email" id="user-email" type="email">
                    <div class="error" id="email-error">Email cannot be null</div>
                </div> 
    
                <div class="form-group">
                    <label>Your password</label>
                    <input class="form-control" [(ngModel)]="user_password" [ngModelOptions]="{standalone: true}" placeholder="Password" type="password" id="user-password">
                    <div class="error" id="password-error">Password Cannot be Null!</div>
                </div> 
    
                <div class="form-group">
                    <label>Confrim password</label>
                    <input class="form-control" [(ngModel)]="user_cnf_password" [ngModelOptions]="{standalone: true}" placeholder="Confirm Password" type="password" id="cnf-password">
                    <div class="error" id="cnf-password-error">Password canno be null!</div>
                </div>
    
                <div class="form-group">
                    <button type="button" (click)="doSignup()" class="btn btn-primary" id="sign-up"> Sign Up </button>
                </div>
            </form>
        </article>
    </div>
        </div> 
        <div class='col-md-3'></div> 
    </div>

   `,
    styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
    username:string;
    user_password:string;
    dob:Date;
    user_email:string ;
    user_cnf_password:string;


    constructor(private rest: RestapiServices, private router: Router) {}

    doSignup(){
        
        if( this.username && this.dob && this.user_email && (this.user_password === this.user_cnf_password)){
            const body = {
                username: this.username,
                user_password: this.user_password,
                dob:this.dob,
                user_email: this.user_email
            };
            this.rest.signup(body).subscribe(
                data =>{
                    if(data.insertStatus == 1){
                        localStorage.setItem('user_id',data.user_id);
                        localStorage.setItem('user_email', data.user.user_email);
                        localStorage.setItem('user_password', data.user.user_password);
                        localStorage.setItem('user_name', data.user.username);
                        console.log('User Inserted Into Database');
                        this.router.navigate(['/home']);
                    }else{
                        console.log('User Already Exist');
                    }
                },
                err => console.log('Internal Server Error!')
            )
        }
        
    }

}
