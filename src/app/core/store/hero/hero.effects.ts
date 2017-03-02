import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/toArray';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/operator/startWith';

import { Hero } from './hero.model';
import { DataService } from '../../services/data.service';
import * as actions from './hero.actions';
import { EntityEffects } from '../entity/entity.effects';

@Injectable()
export class HeroEffects extends EntityEffects<Hero> {

  constructor(store: Store<Hero>,
    private dataService: DataService,
    action$: Actions) {
    super(store, action$, actions, 'hero');
    this.getEntities = this.dataService.getHeroes;
    this.addUpdateEntity = this.dataService.addOrUpdateHero;
  }

  // @Effect()
  // load$ = this.action$
  //   .ofType(hero.ActionTypes.LOAD)
  //   .startWith(new hero.Load())
  //   .switchMap(() =>
  //     this.dataService.getHeroes()
  //       .mergeMap(fetchedHeroes => Observable.from(fetchedHeroes))
  //       .map((fetchedHero: Hero) => new hero.LoadSuccess(fetchedHero))  // one action per hero
  //       .catch(() => Observable.of(new hero.UpdateFail()))
  //   );

  // @Effect()
  // update$ = this.action$
  //   .ofType(hero.ActionTypes.UPDATE,
  //   hero.ActionTypes.ADD)
  //   .withLatestFrom(this.store.select('heroes'))
  //   .switchMap(([{}, heroes]) =>
  //     Observable   // first element is action, but it isn't used
  //       .from((<any>heroes).ids)
  //       .filter((id: string) => (<any>heroes).entities[id].dirty)
  //       .switchMap((id: string) => this.dataService.addOrUpdateHero((<any>heroes).entities[id]))
  //       .map((responseHero: Hero) => new hero.UpdateSuccess(responseHero))
  //   );

}
