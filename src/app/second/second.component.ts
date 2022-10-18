import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  title = 'Principales directives';
  pays = ["Tunisie", "Algérie", "Maroc"];
  personnes = [
    {
      id : 1,
      nom : "Tounsi",
      prenom : "Mohamed"
    },
    {id : 2, nom : "Ben Ammar", prenom : "Sana"},
    {id : 3, nom : "Landolsi", prenom : "Meriem"},
  ]
  show = true;

  constructor() { }

  ngOnInit(): void {
  }

  changeShow(){
    if(this.show)
      this.show = false;
    else
      this.show = true;
  }

}
