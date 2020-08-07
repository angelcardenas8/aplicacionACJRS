import { Component, OnInit } from '@angular/core';
import { HomePage } from '../home/home.page';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

 
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public nav: NavController, private router: Router) { 
    
  

  }


  aqui(){

  var container = document.querySelector(".container");
  container.classList.add("sign-up-mode");
    
}  

aqui2(){

  var container = document.querySelector(".container");
  container.classList.remove("sign-up-mode");
    
} 

home(){
  this.router.navigate(['/home']);
}
  
  

  ngOnInit() {
    
  }

}
