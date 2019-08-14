import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RestapiServices } from 'src/app/services/biz/restapi.services';
import { Router } from '@angular/router';

@Component({
    selector: 'tweet-roots',
    templateUrl: `./profile.component.html`,
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
    user: any;
    user_id = localStorage.getItem('user_id');
    user_tweets:Object;
    userProfile: any;
    default_img_url = 'https://www.primaryictsupport.co.uk/wp-content/uploads/2017/12/twitter.jpg';

    constructor(private rest: RestapiServices, private http: HttpClient, private router: Router) {

    }

    increaseLike(tweet_id){  //likes will be increased 
        console.log(tweet_id);
        this.rest.increaseLikeCount({tweetId:tweet_id,userId:this.user_id}).subscribe(
            data => console.log(data),
            err => {console.log(err)}
        );
       
    }

    increaseComment(tweet_id){
        console.log(tweet_id);
    }

    increaseShare(tweet_id){
        console.log(tweet_id);
    }

    editProfile(){
        this.router.navigate(['/edit']);
    }


    addFollowers(){
        this.router.navigate(['/home/follow']);
    }

    // changePP(files : FileList) {
    //     console.log(files);
    //     console.log("Hi");
    //     this.userProfile = files.item(0);
    //     console.log(this.userProfile);
    //     let formData = new FormData();
    //     formData.append('files',this.userProfile,this.userProfile.name);
    //     console.log(formData);
    //     this.rest.editPP(this.user_id,formData).subscribe (
    //         data => console.log(data),
    //         err => console.log(err)

    //     )

    //     // const editPP = document.getElementById('editPP');
    //     // const newProfile = (<HTMLInputElement>editPP).files[0]; 
    //     // console.log(newProfile);
    //     // this.rest.editPP(this.user_id,newProfile).subscribe (
    //     //     data => {
    //     //         console.log(data);
    //     //     },
    //     //     err => {
    //     //         console.log(err);
    //     //     }
    //     // )
    // }

    ngOnInit(): void {
        this.rest.getInfo(this.user_id).subscribe(  //getting the user personal details
            data => {
                this.user = data;
                console.log(data);
            },
            err => {
                console.log(err);
            }
        );
        
        this.rest.getUserTweetMsg(this.user_id).subscribe(
            data=>{console.log(data); this.user_tweets = data },
            err=>{ console.log(err)}
        );
    }

}