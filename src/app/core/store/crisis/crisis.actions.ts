import { Action } from '@ngrx/store';
import { Crisis } from './crisis.model';
import { type } from '../util';

export const ActionTypes = {
  ADD_CRISIS: type('[Crises] Add Crisis'),
  ADD_CRISIS_SUCCESS: type('[Crises] Add Crisis Success'),
  ADD_CRISIS_FAIL: type('[Crises] Add Crisis Fail'),
  UPDATE_CRISIS: type('[Crises] Update Crisis'),
  UPDATE_CRISIS_SUCCESS: type('[Crises] Update Crisis Success'),
  UPDATE_CRISIS_FAIL: type('[Crises] Update Crisis Fail'),
  LOAD: type('[Crises] Load'),
  LOAD_SUCCESS: type('[Crises] Load Success'),
  LOAD_FAIL: type('[Crises] Load Fail'),
  SELECT_CRISIS: type('[Crises] Select Crisis')
};

export class AddSuccess implements Action {
  type = ActionTypes.ADD_CRISIS_SUCCESS;

  constructor(public payload: Crisis) { }
}

export class UpdateSuccess implements Action {
  type = ActionTypes.UPDATE_CRISIS_SUCCESS;

  constructor(public payload: any) { } // payload: { note }
}

export class UpdateFail implements Action {
  type = ActionTypes.UPDATE_CRISIS_FAIL;

  constructor() { }
}

/**
 * Load Crisis Actions
 */
export class Load implements Action {
  type = ActionTypes.LOAD;

  constructor() { }
}

export class LoadSuccess implements Action {
  type = ActionTypes.LOAD_SUCCESS;

  constructor(public payload: Crisis) { }
}

export class LoadFail implements Action {
  type = ActionTypes.LOAD_FAIL;

  constructor(public payload: any) { }
}

export class Add implements Action {
  type = ActionTypes.ADD_CRISIS;

  constructor(public payload: Crisis) { }
}

export class Update implements Action {
  type = ActionTypes.UPDATE_CRISIS;

  constructor(public payload: any) { }
}

export class Select implements Action {
  type = ActionTypes.SELECT_CRISIS;

  constructor(public payload: string) { }
}

export type Actions
  = AddSuccess
  | UpdateSuccess
  | Load
  | LoadSuccess
  | LoadFail
  | Add
  | Update
  | Select;
