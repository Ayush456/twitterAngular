import { Component } from '@angular/core';
import { RestapiServices } from 'src/app/services/biz/restapi.services';
import { Router } from '@angular/router';

@Component({
    selector: 'base-right',
    template: `
    <div class="nav-right">
    <div class="search-bar">
        <input type="text" [(ngModel)]="search_text" placeholder=" &nbsp; &nbsp;Search Twitter.." (keydown)="searchFunc()" >
    </div>

    <div class="trendsforyou">
        <p class="trendstTitle">Trends for you</p>
    </div>
    <div class="whotofollow">
        <p class="whoTitle">Who to follow</p>
    </div>
    <div class="base-right-bottom-text">
        <p>Terms &nbsp; Privacy Policy &nbsp; Cookies </p>
        <p>more &nbsp; &copy; 2019 Twitter</p>
    </div>
</div>
`,
    styleUrls: ['./base-right.component.css']
})
export class BaseRightComponent {
    search_text:string;
    constructor(private rest: RestapiServices, private router: Router) {

    }
    searchFunc(){
        console.log({key:this.search_text,offset:0});
        this.rest.searchTwitter({key:this.search_text,offset:0}).subscribe(
            data=>{
                console.log(data);
            },
            err=>{
                console.log(err);
            } 
        );
    }

}
