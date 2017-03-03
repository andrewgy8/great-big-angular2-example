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
import { EntityEffects } from '../entity/entity.effects';
import { typeFor } from '../util';
import * as actions from './hero.actions';

@Injectable()
export class HeroEffects extends EntityEffects<Hero> {

  constructor(
    store: Store<Hero>,
    action$: Actions,
    private dataService: DataService) {
    super(store, action$, 'Hero', 'heroes', dataService.getHeroes, dataService.addOrUpdateHero);
    console.log('HeroEffects Constructed');
  }
  // @Effect()
  // load2$ = this.action$
  //   .ofType(typeFor(this.entityName, actions.ActionNames.LOAD))
  //   .startWith(new actions.Load<Hero>(null, this.entityName))
  //   .do(() => console.log('load starting'))
  //   .switchMap(() =>
  //     this.getEntities()
  //       .do(() => console.log('got entities'))
  //       .mergeMap(fetchedEntities => Observable.from(fetchedEntities))
  //       .map((fetchedEntity: Hero) => new actions.LoadSuccess<Hero>(fetchedEntity, this.entityName))  // one action per entity
  //       .catch(() => Observable.of(new actions.UpdateFail<Hero>(null, this.entityName)))
  //   );
}
