import { Component } from '@angular/core';
import { cardContent } from './card';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dynamic_cards';
  cardDetails:Array<cardContent>;
  checked:string='../assets/check-solid (1).svg'
  unchecked:string='../assets/xmark-solid.svg'
  pNormal:string="normal"
  pDisabled:string="disabled"
  constructor(){
    this.cardDetails=[
      {
        "price":0,
        'type':'FREE',
        "f1":{
          "iconSrc":this.checked,
          "content":"Single User",
          "class":this.pNormal
        },
        "f2":{
          "iconSrc":this.checked,
          "content":"5GB Storage",
          "class":this.pNormal
        },
        "f3":{
          "iconSrc":this.checked,
          "content":"Unlimited Public Projects",
          "class":this.pNormal
        },
        "f4":{
          "iconSrc":this.checked,
          "content":"Community Access",
          "class":this.pNormal
        },
        "f5":{
          "iconSrc":this.unchecked,
          "content":"Unlimited Private Projects",
          "class":this.pDisabled
        },
        "f6":{
          "iconSrc":this.unchecked,
          "content":"Dedicated Phone Support",
          "class":this.pDisabled
        },
        "f7":{
          "iconSrc":this.unchecked,
          "content":"",
          "class":this.pDisabled
        },
        "f8":{
          "iconSrc":this.unchecked,
          "content":"Monthly Status Reports",
          "class":this.pDisabled
        }
      },

      {
        "price":9,
        'type':'PLUS',
        "f1":{
          "iconSrc":this.checked,
          "content":"5 Users",
          "class":this.pNormal
        },
        "f2":{
          "iconSrc":this.checked,
          "content":"50GB Storage",
          "class":this.pNormal
        },
        "f3":{
          "iconSrc":this.checked,
          "content":"Unlimited Public Projects",
          "class":this.pNormal
        },
        "f4":{
          "iconSrc":this.checked,
          "content":"Community Access",
          "class":this.pNormal
        },
        "f5":{
          "iconSrc":this.checked,
          "content":"Unlimited Private Projects",
          "class":this.pNormal
        },
        "f6":{
          "iconSrc":this.checked,
          "content":"Dedicated Phone Support",
          "class":this.pNormal
        },
        "f7":{
          "iconSrc":this.checked,
          "content":"",
          "class":this.pNormal
        },
        "f8":{
          "iconSrc":this.unchecked,
          "content":"Monthly Status Reports",
          "class":this.pDisabled
        }
      },

      {
        "price":49,
        'type':'PRO',
        "f1":{
          "iconSrc":this.checked,
          "content":"Unlimited Users",
          "class":this.pNormal
        },
        "f2":{
          "iconSrc":this.checked,
          "content":"150GB Storage",
          "class":this.pNormal
        },
        "f3":{
          "iconSrc":this.checked,
          "content":"Unlimited Public Projects",
          "class":this.pNormal
        },
        "f4":{
          "iconSrc":this.checked,
          "content":"Community Access",
          "class":this.pNormal
        },
        "f5":{
          "iconSrc":this.checked,
          "content":"Unlimited Private Projects",
          "class":this.pNormal
        },
        "f6":{
          "iconSrc":this.checked,
          "content":"Dedicated Phone Support",
          "class":this.pNormal
        },
        "f7":{
          "iconSrc":this.checked,
          "content":"Unlimited ",
          "class":this.pNormal
        },
        "f8":{
          "iconSrc":this.checked,
          "content":"Monthly Status Reports",
          "class":this.pNormal
        }
      }


    ]
  }



}
