import { Action } from '@ngrx/store';
import { type } from '../util';

export const ActionTypes = {
  OPEN_SIDENAV: type('[Layout] Open Sidenav'),
  CLOSE_SIDENAV: type('[Layout] Close Sidenav'),
  SEARCH_FOR_HERO: type('[Layout] Search for Hero')
};


export class OpenSidenavAction implements Action {
  type = ActionTypes.OPEN_SIDENAV;
}

export class CloseSidenavAction implements Action {
  type = ActionTypes.CLOSE_SIDENAV;
}

export class SearchForHeroAction implements Action {
  type = ActionTypes.SEARCH_FOR_HERO;

  constructor(public payload: { term: string }) { };
}

export type Actions
  = OpenSidenavAction
  | CloseSidenavAction
  | SearchForHeroAction
