
const initialState = {
    loading: false,
    data: [],
    errorMsg: "",
    effect: true,
    bookFound: false
}

const booksReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'BOOKS_LOADING':

            return {
                ...state,
                loading: true,
            };
        case 'BOOKS_FAIL':

            return {
                ...state,
                loading: false,
                errorMsg: "La ricerca non ha trovato dei libri",

            };
        case 'BOOKS_SUCCESS':

            return {
                ...state,
                loading: false,
                data: action.payload,
                effect: false,
                bookFound: true
            };
        default:
            return state;
    }
}
export default booksReducer;