import { Component, OnInit } from '@angular/core';
import { Personne } from 'src/app/Model/Personne';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  personnes: Personne [] =[];
  selectedPersonne : Personne | null=null;


  
  constructor() { }

  ngOnInit(): void {
    this.personnes =[
      new Personne ( 1, 'yassin', 'mekni','ingénieur','yassin.jpg', "azerty",25),
      new Personne ( 2, 'housem', 'mabrouk','student','rotating_card_profile2.png', "azerty",23),

    ]
    console.log(this.personnes);
  }
  selectPersonne(personne:any){
this.selectedPersonne= personne;

  }

}
