import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'quiz-app';

  icono1 = new icono("Instagram",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id suscipit ea ipsa molestias.",
    "instagram");
  
    icono2 = new icono("Twitter",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id suscipit ea ipsa molestias.",
    "twitter");

    icono3 = new icono("Facebook",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id suscipit ea ipsa molestias.",
    "facebook");

    icono4 = new icono("Pinterest",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id suscipit ea ipsa molestias.",
    "pinterest");

    icono5 = new icono("Google",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id suscipit ea ipsa molestias.",
    "googleplus");

    icono6 = new icono("Github",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id suscipit ea ipsa molestias.",
    "github");
  
    private iconos:icono[] = [this.icono1,this.icono2,this.icono3,this.icono4,this.icono5,this.icono6];

  constructor(){
    
  }
}

export class icono{
  titulo:string;
  desc:string;
  icono:string;
  constructor(public pTitulo:string,public pDesc:string, public pIcono:string){
                  this.titulo= pTitulo;
                  this.desc = pDesc;
                  this.icono = pIcono;
              }
}