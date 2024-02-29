import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {



uname:any;
pass:any;
 constructor(private route:Router){}

 ngOnInit(): void {

 }
 onlogin(item:any){
 
  this.route.navigate(['employee-sheet'])
  console.warn(item.value)

    }
  }


