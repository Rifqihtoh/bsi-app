//reducer.jsx

const initialState = {
    count: 0,
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
    }
}