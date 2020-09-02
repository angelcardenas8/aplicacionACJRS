import { Component, OnInit } from '@angular/core';
import { HomePage } from '../home/home.page';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

 
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
  this.nav.navigateRoot('/home');
}
  
  
  
  ngOnInit() {
    
  }

}
