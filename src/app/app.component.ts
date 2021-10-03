import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProjPopupBox02';

  cAtive: string = '';

  fnAbrir(){
    this.cAtive = 'toggle';
  }

  fnFechar(){
    this.cAtive = '';
  }
}
