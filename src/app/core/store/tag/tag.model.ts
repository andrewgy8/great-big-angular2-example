import { Schema, Model, many, fk } from 'redux-orm';
import { PropTypes } from 'react';
import propTypesMixin from 'redux-orm-proptypes';
const ValidatingModel = propTypesMixin(Model);
export class Tag extends ValidatingModel {
  modelName = 'Tag';
  backend = {
    idAttribute: 'name',
  };
}
