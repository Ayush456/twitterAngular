import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector : 'base-left',
    template: `<div class="logo-pack">
    <ul>
        <li><img id="logo" src="https://img.icons8.com/color/48/000000/twitter.png"> </li>
        <li>Hello <span style="color:#EC7063 "> &nbsp; {{userName}} !</span> </li>
    </ul>

    
</div>
<div class="vertical-nav-left"  id='navi-bar'>
<ul>
   <li><button class="active" routerLink="./../home"> <i class="glyphicon glyphicon-home"></i> Home</button> </li>
   <li><button> <i class="glyphicon glyphicon-road"></i> Explore</button></li>
   <li><button><i class="glyphicon glyphicon-bell"></i>Notification</button></li>
   <li><button> <i class="glyphicon glyphicon-envelope"></i> Message</button></li>
   <li><button> <i class="glyphicon glyphicon-bookmark"></i> Bookmark</button></li>
   <li><button> <i class="glyphicon glyphicon-list-alt"></i> Your Tweets </button></li>
   <li><button routerLink="./../home/profile"> <i class="glyphicon glyphicon-user"></i> Profile</button></li>
   <li><button> <i class="glyphicon glyphicon-th-large"></i>More</button></li>
   <button class="btn-tweet" routerLink="./../home">Tweet</button> <br><br>
   <button class="btn-tweet" (click)="doLogout()">logout</button>
</ul> 
</div>`,
styleUrls : ['./base-left.component.css']
})
export class BaseLeftComponent{
    userName:string;
    constructor(private router: Router){
        
    }

    // changeActive(event){
    //     let uls_par = document.getElementById('navi-bar');
    //     let uls = uls_par.getElementsByTagName('ul');
    //     console.log(event.target);
    // }
    
    doLogout(){
        localStorage.clear();
        this.router.navigate(['/login']);
    }

    ngOnInit(): void {
        this.userName = localStorage.getItem('user_name');
    }

}
