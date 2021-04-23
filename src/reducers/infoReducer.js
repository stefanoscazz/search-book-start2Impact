/* Non fa apparire piu volte il messaggio di input 
  es: quando si ritorna da BookDescription alla Home */
const initialState = {
    show: true
}

const infoReducer = (state = initialState, action) => {
    switch (action.type) {
        case "INFO_ACTION":
            return {
                ...state,
                show: false
            }

        default:
            return state;
    }
}
export default infoReducer;