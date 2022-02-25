import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personne } from 'src/app/Model/Personne';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input () personnes: Personne[]=[];
  @Output () selectedPersonne = new EventEmitter<Personne>();

  constructor() { }
  

  ngOnInit(): void {
  }
  selectPersonne( selectedPersonne:any){
    this.selectedPersonne.emit(
      selectedPersonne
    );
  }

}
 