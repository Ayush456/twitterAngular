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
     default_img_url = 'https://www.primaryictsupport.co.uk/wp-content/uploads/2017/12/twitter.jpg';
    constructor(private route: ActivatedRoute, private rest: RestapiServices){   
    }

    addToFollow(user_follow_id){
        console.log(this.my_id+"  "+user_follow_id);
        let body ={
            userOne: this.my_id,
            userTwo: user_follow_id,
        }
    
        this.rest.followSomeOne(body).subscribe(
            data =>{console.log(data);},
            err =>{ console.log(err);}
        );
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
                if(data == false || data === "" || !data){
                    this.isFollowed = false;
                }else{
                    this.isFollowed = true;
                }
                console.log(this.isFollowed);
            },
            err =>{
                console.log(err);
            }
        );
    }
}