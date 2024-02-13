import { FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_FAILURE } from "../type/type";
// Actions
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

// Action creators
export const increment = () => ({
    type: INCREMENT,
})

export const decrement = () => ({
    type: DECREMENT,
})



// Initial state
const initialState = {
    counter: 0,
    notes: [],
    products: [],
    loading: false,
    error: ''
}

// Root reducer
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                counter: state.counter + 1
            }
        case DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            }
        case 'ADD_NOTE':
            return { ...state, notes: [...state.notes, action.payload] };
        case 'DELETE_NOTE':
        const newNotes = state.notes.filter((note, index) => index !== action.payload);
        return {
            ...state,
            notes: newNotes
        };
        case 'EDIT_NOTE':
            const { index, newText } = action.payload;
            const updatedNotes = state.notes.map((note, idx) => {
                if (idx === index) {
                return newText;
                }
                return note;
            });
            return {
                ...state,
                notes: updatedNotes
        };
        case FETCH_PRODUCTS_REQUEST:
        return {
            ...state,
            loading: true
        };
        case FETCH_PRODUCTS_SUCCESS:
        return {
            ...state,
            loading: false,
            products: action.payload,
            error: ''
        };
        case FETCH_PRODUCTS_FAILURE:
        return {
            ...state,
            loading: false,
            products: [],
            error: action.payload
        };
        default:
            return state
    }
}

export default rootReducer
