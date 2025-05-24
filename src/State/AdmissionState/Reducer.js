import {
    FETCH_APPLICATIONCOUNT_REQUEST,FETCH_APPLICATIONCOUNT_SUCCESS,FETCH_APPLICATIONCOUNT_FAILURE,
    FETCH_GENERATETABLE_REQUEST,FETCH_GENERATETABLE_SUCCESS,FETCH_GENERATETABLE_FAILURE,
    FETCH_STUDENTBYID_REQUEST,FETCH_STUDENTBYID_SUCCESS, FETCH_STUDENTBYID_FAILURE,

} from './ActionType';



const initialDataState = {
    loading: false,
    data: [],
    error: '',
    success: false,
}
const initialTableState = {
    data: [],
    total: 0,
    loading: false,
    error: null,
    page: 1,
    pageSize: 10,

}
const initialState = {
    applicantscount: {...initialDataState},
    list: {...initialDataState},
    student: {...initialDataState},
}

const admissionReducer = (state = initialState, action) => {
    switch(action.type){

        //applicant count
        case FETCH_APPLICATIONCOUNT_REQUEST: 
            return {...state, count: { loading: true, data: [], error: ''}};
        case FETCH_APPLICATIONCOUNT_SUCCESS:
            return {...state, count: {loading: false, data: action.payload, error: ''}};
        case FETCH_APPLICATIONCOUNT_FAILURE:
            return {...state, count: {loading: false, data: [], error: action.payload, success: false }};
        //applicant list
       case FETCH_GENERATETABLE_REQUEST:
            return {
                ...state,
                list: {
                loading: true,
                data: [],
                error: '',
                },
            };

        case FETCH_GENERATETABLE_SUCCESS:
            return {
                ...state,
                list: {
                loading: false,
                data: action.payload.data,
                total: action.payload.total,
                page: action.payload.page,
                pageSize: action.payload.pageSize,
                },
            };

        case FETCH_GENERATETABLE_FAILURE:
            return {
                ...state,
                list: {
                loading: false,
                data: [],
                error: action.payload,
                },
            };
        //get student by id
         case FETCH_STUDENTBYID_REQUEST: 
            return {...state, student: { loading: true, data: [], error: ''}};
        case FETCH_STUDENTBYID_SUCCESS:
            return {...state, student: {loading: false, data: action.payload, error: ''}};
        case FETCH_STUDENTBYID_FAILURE:
            return {...state, student: {loading: false, data: [], error: action.payload, success: false }};
        default: 
            return state;
    }
};

export default admissionReducer;