import { Component, OnInit, HostBinding } from '@angular/core';

import { GamesService } from '../../services/games.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  games:any = [];
  //cart:number;
  
  constructor(private gameService: GamesService, private cart:CartService) {    
  }

  ngOnInit() {

    this.getGames();

  }

  getGames(){
    this.gameService.getGames().subscribe(
      res => {
        this.games = res;
      },
      err => console.log(err)
    )
  }

  deleteGame(id:number) {
    this.gameService.deleteGame(id).subscribe(
      res => {
        console.log("Id juego eliminado: "+id);
        this.games = this.gameService.getGames().subscribe(
          res => {
            console.log("juegos obtenidos nuevamente");
            this.getGames();
          },
          err => console.error(err),
        )
      },
      err => console.error(err)
    );
  }  

  increaseAmount(amount:number, game:any){
    this.cart.amount += amount;
    this.cart.gamesList.push(game);
  }

}
