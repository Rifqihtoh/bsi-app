//reducer.jsx
// import {ADD_NOTE} from "../type/type"

const initialState = {
    count: 0,
    notes: [],
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "INCREMENT":
            return { ...state, count: state.count + 1 };
        case "DECREMENT":
            return { ...state, count: state.count - 1 };
        case "RESET":
            return { ...state, count: 0 };
        case "MULTI2":
            return { ...state, count: state.count * 2 };
        case "DIV2":
            return { ...state, count: state.count / 2 };
        case 'ADD_NOTE':
            return { ...state, notes: [...state.notes, action.payload] };
        case 'EDIT_NOTE':
            return { ...state, notes: state.notes.map((note, index) => index === action.payload.index ? action.payload.newText : note) }
        case 'REMOVE_NOTE':
            return { ...state, notes: state.notes.filter((note, index) => index !== action.payload.index) }
        default:
            return state
    }
}

export default rootReducer;