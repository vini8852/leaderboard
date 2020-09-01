import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  itemList = [
    {id:1,name:"Leader 1",points:51},
    {id:3,name:"Leader 3",points:50},
    {id:2,name:"Leader 2",points:49},
    {id:4,name:"Leader 4",points:18},
    {id:5,name:"Leader 5",points:10}
  ];

  public increamentPoints(event,itemId){
    let itemIndex = this.findIndexById(itemId);
    if(itemIndex>=0){
      this.itemList[itemIndex].points++;
    }
    let currentItmeIndex = itemIndex;
    while(true){
      if(currentItmeIndex==0){
        break;
      }
      if(this.itemList[currentItmeIndex].points>this.itemList[currentItmeIndex-1].points){
        let temp = this.itemList[currentItmeIndex];
        this.itemList[currentItmeIndex] = this.itemList[currentItmeIndex-1];
        this.itemList[currentItmeIndex - 1] = temp;
      }
      currentItmeIndex--;
    }
  }

  public decreamentPoints(itemId){
    let itemIndex = this.findIndexById(itemId);
    if(itemIndex>=0){
      this.itemList[itemIndex].points--;
    }
    let currentItmeIndex = itemIndex;
    while(true){
      if(currentItmeIndex>=this.itemList.length-1){
        break;
      }
      if(this.itemList[currentItmeIndex].points<this.itemList[currentItmeIndex+1].points){
        let temp = this.itemList[currentItmeIndex];
        this.itemList[currentItmeIndex] = this.itemList[currentItmeIndex+1];
        this.itemList[currentItmeIndex + 1] = temp;
      }
      currentItmeIndex++;
    }
  }

  private findIndexById(itemId){
    for(let i=0;i<this.itemList.length;i++){
      if(this.itemList[i].id == itemId){
        return i;
      }
    }
    return -1;
  }

}
