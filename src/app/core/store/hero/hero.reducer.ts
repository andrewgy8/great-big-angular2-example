import { createSelector } from 'reselect';


import { Hero, initialHero } from './hero.model';
import * as heroActions from './hero.actions';
import { Entities, initialEntities } from '../entity/entity.model';
import * as entityActions from '../entity/entity.actions';

// This reduces a set of heroes
export function reducer(state: Entities<Hero> = initialEntities<Hero>({}, 'Hero', heroActions, initialHero),
  action: entityActions.Actions<Hero> | heroActions.Actions): Entities<Hero> {
  console.log(action.type)
  switch (action.type) {
    case state.actions.ActionTypes.Add:
    case state.actions.ActionTypes.AddSuccess:
    case state.actions.ActionTypes.LoadSuccess:
      return state.addLoadEntity(action);
    case state.actions.ActionTypes.Update:
    case state.actions.ActionTypes.UpdateSuccess:
      return state.updateEntity(action);
    case state.actions.ActionTypes.Delete:
      return state.deleteEntity(action);
    case state.actions.ActionTypes.Select:
      return state.selectEntity(action);
    default:
      return state;
  }
};

export const getEntities = (state: Entities<Hero>) => state.entities;

export const getIds = (state: Entities<Hero>) => state.ids;

export const getSelectedId = (state: Entities<Hero>) => state.selectedEntityId;

export const getSelected = createSelector(getEntities, getSelectedId, (entities, selectedId) => {
  return entities[selectedId];
});
