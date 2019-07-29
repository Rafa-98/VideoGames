import { Component, OnInit, HostBinding } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { Game } from '../../models/Game';

import { GamesService } from '../../services/games.service';

@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.css']
})
export class GameFormComponent implements OnInit {

  @HostBinding('class') classes = 'row'

  game: any = [{        
    title: '',
    description: '',
    image: '',
    price: ''
  }];

  edit:boolean = false;

  constructor(private gameService:GamesService, private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if (params.id){
      console.log("parametro es: "+params.id);
      this.gameService.getGame(params.id).subscribe(
        res => {
          this.game = res;
          this.edit = true;
        },
        err => console.log("entro por el error")
      )
    }
  }

  saveNewGame(){
    this.gameService.saveGame(this.game[0]).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/games']);
      },
      err => console.error(err)
    );
  }

  updateGame(){
    this.gameService.updateGame(this.game[0].id, this.game[0]).subscribe(
      res => {
        console.log("Updated Game");
        this.router.navigate(['/games']);
      },
      err => console.error(err)
    );
  }

}
