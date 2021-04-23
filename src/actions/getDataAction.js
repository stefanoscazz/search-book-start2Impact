import axios from 'axios';


export const getDataAction = (input) => async (dispatch) => {
    const name = (input === undefined) ? "William Gibson" : input;

    try {
        dispatch({
            type: "BOOKS_LOADING"
        });
        const res = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${name}`);
        dispatch({
            type: 'BOOKS_SUCCESS',
            payload: res.data
        })
    } catch (e) {
        dispatch({
            type: "BOOKS_FAIL"
        })

    }

};
