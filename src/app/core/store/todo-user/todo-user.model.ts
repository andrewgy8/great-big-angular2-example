import propTypesMixin from 'redux-orm-proptypes';
import { Schema, Model, many, fk } from 'redux-orm';

const ValidatingModel = propTypesMixin(Model);

export class TodoUser extends ValidatingModel {
  modelName = 'User';
}