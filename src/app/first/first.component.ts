import { Component } from "@angular/core";

@Component({
  selector : 'app-first',
  templateUrl : './first.component.html'
})
export class FirstComponent{
  title = 'Les types de binding';
  url2 = 'https://www.svgrepo.com/show/327335/logo-angular.svg';
  url1 = 'https://angular.io/assets/images/logos/angularjs/AngularJS-Shield.svg'
  url = this.url1;


  sayHello = (val : number)=>{
    return 'Hello from function ' + val;
  }

  changeLogo = ()=>{
    if(this.url === this.url1)
      this.url = this.url2;
    else
      this.url = this.url1;
  }

}
