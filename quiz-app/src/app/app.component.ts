import { Component } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { bounce } from 'ng-animate';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('bounce', [transition('* => *', useAnimation(bounce))])
  ],
})
export class AppComponent {
  title = 'quiz-app';
  bounce: any;

  icono1 = new icono("Instagram",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id suscipit ea ipsa molestias.",
    "instagram", true);
  
    icono2 = new icono("Twitter",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id suscipit ea ipsa molestias.",
    "twitter", true);

    icono3 = new icono("Facebook",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id suscipit ea ipsa molestias.",
    "facebook", true);

    icono4 = new icono("Pinterest",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id suscipit ea ipsa molestias.",
    "pinterest", true);

    icono5 = new icono("Google",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id suscipit ea ipsa molestias.",
    "google-plus", true);

    icono6 = new icono("Github",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id suscipit ea ipsa molestias.",
    "github", true);
  
    private iconos:icono[] = [this.icono1,this.icono2,this.icono3,this.icono4,this.icono5,this.icono6];

  constructor(){
    
  }

  mostrar(ico:icono){
    if(ico.ver==false)
    {
      ico.ver = true;
    }
    else{
      ico.ver = false;
    }
  }
}

export class icono{
  titulo:string;
  desc:string;
  icono:string;
  ver:boolean;
  constructor(public pTitulo:string,public pDesc:string, public pIcono:string, public pVer:boolean){
                  this.titulo= pTitulo;
                  this.desc = pDesc;
                  this.icono = pIcono;
                  this.ver = pVer;
              }
}