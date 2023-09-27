import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'project';
  numeCopil: string = "Componenta Copil"

  constructor (public appService: AppService) {}
evenimentParinte(param: any)
{
console.log(param)

}
ngOnInit(): void {
  this.appService.getData().subscribe( (res:any) => console.log(res))
}
}
