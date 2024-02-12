//action.jsx
// import {ADD_NOTE} from "../type/type"

export const increment = () => {
    return {
        type: "INCREMENT",
    };
}

export const decrement = () => {
    return {
        type: "DECREMENT",
    };
}

export const multi2 = () => {
    return {
        type: "MULTI2",
    };
}

export const div2 = () => {
    return {
        type: "DIV2",
    };
}

export const reset = () => {
    return {
        type: "RESET",
    };
}

export const addNote = (note) => {
    return {
        type: 'ADD_NOTE',
        payload: note
    }
}

export const editNote = (index, newText) => {
    return {
        type: 'EDIT_NOTE',
        payload: { index, newText }
    }
}

export const removeNote = (index) => {
    return {
        type: 'REMOVE_NOTE',
        payload: index
    }
}