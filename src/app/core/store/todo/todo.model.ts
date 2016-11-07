/* eslint-disable default-case, no-shadow */
import { Schema, Model, many, fk } from 'redux-orm';
import { PropTypes } from 'react';
import propTypesMixin from 'redux-orm-proptypes';
import { Tag } from '../tag/tag.model';
import { TodoUser } from '../todo-user/todo-user.model';

const ValidatingModel = propTypesMixin(Model);

export class Todo extends ValidatingModel {
  modelName = 'Todo';
  fields = {
    tags: many('Tag', 'todos'),
    user: fk('TodoUser', 'todos'),
  };
  propTypes = {
    text: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
    user: PropTypes.oneOfType([
      PropTypes.instanceOf(TodoUser),
      PropTypes.number,
    ]).isRequired,
    tags: PropTypes.arrayOf(PropTypes.oneOfType([
      PropTypes.instanceOf(Tag),
      PropTypes.string,
    ])).isRequired,
  };
  defaultProps = {
    done: false,
  };
}

export const schema = new Schema();
schema.register(Todo, Tag, TodoUser);

export default schema;
