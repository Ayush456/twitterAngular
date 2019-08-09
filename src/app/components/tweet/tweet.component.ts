import { ToastrService } from 'ngx-toastr';
import { Component } from "@angular/core";
import { RestapiServices } from 'src/app/services/biz/restapi.services';
import { Router} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
    selector: 'tweet-root',
    templateUrl: './tweet.component.html',
    styleUrls: ['./tweet.component.css'],
})
export class TweetComponent {
    user_id:string = localStorage.getItem('user_id');
    follower_tweets:any;
    tweet_msg:string;
    constructor(private toastr: ToastrService, private rest: RestapiServices){

    }

    submitTweet(){
       this.toastr.success(this.tweet_msg, '');
       let tweetObj = {
        userId : localStorage.getItem('user_id'),
        textMsg: this.tweet_msg
        };

       this.rest.saveTweet( tweetObj ).subscribe(
        data => { console.log("Your Tweet Msg Inserted!")},
        err=>{console.log(err)}
       );
    }

    ngOnInit(): void {
        this.rest.getFeeds(this.user_id,0).subscribe(
            data => {
                this.follower_tweets = data.tweets;
                console.log(data.tweets);
            },
            err =>{ console.log(err); }
        );
    }

}