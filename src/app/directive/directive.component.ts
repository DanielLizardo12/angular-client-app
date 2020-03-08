import { Component } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html'
})
export class DirectiveComponent {

  languagesList : string[] = ['TypeScript', 'JavaScrip', 'Java SE', 'C#', 'PHP'];
  enableList: boolean = true;

  constructor() { }

  setEnableList(): void{
    this.enableList = !this.enableList;
  }

}
