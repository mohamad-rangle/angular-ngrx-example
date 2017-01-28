import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {IVideoGame} from '../../interfaces/videoGame/videoGame.interface';
import {videoGames} from './videoGamesResult';

@Injectable()
export class VideoGamesService {

  getAll(): Observable<Array<IVideoGame>> {
    return Observable.create(observer => {
      observer.next(videoGames);
      observer.complete();

      return () => {

      };
    });
  }

}