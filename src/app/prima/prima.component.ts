import { Component } from '@angular/core';

@Component({
  selector: 'app-prima',
  templateUrl: './prima.component.html',
  styleUrls: ['./prima.component.css']
})
export class PrimaComponent {

  nume: string = "Dorin";
  culoare: string = "";
  alternativa: string = "imaginea nu a fost gasita";

  onClick() {
alert("Am fost apaasaaaaat!")

  }
}
