import {
    FETCH_LOGIN_REQUEST, FETCH_LOGIN_SUCCESS, FETCH_LOGIN_FAILURE,
} from './ActionType';


const initialFormState = {
    loading: false,
    data: [],
    error: '',
    success: false,
}

const initialState = {
    loginForm: {...initialFormState},
}

const loginformReducer = (state = initialState, action) => {
    switch(action.type){
        //login
        case FETCH_LOGIN_REQUEST:
            return { ...state, login: { loading: true, data: [], error: ''}};
        case FETCH_LOGIN_SUCCESS:
            return { ...state, login: { loading: false, data: action.payload, error: ''}};
        case FETCH_LOGIN_FAILURE:
            return { ...state, login: { loading: false, data: [], error: action.payload, success: false } };
        
        default: 
            return state;
    }
};

export default loginformReducer;