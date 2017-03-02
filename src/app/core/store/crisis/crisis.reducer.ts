import 'rxjs/add/operator/map';
import 'rxjs/add/operator/let';
import { createSelector } from 'reselect';
import { combineLatest } from 'rxjs/observable/combineLatest';

import { Crisis, initialCrisis } from './crisis.model';
import * as actions from './crisis.actions';
import { Entities, initialEntities } from '../entity/entity.model';

// This reduces a set of crises
export function reducer(state = initialEntities<Crisis>({}, 'Crisis', actions, initialCrisis),
  action: actions.Actions): Entities<Crisis> {
  let entities = {};
  switch (action.type) {
    case actions.ActionTypes.ADD_CRISIS:
    case actions.ActionTypes.ADD_CRISIS_SUCCESS:
    case actions.ActionTypes.LOAD_SUCCESS:
      entities = Object.assign({}, state.entities);
      entities[action.payload.id] = crisisReducer(null, action);
      return Object.assign({}, state, {
        ids: Object.keys(entities),
        entities: entities,
        loaded: true,
        loading: false,
      });
    case actions.ActionTypes.UPDATE_CRISIS:
    case actions.ActionTypes.UPDATE_CRISIS_SUCCESS:
      entities = Object.assign({}, state.entities);
      entities[action.payload.id] = crisisReducer(entities[action.payload.id], action);
      return Object.assign({}, state, {
        ids: Object.keys(entities),
        entities: entities
      });

    case actions.ActionTypes.SELECT_CRISIS:
      return Object.assign({}, state, { selectedEntityId: action.payload })
    default:
      return state;
  }


  // This reduces a single actions
  function crisisReducer(state: Crisis = null, action: actions.Actions): Crisis {
    switch (action.type) {

      case actions.ActionTypes.ADD_CRISIS:
        return Object.assign({}, action.payload, { dirty: true });
      case actions.ActionTypes.UPDATE_CRISIS:
        if (state.id == action.payload.id) {
          return Object.assign({}, state, { text: action.payload.text }, { dirty: true });
        } else {
          return state;
        }
      case actions.ActionTypes.ADD_CRISIS_SUCCESS:
      case actions.ActionTypes.LOAD_SUCCESS:
        return Object.assign({}, initialCrisis, action.payload, { dirty: false });
      case actions.ActionTypes.UPDATE_CRISIS_SUCCESS:
        if (state.id == action.payload.id) {
          return Object.assign({}, action.payload, { dirty: false });
        } else {
          return state;
        }
      default:
        return state;
    }
  };

};

export const getEntities = (state: Entities<Crisis>) => state.entities;

export const getIds = (state: Entities<Crisis>) => state.ids;

export const getSelectedId = (state: Entities<Crisis>) => state.selectedEntityId;

export const getSelected = createSelector(getEntities, getSelectedId, (entities, selectedId) => {
  return entities[selectedId];
});
