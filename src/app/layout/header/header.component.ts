import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
// import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  email=null
  constructor(private authservice:AuthService,private router:Router) { 
      authservice.getUser().subscribe(
        (user)=>{
          if(user){
            this.email=user.email;
          }
          
        }
      )
  }

  ngOnInit() {
  }

  async handleSignOut()
  {
     try{
        const res = await this.authservice.signOut();
        this.router.navigateByUrl('/signin');
        console.log("login again to continue")
        this.email=null;
     }
     catch(err)
     {
       console.log("something went wrong")
     }
  }

}
