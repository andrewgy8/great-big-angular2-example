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

@Injectable()
export class EntityEffects<T> {
  constructor(private store: Store<T>,
    private action$: Actions,
    private actions: any,
    private branch: string) { }

  getEntities: Function;
  addUpdateEntity: Function;

  @Effect()
  load$ = this.action$
    .ofType(this.actions.ActionTypes.LOAD)
    .startWith(new this.actions.Load())
    .switchMap(() =>
      this.getEntities()
        .mergeMap(fetchedEntities => Observable.from(fetchedEntities))
        .do(() => console.log('hi'))
        .map((fetchedEntity: T) => new this.actions.LoadSuccess(fetchedEntity))  // one action per entity
        .catch(() => Observable.of(new this.actions.UpdateFail()))
    );

  @Effect()
  update$ = this.action$
    .ofType(this.actions.ActionTypes.UPDATE,
    this.actions.ActionTypes.ADD)
    .withLatestFrom(this.store.select(this.branch))
    .switchMap(([{}, entities]) =>
      Observable   // first element is action, but it isn't used
        .from((<any>entities).ids)
        .filter((id: string) => (<any>entities).entities[id].dirty)
        .switchMap((id: string) => this.addUpdateEntity((<any>entities).entities[id]))
        .map((responseEntity: T) => new this.actions.UpdateSuccess(responseEntity))
    );

}
