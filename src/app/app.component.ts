import { Component } from '@angular/core';
import {LeaderboardServiceService} from './leaderboard-service.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showAddLeaderView = false;
  leaderName = "";
  itemList = [];

  constructor(private leaderBoardService:LeaderboardServiceService){}

  ngOnInit(){
    this.leaderBoardService.listUpdatedEvent.subscribe((list)=>{
      this.itemList = list;
    })
  }

  public increamentPoints(itemId:string){
    this.leaderBoardService.increament(itemId)
  }

  public decreamentPoints(itemId){
    this.leaderBoardService.decreament(itemId);
  }

  public showAddLederForm(){
    this.showAddLeaderView = true;
    this.leaderName = "";
  }

  public addLeader(){
    if(!this.leaderName){
      alert("Enter a leader name");
      return;
    }
    this.leaderBoardService.insert(this.leaderName);
    this.showAddLeaderView = false;
  }

  

}
