import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private router:Router,private auth:AuthService) { }

  ngOnInit() {
  }

  onSubmit(f:NgForm)
  {
      // const {email,password} from f.forms.value;
      this.auth.signUp(f.value.email,f.value.password).then(
        (res)=>{
          this.router.navigateByUrl('/');
          alert("signup successfully")
        }
      )
      .catch((err)=>{
         console.log(err.message)
         alert("signup failed")
      })
  }

}
