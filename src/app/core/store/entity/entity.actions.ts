import { Action } from '@ngrx/store';

import { typeFor } from '../util';

// These string values need to match the action class names
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
// export let ActionTypes = {
//   ADD: '',
//   ADD_SUCCESS: '',
//   UPDATE: '',
//   UPDATE_SUCCESS: '',
//   UPDATE_FAIL: '',
//   LOAD: '',
//   LOAD_SUCCESS: '',
//   LOAD_FAIL: '',
//   SELECT: '',
//   DELETE: ''
// }

class BaseAction<T> implements Action {
  _name: string = 'BASE ACTION - ERROR';
  get type() {
    return typeFor(this.entityName, this._name)
  }
  set type(type) {
    this._name = type;
  }

  constructor(public entity: T, public entityName: string) { }
}

export class AddSuccess<T> extends BaseAction<T> {
  _name: string = ActionNames.ADD_SUCCESS;
}

export class UpdateSuccess<T> extends BaseAction<T> {
  _name: string = ActionNames.UPDATE_SUCCESS;
}

export class UpdateFail<T> extends BaseAction<T> {
  _name: string = ActionNames.UPDATE_FAIL;
}

export class Load<T> extends BaseAction<T> {
  _name: string = ActionNames.LOAD;
}

export class LoadSuccess<T> extends BaseAction<T> {
  _name: string = ActionNames.LOAD_SUCCESS;
}

export class LoadFail<T> extends BaseAction<T> {
  _name: string = ActionNames.LOAD_FAIL;
}

export class Add<T> extends BaseAction<T> {
  _name: string = ActionNames.ADD;
}

export class Update<T> extends BaseAction<T> {
  _name: string = ActionNames.UPDATE;
}

export class Select<T> extends BaseAction<T> {
  _name: string = ActionNames.SELECT;
}

export class Delete<T> extends BaseAction<T> {
  _name: string = ActionNames.DELETE;
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
