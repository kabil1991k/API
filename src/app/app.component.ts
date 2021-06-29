import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { RestService } from './rest.service';
import { Users } from './Users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Jason';
  constructor( private ps:RestService)
  {}
colums = ["User id","First name","Last name","Email","Mobile","Salary"];
index = ["id","firstname", "lastname","email","mobile","salary"];
users : Users[]=[];
ngOnInit():void
{
  this.ps.getusers().subscribe(
    (response)=>{
      this.users=response;
    },
    (error)=>{
      console.log("error occured:"+error);
    }
  )
}
  
}
