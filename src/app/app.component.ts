import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Component-basic';
  heros:string[] = ['Tarique Akhter Ansari','Sharukh khan','Ranveer kapoor','Saumya','Afsha'];
}
