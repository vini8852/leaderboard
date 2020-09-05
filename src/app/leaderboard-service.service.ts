import { Injectable, EventEmitter } from '@angular/core';
import { Leader } from './leaderboard.interface'
@Injectable({
  providedIn: 'root'
})
export class LeaderboardServiceService {
  private list:Array<Leader> = [];
  listUpdatedEvent: EventEmitter<Leader[]> = new EventEmitter();
  
  constructor() { }


  public insert(name:string){
    let newLeader = {
      id:String(this.list.length),
      name:name,
      points:0
    };
    this.list.push(newLeader);
    let currentItmeIndex = this.list.length-1;
    while(true){
      if(currentItmeIndex==0){
        break;
      }
      if(this.list[currentItmeIndex].points>this.list[currentItmeIndex-1].points){
        let temp = this.list[currentItmeIndex];
        this.list[currentItmeIndex] = this.list[currentItmeIndex-1];
        this.list[currentItmeIndex - 1] = temp;
      }
      currentItmeIndex--;
    }
    this.listUpdatedEvent.emit(this.list);
  }

  public increament(id:string){
    let itemIndex = this.findIndexById(id);
    if(itemIndex>=0){
      this.list[itemIndex].points++;
    }
    let currentItmeIndex = itemIndex;
    while(true){
      if(currentItmeIndex==0){
        break;
      }
      if(this.list[currentItmeIndex].points>this.list[currentItmeIndex-1].points){
        let temp = this.list[currentItmeIndex];
        this.list[currentItmeIndex] = this.list[currentItmeIndex-1];
        this.list[currentItmeIndex - 1] = temp;
      }
      currentItmeIndex--;
    }
    this.listUpdatedEvent.emit(this.list);
  }

  public decreament(id:string){
    let itemIndex = this.findIndexById(id);
    if(itemIndex>=0){
      this.list[itemIndex].points--;
    }
    let currentItmeIndex = itemIndex;
    while(true){
      if(currentItmeIndex>=this.list.length-1){
        break;
      }
      if(this.list[currentItmeIndex].points<this.list[currentItmeIndex+1].points){
        let temp = this.list[currentItmeIndex];
        this.list[currentItmeIndex] = this.list[currentItmeIndex+1];
        this.list[currentItmeIndex + 1] = temp;
      }
      currentItmeIndex++;
    }
    this.listUpdatedEvent.emit(this.list);
  }

  private findIndexById(itemId){
    for(let i=0;i<this.list.length;i++){
      if(this.list[i].id == itemId){
        return i;
      }
    }
    return -1;
  }
}
