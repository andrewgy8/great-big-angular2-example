export const CREATE_TODO = 'CREATE_TODO';
export const MARK_DONE = 'MARK_DONE';
export const DELETE_TODO = 'DELETE_TODO';
export const ADD_TAG_TO_TODO = 'ADD_TAG_TO_TODO';
export const REMOVE_TAG_FROM_TODO = 'REMOVE_TAG_FROM_TODO';

export const createTodo = props => {
    return {
        type: CREATE_TODO,
        payload: props,
    };
};

export const markDone = id => {
    return {
        type: MARK_DONE,
        payload: id,
    };
};

export const deleteTodo = id => {
    return {
        type: DELETE_TODO,
        payload: id,
    };
};

export const addTagToTodo = (todo, tag) => {
    return {
        type: ADD_TAG_TO_TODO,
        payload: {
            todo,
            tag,
        },
    };
};

export const removeTagFromTodo = (todo, tag) => {
    return {
        type: REMOVE_TAG_FROM_TODO,
        payload: {
            todo,
            tag,
        },
    };
};
