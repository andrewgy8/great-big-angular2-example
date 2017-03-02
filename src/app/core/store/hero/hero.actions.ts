import { Action } from '@ngrx/store';
import { Hero } from './hero.model';

// export const ActionTypes = {
//   ADD: type('[Heroes] Add Hero'),
//   ADD_SUCCESS: type('[Heroes] Add Hero Success'),
//   ADD_FAIL: type('[Heroes] Add Hero Fail'),
//   UPDATE: type('[Heroes] Update Hero'),
//   UPDATE_SUCCESS: type('[Heroes] Update Hero Success'),
//   UPDATE_FAIL: type('[Heroes] Update Hero Fail'),
//   LOAD: type('[Heroes] Load'),
//   LOAD_SUCCESS: type('[Heroes] Load Success'),
//   LOAD_FAIL: type('[Heroes] Load Fail'),
//   SELECT: type('[Heroes] Select Hero'),
//   DELETE: type('[Heroes] Delete Hero')
// };
import * as entityActions from '../entity/entity.actions';

export const ActionNames = {
  ADD_SUPERPOWER: 'AddSuperpower'
}
export * from '../entity/entity.actions';

export class AddSuperpower implements Action {
  type = ActionNames.ADD_SUPERPOWER

  constructor(public payload: any) { }
}
export type Actions = entityActions.Actions<Hero> | AddSuperpower;


/*
export class AddSuccess implements Action {
  type = ActionTypes.ADD_SUCCESS;

  constructor(public payload: Hero) { }
}

export class UpdateSuccess implements Action {
  type = ActionTypes.UPDATE_SUCCESS;

  constructor(public payload: any) { }
}

export class UpdateFail implements Action {
  type = ActionTypes.UPDATE_FAIL;

  constructor() { }
}

export class Load implements Action {
  type = ActionTypes.LOAD;

  constructor() { }
}

export class LoadSuccess implements Action {
  type = ActionTypes.LOAD_SUCCESS;

  constructor(public payload: Hero) { }
}

export class LoadFail implements Action {
  type = ActionTypes.LOAD_FAIL;

  constructor(public payload: any) { }
}

export class Add implements Action {
  type = ActionTypes.ADD;

  constructor(public payload: Hero) { }
}

export class Update implements Action {
  type = ActionTypes.UPDATE;

  constructor(public payload: Hero) { }
}

export class Select implements Action {
  type = ActionTypes.SELECT;

  constructor(public payload: any) { }  // payload: {id}
}

export class Delete implements Action {
  type = ActionTypes.DELETE;

  constructor(public payload: Hero) { }
}

export type Actions
  = AddSuccess
  | UpdateSuccess
  | Load
  | LoadSuccess
  | LoadFail
  | Add
  | Update
  | Select
  | Delete;
*/

