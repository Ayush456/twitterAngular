import { Component } from '@angular/core';
import { RestapiServices } from 'src/app/services/biz/restapi.services';
import { Router} from '@angular/router';

@Component({
    selector: 'app-root',
    template: `<div class="row">
    <div class="col-md-3">
        <div class="logo-pack">
            <img id="logo" src="https://img.icons8.com/color/48/000000/twitter.png">
        </div>
    </div>
    <div class="col-md-5" id="home" style="padding: 0; margin:0">
        <div class="card shadow">
            <div class="errors">Your username or password is invalid</div>
            <article class="card-body ">

                <button (click)="goToSignup()" style="float:right;width:70px;height:30px; background:none; border-color:#097FEC; color: #097FEC ;font-size:15px">Signup</button>
                <h4 class="card-title mb-4 mt-1">Sign in</h4>

                <div class="form-group">
                    <label>Your email</label>
                    <div>
                            <input name="email" [(ngModel)]="user_email" class="form-control" placeholder="Email" type="text" id="email"><i
                            class="glyphicon glyphicon-ok" style="display: none; float:right;" id="user_glyp"></i>
                    </div>
                    <p id="no-email" style="display:none">Your email is empty</p>
                </div> <!-- form-group// -->
                <div class="form-group">
                    <a class="float-right" href="#">Forgot?</a>
                    <label>Your password</label>
                    <input [(ngModel)]="user_password" class="form-control" placeholder="******" type="password" name="password" id="pass"><i
                        class="glyphicon glyphicon-remove" style="display: none;position:absolute;top:0"
                        id="pass_glyp"></i>
                    <p id="no-password" style="display:none ">your password is empty</p>
                </div> <!-- form-group// -->
                 
                <div class="form-group-check">
                    <div class="checkbox">
                        <label> <input type="checkbox">
                            <p id="checkbox-text">Save password</p>
                        </label>
                    </div> <!-- checkbox .// -->
                </div> <!-- form-group// -->
                <div class="form-group">
                    <button id="login-btn" (click)="getLogin()" type="submit" class="btn btn-primary btn-block"> Login </button>
                </div> <!-- form-group// -->
            </article>
        </div>
    </div>
    <div class="col-md-4">

    </div>
</div>`,
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    user_email: string;
    user_password: string;

    constructor(private rest: RestapiServices, private router: Router) {

    }

    goToSignup(){
        console.log('Sofhhah');
        this.router.navigate(['signup']);
    }

    getLogin() {

        const body = {
            user_email: this.user_email,
            user_password: this.user_password
        }

        this.rest.login(body).subscribe(
            data => {
                console.log(data);
                if ( data ) {
                    localStorage.setItem('user_id',data.user_id);
                    localStorage.setItem('user_email', data.user_email);
                    localStorage.setItem('user_password', data.user_password);
                    localStorage.setItem('user_name', data.user_name);
                    this.router.navigate(['/home']);
                }
            },
            err => { console.log(err) }
        );
    }

    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        if( localStorage.getItem('user_id') !== null && localStorage.getItem('user_email') !== null && localStorage.getItem('user_password') !== null ){
            this.router.navigate(['/home']);
        }
    }

}
