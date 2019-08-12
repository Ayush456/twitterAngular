import { Component } from '@angular/core';
import { RestapiServices } from 'src/app/services/biz/restapi.services';
import { Router} from '@angular/router';

@Component({
    selector : 'tweet-root',
    templateUrl: './follow.component.html',
    styleUrls : ['./follow.component.css']
})
export class FollowComponent{
    follow_name:string;
    follow_list_result:Object[];
    my_id = localStorage.getItem('user_id');
    constructor(private rest:RestapiServices,private router:Router){

    }

    addToFollow(user_follow_id){
        this.rest.followSomeOne({userOne:this.my_id,userTwo:user_follow_id}).subscribe(
            data=>{
                console.log(data);
            },
            err=>{
                console.log(err);
            }
        );
    }

    findFollow(){
        this.rest.getAllUsers({user_name: this.follow_name}).subscribe(
            data=>{
                console.log(data);
                this.follow_list_result = data;
            },
            err =>{
                console.log(err);
            }
        );
    }

}