import { Component, OnInit, Input,OnChanges,ChangeDetectorRef } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit,OnChanges {

  @Input() repoUrl:string;
  repos= [];
  constructor(private git:GithubService,private cdr:ChangeDetectorRef) { }

  ngOnInit() {
  }
  ngOnChanges(){

    if(this.repoUrl)
    {
      this.git.getRepos(this.repoUrl).subscribe(
        (repos:[])=>{
            this.repos=repos;

            this.cdr.detectChanges();
        },
        (err)=>{
          console.log(err)
        }
      )
    }
  }

}
