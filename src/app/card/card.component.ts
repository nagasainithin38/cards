import { Component, Input } from '@angular/core';
import {cardContent} from '../card'
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input()
  cardDetails: cardContent;
constructor(){
  this.cardDetails={
    price:0,
    type:'',
    f1:{
      iconSrc:"",
      content:"",
      class:""
  },
    f2:{
      iconSrc:"",
      content:"",
      class:""
  },
    f3:{
      iconSrc:"",
      content:"",
      class:""
  },
    f4:{
      iconSrc:"",
      content:"",
      class:""
  },
    f5:{
      iconSrc:"",
      content:"",
      class:""
  },
    f6:{
      iconSrc:"",
      content:"",
      class:""
  },
    f7:{
      iconSrc:"",
      content:"",
      class:""
  },
    f8:{
      iconSrc:"",
      content:"",
      class:""
  },
  }
}
}
