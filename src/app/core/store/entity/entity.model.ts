import * as commonActions from '../entity/entity.actions';
import { typeFor } from '../util';

export interface Entities<T> {
  ids: string[];
  entities: { [id: string]: T };
  loaded?: boolean;
  loading?: boolean;
  selectedEntityId?: string;
  actions: any;
  deleteEntity: Function;
  updateEntity: Function;
  addLoadEntity: Function;
  selectEntity: Function;
  getData: Function;
};


export let typeCache: { [label: string]: boolean } = {};
export function type<T>(label: T | ''): T {
  if (typeCache[<string>label]) {
    throw new Error(`Action type "${label}" is not unique"`);
  }

  typeCache[<string>label] = true;

  return <T>label;
}

function combineActions(entityTypeName, commonActionNames, specialActionNames) {
  let commonActions = Object.assign({}, commonActionNames);
  let specialActions = Object.assign({}, specialActionNames);

  let newActions = { ActionTypes: {} };
  // for (let actionName in commonActions) {
  //   if (actionName === 'ActionNames' || actionName === 'ActionTypes') continue;
  //   newActions.ActionTypes[actionName] = `[${entityTypeName}] ${actionName}`;
  // }
  for (let actionName in specialActions) {
    if (actionName === 'ActionNames' || actionName === 'ActionTypes') continue;
    newActions.ActionTypes[actionName] = typeFor(entityTypeName, actionName);
  }
  return newActions;
}

export function initialEntities<T>(vals: any = {}, entityTypeName?: string, specialActions?: any, initialEntity?): Entities<T> {

  // combine the standard actions with the specific actions
  let combinedActions = combineActions(entityTypeName, commonActions, specialActions);

  return Object.assign({
    ids: [],
    entities: {},
    loaded: false,
    loading: false,
    selectedEntityId: null,
    actions: combinedActions,
    initialEntity: initialEntity,

    /*
     * Delete the property from this.entities, the element from this.ids and
     * set selectedEntityId to null if it was the deleted one
     */
    deleteEntity: function (entity, type): Entities<T> {
      let entities = Object.assign({}, this.entities);
      delete entities[entity['id']];
      let selectedEntityId = this.ids.indexOf(this.selectedEntityId) > -1 ? null : this.selectedEntityId;
      let i = this.ids.findIndex(id => id == entity['id']);
      let ids = [...this.ids.slice(0, i), ...this.ids.slice(i + 1)];
      return Object.assign({}, this, { entities, ids, selectedEntityId });
    },

    updateEntity: function (action: commonActions.Update<T>): Entities<T> {
      let entities = Object.assign({}, this.entities);
      entities[action.entity['id']] = Object.assign({}, entities[action.entity['id']], this.reduceOne(this, entities[action.entity['id']], action), { dirty: true })
      return Object.assign({}, this, {
        ids: Object.keys(entities),
        entities: entities
      });
    },

    addLoadEntity: function (action: commonActions.Add<T> | commonActions.Load<T>): Entities<T> {
      let entities = Object.assign({}, this.entities);
      entities[action.entity['id']] = Object.assign({}, this.reduceOne(this, null, action), { dirty: true });
      return Object.assign({}, this, {
        ids: Object.keys(entities),
        entities: entities,
        loaded: true,
        loading: false,
      });
    },

    selectEntity: function (action: commonActions.Select<T>): Entities<T> {
      return Object.assign({}, this, {
        selectedEntityId: action.entity['id']
      });
    },

    reduceOne: function (state, entity: T = null, action: any): T {  //TODO: would be nice if this wasn't any
      switch (action.type) {

        case state.actions.ActionTypes.Add:
          return Object.assign({}, action.payload, { dirty: true });
        case state.actions.ActionTypes.Update:
          if (entity['id'] == action.payload['id']) {
            return Object.assign({}, entity, { text: action.payload.text }, { dirty: true });
          } else {
            return entity;
          }
        case state.actions.ActionTypes.AddSuccess:
        case state.actions.ActionTypes.LoadSuccess:
          return Object.assign({}, initialEntity, action.payload, { dirty: false });
        case state.actions.ActionTypes.UpdateSuccess:
          if (entity['id'] == action.payload['id']) {
            return Object.assign({}, action.payload, { dirty: false });
          } else {
            return entity;
          }
        default:
          return entity;
      }
    }
  }, vals);
};

export interface IDs {
  loaded: boolean;
  loading: boolean;
  ids: string[];
};

export function initialIDs(): IDs {
  return {
    loaded: false,
    loading: false,
    ids: []
  }
};
