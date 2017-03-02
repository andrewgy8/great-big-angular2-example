import { Action } from '@ngrx/store';

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

export const ActionNames = {
  ADD: 'Add',
  ADD_SUCCESS: 'AddSuccess',
  UPDATE: 'Update',
  UPDATE_SUCCESS: 'UpdateSuccess',
  UPDATE_FAIL: 'UpdateFail',
  LOAD: 'Load',
  LOAD_SUCCESS: 'LoadSuccess',
  LOAD_FAIL: 'LoadFail',
  SELECT: 'Select',
  DELETE: 'Delete'
}
export let ActionTypes = {
  ADD: '',
  ADD_SUCCESS: '',
  UPDATE: '',
  UPDATE_SUCCESS: '',
  UPDATE_FAIL: '',
  LOAD: '',
  LOAD_SUCCESS: '',
  LOAD_FAIL: '',
  SELECT: '',
  DELETE: ''
}

// const ADD = 'ADD';
// const ADD_SUCCESS = 'ADD_SUCCESS';
// const UPDATE = 'UPATE';
// const UPDATE_SUCCESS = 'UPDATE_SUCCESS';
// const UPDATE_FAIL = 'UPDATE_FAIL';
// const LOAD = 'LOAD';
// const LOAD_SUCCESS = 'LOAD_SUCCESS';
// const LOAD_FAIL = 'LOAD_FAIL';
// const SELECT = 'SELECT';
// const DELETE = 'DELETE';

export class AddSuccess<T> implements Action {
  type: string;

  constructor(public entity: T) {
    this.type = ActionNames.UPDATE_FAIL;
  }
}

export class UpdateSuccess<T> implements Action {
  type: string;

  constructor(public entity: T) {
    // this.type = ActionNames.UPDATE_SUCCESS)
    this.type = ActionNames.UPDATE_SUCCESS;
  }
}

export class UpdateFail<T> implements Action {
  type: string;

  constructor(public entity: T) {
    this.type = ActionNames.UPDATE_FAIL
  }
}

export class Load<T> implements Action {
  type: string;

  constructor(public entity: T) {
    this.type = ActionNames.LOAD;
  }
}

export class LoadSuccess<T> implements Action {
  type: string;

  constructor(public entity: T) {
    this.type = ActionNames.LOAD_SUCCESS;
  }
}

export class LoadFail<T> implements Action {
  type: string;

  constructor(public entity: T) {
    this.type = ActionNames.LOAD_FAIL;
  }
}

export class Add<T> implements Action {
  type: string;

  constructor(public entity: T) {
    this.type = ActionNames.ADD;
  }
}

export class Update<T> implements Action {
  type: string;

  constructor(public entity: T) {
    this.type = ActionNames.UPDATE;
  }
}

export class Select<T> implements Action {
  type: string;

  constructor(public entity: T) {
    this.type = ActionNames.SELECT;
  }
}

export class Delete<T> implements Action {
  type: string;

  constructor(public entity: T) {
    this.type = ActionNames.DELETE;
  }
}

// export function getActionTypes<T>(entityType: string, actionName): string {
//   return type(`[${entityType}] ${actionName}`)
// }


export type Actions<T>
  = AddSuccess<T>
  | UpdateSuccess<T>
  | Load<T>
  | LoadSuccess<T>
  | LoadFail<T>
  | Add<T>
  | Update<T>
  | Select<T>
  | Delete<T>;
