import { Component } from '@angular/core';
import { RestapiServices } from 'src/app/services/biz/restapi.services';
import { Router } from '@angular/router';
import $ from 'jquery';

@Component({
    selector: 'base-right',
    template: `
    <script
  src="https://code.jquery.com/jquery-3.4.1.min.js"
  integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
  crossorigin="anonymous"></script>
    <div class="nav-right">
    <div class="search-bar">
        <input type="text" [(ngModel)]="search_text" placeholder=" &nbsp; &nbsp;Search Twitter.." (keyup)="searchFunc()" >
        <div class="search_list" style="overflow:auto;z-index:1;position:absolute;top:10vh;">
           <ul style="list-style-type:none;width:100%">
            <li *ngFor="let s of search_result"> <button style="border:0;width:350px;" (click)="openProfile( s.user_id )" > {{s.user_name}} </button> </li>
           </ul> 
        </div>          
    </div>

    <div class="trendsforyou">
        <p class="trendstTitle">Trending</p>
        <div class="trendsHolder">
            <div class="trendsContainer" *ngFor = "let trend of trends">
                <ul style="list-style-type:none"><li><div class="trend"><div class="trendHashtag">#{{ trend?.hashtag }}</div><div class="trendCount">{{ trend?.count }}</div></div></li></ul>
                     
           </div>
        </div>
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
    search_text: string;
    search_result:any;
    trends: any;
    html: string = "";
    constructor(private rest: RestapiServices, private router: Router) {
    }

    openProfile(user_id){
        console.log(user_id);
        this.router.navigate(['/home/show/'+user_id]);
    }

    searchFunc() {

        let body = {
            key: this.search_text,
            offset: 0
        }

        if (this.search_text !== "") {
            this.rest.getAllUsers({ user_name: this.search_text }).subscribe(
              
                data => {
                    this.search_result = data;
                    console.log(data);
                },
                err => {
                    console.log(err);
                }
            );
        }

        if(this.search_text === ""){
            $('.search_list').html("");
        }
    }

    ngOnInit(): void {
        this.rest.getTrends(0).subscribe(
            data => this.trends = data,
            err => console.log(err)
        );
    }
}
