import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personne } from 'src/app/Model/Personne';

@Component({
  selector: 'app-item-cv',
  templateUrl: './item-cv.component.html',
  styleUrls: ['./item-cv.component.css']
})
export class ItemCVComponent implements OnInit {
  @Input () personne!: Personne;
  @Output () selectedPersonne = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  selectPersonne(){
    this.selectedPersonne.emit(this.personne);

  }

}
