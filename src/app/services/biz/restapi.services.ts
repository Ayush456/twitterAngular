import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient,HttpParams } from '@angular/common/http';
@Injectable({
    providedIn : 'root',
})
export class RestapiServices{

    constructor(private http : HttpClient){

    }

    sayHello():string{
        return 'Hello From Service';
    }

    login(user:any):Observable<any>{
        return this.http.post('http://localhost:5000/login',user);
    }

    signup(user:any):Observable<any>{
        return this.http.post('http://localhost:5000/signup',user);
    }

    saveTweet(tweetObj):Observable<any>{
        return this.http.post('http://localhost:5000/tweet',tweetObj);
    }

    getInfo(user_id):Observable<any>{
        return this.http.get('http://localhost:5000/data/profile/'+user_id);
    }

    searchTwitter(search_text):Observable<any>{
        return this.http.get('http://localhost:5000/search',search_text);
    }

    getUserTweetMsg(user_id):Observable<any>{
        return this.http.get('http://localhost:5000/data/tweets/'+user_id);
    }

    getFeedsMsg(data):Observable<any>{
        return this.http.get('http://localhost:5000/data/feeds/'+data.user_id+'/'+data.offset);
    }

    increaseLikeCount(data):Observable<any>{
        return this.http.post('http://localhost:5000/tweet/like',data);
    }

}