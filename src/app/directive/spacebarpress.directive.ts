import { Directive, ElementRef, HostListener } from '@angular/core';
import { RandomServiceService } from '../services/random-service.service';



@Directive({
  selector: '[appSpacebarpress]'
})
export class SpacebarpressDirective {


  public newPerson: Array<any> = [];


  constructor(private el: ElementRef, private RandomService: RandomServiceService) {

    console.log(el.nativeElement);

    let button = this.el.nativeElement;


    console.log(button);

    button.addEventListener('keypress', this.Spacebarpress);


  }

  public Spacebarpress(event){

  console.log(event);

  // if(event.code=='Space'){
  //   console.log('mela pelan');

  //   let random = this.RandomService.Personas();

  //    this.RandomService.Personas().subscribe((data:any)=>{ 
  //      this.newPerson= data;

  //      console.log(this.newPerson);
      
  //    })
    
  // }
  
  
  }






}
