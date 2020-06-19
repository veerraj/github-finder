import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user=null;
  userName:string;
  error=null;


  constructor(private git:GithubService,private cdr:ChangeDetectorRef) { }

  ngOnInit() {
  }

  handleFind()
  {
    this.git.getUserDetails(this.userName).subscribe(
      (user)=>{
        this.user=user;
        this.error=null;
        this.cdr.detectChanges()
      },
      (error)=>{
        this.user=null;
        this.error="user not found";
        this.cdr.detectChanges()
      }
    )
  }

}
