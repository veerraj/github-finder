import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private router:Router,private auth:AuthService) { }

  ngOnInit() {
  }

  onSubmit(f:NgForm)
  {
      // const {email,password} from f.forms.value;
      this.auth.signIn(f.value.email,f.value.password).then(
        (res)=>{
          this.router.navigateByUrl('/');
          alert("signin successfully")
        }
      )
      .catch((err)=>{
         console.log(err.message)
         alert("signin failed")
      })
  }
}
