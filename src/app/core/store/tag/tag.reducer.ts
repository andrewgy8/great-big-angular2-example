import propTypesMixin from 'redux-orm-proptypes';
import { Schema, Model, many, fk } from 'redux-orm';

import {
    ADD_TAG_TO_TODO,
} from './tag.actions';

import {
    CREATE_TODO,
} from '../todo/todo.actions';

const ValidatingModel = propTypesMixin(Model);

export class Tag extends ValidatingModel {
    static reducer(state, action, Tag) {
        const { payload, type } = action;
        switch (type) {
            case CREATE_TODO:
                const tags = payload.tags.split(',');
                const trimmed = tags.map(name => name.trim());
                trimmed.forEach(name => Tag.create({ name }));
                break;
            case ADD_TAG_TO_TODO:
                if (!Tag.filter({ name: payload.tag }).exists()) {
                    Tag.create({ name: payload.tag });
                }
                break;
        }
    }
}