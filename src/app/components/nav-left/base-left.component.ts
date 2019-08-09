import { Component } from '@angular/core';

@Component({
    selector : 'base-left',
    template: `<div class="logo-pack">
    <img id="logo" src="https://img.icons8.com/color/48/000000/twitter.png"> 
    
</div>
<div class="vertical-nav-left">
<ul>
   <li><button class="active" routerLink="./../home"> <i class="glyphicon glyphicon-home"></i> Home</button> </li>
   <li><button> <i class="glyphicon glyphicon-road"></i> Explore</button></li>
   <li><button><i class="glyphicon glyphicon-bell"></i>Notification</button></li>
   <li><button> <i class="glyphicon glyphicon-envelope"></i> Message</button></li>
   <li><button> <i class="glyphicon glyphicon-bookmark"></i> Bookmark</button></li>
   <li><button> <i class="glyphicon glyphicon-list-alt"></i> Your Tweets </button></li>
   <li><button routerLink="./../home/profile"> <i class="glyphicon glyphicon-user"></i> Profile</button></li>
   <li><button> <i class="glyphicon glyphicon-th-large"></i>More</button></li>
   <button class="btn-tweet" routerLink="./../home">Tweet</button>
</ul> 
</div>`,
styleUrls : ['./base-left.component.css']
})
export class BaseLeftComponent{
    
}
