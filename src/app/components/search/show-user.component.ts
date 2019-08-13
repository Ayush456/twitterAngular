import { Component } from '@angular/core';
import { RestapiServices } from 'src/app/services/biz/restapi.services';
import { Router, ActivatedRoute} from '@angular/router';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
    selector : 'tweet-root',
    templateUrl: './show-user.component.html',
    styleUrls : ['./show-user.component.css']
})
export class ShowUserComponent{
     my_id = localStorage.getItem('user_id');
     sp_id:string;
     isFollowed:Boolean;
     other_user:any;
    constructor(private route: ActivatedRoute, private rest: RestapiServices){   
    }

    ngOnInit(): void {
        const id = this.route.snapshot.paramMap.get('id');
        this.sp_id = id;

        this.rest.getInfo(this.sp_id).subscribe(
            data =>{
                console.log(data);
                this.other_user = data;
            },
            err => { 
                console.log(err);
            }
        );

        this.rest.checkIsFollowed({userOne: this.my_id , userIdTwo: this.sp_id}).subscribe(
            data =>{
                
                this.isFollowed = data;
                console.log(this.isFollowed);
            },
            err =>{
                console.log(err);
            }
        );
    }
}