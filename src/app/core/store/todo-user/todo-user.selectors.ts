import { schema } from '..';
import { createSelector } from 'reselect';

// Selects the state managed by Redux-ORM.
export const ormSelector = state => state.orm;

// Redux-ORM selectors work with reselect. To feed input
// selectors to a Redux-ORM selector, we use the reselect `createSelector`.
export const user = createSelector(
  ormSelector,
  state => state.selectedUserId,
  schema.createSelector((orm, selectedUserId) => {
    console.log('Running user selector');
    // .ref returns a reference to the plain
    // JavaScript object in the store.
    return orm.User.withId(selectedUserId).ref;
  })
);

export const users = createSelector(
  ormSelector,
  schema.createSelector(orm => {
    console.log('Running users selector');

    // `.toRefArray` returns a new Array that includes
    // direct references to each User object in the state.
    return orm.User.all().toRefArray();
  })
);