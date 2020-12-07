import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private linkTheme = document.querySelector('#theme');

  constructor() { 
    const url = localStorage.getItem('theme');
    if(url){
      this.linkTheme.setAttribute('href', url);
    } else{
      this.linkTheme.setAttribute('href', './assets/css/colors/purple-dark.css');
    }
  }

  changeTheme(theme: string){
    const url = `./assets/css/colors/${theme}.css`;
    this.linkTheme.setAttribute('href', url);
    localStorage.setItem('theme', url);
    this.checkCurrentTheme();
  }

  checkCurrentTheme(){
    const links= document.querySelectorAll('.selector');
    links.forEach(element => {
      element.classList.remove('working');
      const btnTheme = element.getAttribute('data-theme');
      const btnThemeUrl = `./assets/css/colors/${btnTheme}.css`;
      const curretTheme = this.linkTheme.getAttribute('href');
      if(btnThemeUrl === curretTheme){
        element.classList.add('working');
      }
    });
  }

}
