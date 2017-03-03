import '@ngrx/core/add/operator/select';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/let';
import { Observable } from 'rxjs/Observable';

import { Rebuttal, initialRebuttal } from './rebuttal.model';
import * as actions from './rebuttal.actions';
import { Entities, initialEntities } from '../entity/entity.model';

export function reducer(state = initialEntities<Rebuttal>({}, 'Rebuttal', actions, initialRebuttal), action: actions.Actions): Entities<Rebuttal> {
  let entities = {};
  switch (action.type) {

    // add one entity
    case actions.ActionTypes.ADD_REBUTTAL:
    case actions.ActionTypes.LOAD_SUCCESS: {
      entities = Object.assign({}, state.entities);
      entities[action.payload.id] = singleReducer(null, action);
      return Object.assign({}, state, {
        ids: Object.keys(entities),
        entities: entities,
        loaded: true,
        loading: false,
      });
    }

    // operate on one entity
    case actions.ActionTypes.SAVE_REBUTTAL:
    case actions.ActionTypes.CANCEL_CHANGES:
    case actions.ActionTypes.MAKE_REBUTTAL_EDITABLE: {
      entities = Object.assign({}, state.entities);
      entities[action.payload.id] = singleReducer(entities[action.payload.id], action);
      return Object.assign({}, state, {
        entities: entities
      });
    }

    default:
      return state;
  }

  function singleReducer(state: Rebuttal = initialRebuttal(),
    action: actions.Actions): Rebuttal {
    switch (action.type) {

      case actions.ActionTypes.ADD_REBUTTAL:
      case actions.ActionTypes.LOAD_SUCCESS:
        return Object.assign({}, initialRebuttal(), action.payload, { dirty: false });

      case actions.ActionTypes.CANCEL_CHANGES:
        return Object.assign({}, state, { editing: false });

      case actions.ActionTypes.SAVE_REBUTTAL: {
        let newRebuttal = action.payload.newRebuttal;
        return Object.assign({}, state, {
          shortName: newRebuttal.shortName.value,
          longName: newRebuttal.longName.value,
          link: newRebuttal.link.value,
          comments: newRebuttal.comments.value,
          original: state.original || state,
          // original: state,
          editing: false
        });
      }

      case actions.ActionTypes.MAKE_REBUTTAL_EDITABLE: {
        if (state.id == action.payload.id) {
          return Object.assign({}, state, { editing: true });
        } else {
          return state;
        }
      }

      default: {
        return state;
      }
    }
  }
};

export const getEntities = (state: Entities<Rebuttal>) => state.entities;

export const getIds = (state: Entities<Rebuttal>) => state.ids;
