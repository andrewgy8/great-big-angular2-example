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

import * as actions from './entity.actions';
import { typeFor } from '../util';

@Injectable()
export class EntityEffects<T> {
  constructor(
    private store: Store<T>,
    public action$: Actions,
    public entityName: string,
    private branch: string,
    public getEntities: Function,
    public addUpdateEntity: Function
  ) {

    console.log(branch)
    console.log(entityName)
  }


  @Effect()
  load$ = this.action$
    .ofType(typeFor(this.entityName, actions.ActionNames.LOAD))
    .startWith(new actions.Load<T>(null, this.entityName))
    .do(() => console.log('load starting'))
    .switchMap(() =>
      this.getEntities()
        .do(() => console.log('got entities'))
        .mergeMap(fetchedEntities => Observable.from(fetchedEntities))
        .map((fetchedEntity: T) => new actions.LoadSuccess<T>(fetchedEntity, this.entityName))  // one action per entity
        .catch(() => Observable.of(new actions.UpdateFail<T>(null, this.entityName)))
    );

  @Effect()
  update$ = this.action$
    .ofType(typeFor(this.entityName, actions.ActionNames.UPDATE), typeFor(this.entityName, actions.ActionNames.ADD))
    .withLatestFrom(this.store.select(this.branch))
    .switchMap(([{}, entities]) =>
      Observable   // first element is action, but it isn't used
        .from((<any>entities).ids)
        .filter((id: string) => (<any>entities).entities[id].dirty)
        .switchMap((id: string) => this.addUpdateEntity((<any>entities).entities[id]))
        .map((responseEntity: T) => new actions.UpdateSuccess<T>(responseEntity, this.entityName))
    );

}
