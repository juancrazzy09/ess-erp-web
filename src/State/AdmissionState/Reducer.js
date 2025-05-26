import {
    FETCH_APPLICATIONCOUNT_REQUEST,FETCH_APPLICATIONCOUNT_SUCCESS,FETCH_APPLICATIONCOUNT_FAILURE,
    FETCH_GENERATETABLE_REQUEST,FETCH_GENERATETABLE_SUCCESS,FETCH_GENERATETABLE_FAILURE,
    FETCH_STUDENTBYID_REQUEST,FETCH_STUDENTBYID_SUCCESS, FETCH_STUDENTBYID_FAILURE,
    FETCH_DOCUMENTTABLE_REQUEST,FETCH_DOCUMENTTABLE_SUCCESS,FETCH_DOCUMENTTABLE_FAILURE,
    FETCH_ADMISSIONSUBMITGPA_REQUEST,FETCH_ADMISSIONSUBMITGPA_SUCCESS,FETCH_ADMISSIONSUBMITGPA_FAILURE,
    FETCH_STUDENTGPA_REQUEST, FETCH_STUDENTGPA_SUCCESS, FETCH_STUDENTGPA_FAILURE,
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
    docs: {...initialDataState},
    gpa: {...initialDataState},
    gpalist: {...initialDataState}
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
        
        //insert gpa of student by admission id
        case FETCH_ADMISSIONSUBMITGPA_REQUEST:
            return {...state, gpa: {loading: true, data: [], error: '' }};
        case FETCH_ADMISSIONSUBMITGPA_SUCCESS:
            return {...state, gpa: {loading: false, data: action.payload, error:''}};
        case FETCH_ADMISSIONSUBMITGPA_FAILURE:
            return {...state, gpa: {loading: false, date: [], error: action.payload}};

        //get gpa of student by student id
        case FETCH_STUDENTGPA_REQUEST:
            return {...state, gpalist: {loading: true, data: [], error: '' }};
        case FETCH_STUDENTGPA_SUCCESS:
            return {...state, gpalist: {loading: false, data: action.payload, error:''}};
        case FETCH_STUDENTGPA_FAILURE:
            return {...state, gpalist: {loading: false, date: [], error: action.payload}};

        //get docs by student id
        case FETCH_DOCUMENTTABLE_REQUEST: 
            return {...state, docs: { loading: true, data: [], error: ''}};
        case FETCH_DOCUMENTTABLE_SUCCESS:
            return {...state, docs: {loading: false, data: action.payload, error: ''}};
        case FETCH_DOCUMENTTABLE_FAILURE:
            return {...state, docs: {loading: false, data: [], error: action.payload, success: false }};
        
        default: 
            return state;
    }
};

export default admissionReducer;