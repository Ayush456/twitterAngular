import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient,HttpParams } from '@angular/common/http';
import { ClassGetter } from '@angular/compiler/src/output/output_ast';
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
        return this.http.post('http://localhost:5000/search',search_text);
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

    getFeeds(user_id,offset):Observable<any>{
        let data:Object = {userId:user_id};
        console.log('http://localhost:5000/data/feeds/'+user_id+"/"+offset+"/"+offset);
        return this.http.get('http://localhost:5000/data/feeds/'+user_id+"/"+offset+"/"+offset, data );
    }

    getTrends(offset):Observable<any> {
        return this.http.get('http://localhost:5000/data/trends/'+offset);
    }

    updateProfile(user_data):Observable<any>{

        return this.http.post('http://localhost:5000/user/edit_profile', user_data);

    }

    edit_p(user):Observable<any>{
        return this.http.post('http://localhost:5000/user/edit_p',user);
    }

    getAllUsers(user_name):Observable<any>{
        return this.http.post('http://localhost:5000/search/users',user_name);
    }

    followSomeOne(user):Observable<any>{
        console.log(user);
        return this.http.post('http://localhost:5000/user/follow',user);
    }

    checkIsFollowed(user):Observable<any>{
        return this.http.get(`http://localhost:5000/data/isfollowing/${user.userOne}/${user.userIdTwo}`);
    }

}