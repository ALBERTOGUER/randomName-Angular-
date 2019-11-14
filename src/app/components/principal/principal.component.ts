import { Component, OnInit } from '@angular/core';
import { RandomServiceService } from '../../services/random-service.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  public newPerson: Array<any> = [];
  public valor: boolean = true;
  public parametro: string = 'random';

  constructor(private servicePerson: RandomServiceService) {


  }

  ngOnInit() {
  }

  public getiinfo(event) {

    console.log(event.code);

    if (event.code == 'Space') {

     
        this.servicePerson.Personas(this.parametro).subscribe((data: any) => {
          this.newPerson = data;

          console.log(this.newPerson);

          this.valor = false
          // console.log(this.parametro);


        })
      
    }
  }



}
