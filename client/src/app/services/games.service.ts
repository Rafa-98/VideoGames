import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Game } from '../models/Game';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  api_url = 'http://localhost:3000/api'

  constructor(private http: HttpClient) { }

  getGames(){
    return this.http.get(this.api_url+'/games');
  }

  getGame(id: number){
    return this.http.get(this.api_url+'/games/'+id);
  }

  saveGame(game: Game){
    return this.http.post(this.api_url+'/games', game);
  }

  deleteGame(id:number) {
    return this.http.delete(this.api_url+'/games/'+id);
  }

  updateGame(id:number, updatedGame: Game) {
    return this.http.put(this.api_url+'/games/'+id, updatedGame);
  }

}
