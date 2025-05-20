import {
    FETCH_APPLICANTSTATUS_REQUEST, FETCH_APPLICANTSTATUS_SUCCESS, FETCH_APPLICANTSTATUS_FAILURE,
} from './ActionType';


const initialFormState = {
    loading: false,
    data: [],
    error: '',
    success: false,
    recordsTotal: 0,
    recordsFiltered: 0,
    currentPage: 1,
    pageSize: 10,
}

const initialState = {
    applicants: {...initialFormState},
}

const admissionReducer = (state = initialState, action) => {
    switch(action.type){
        //applicant list
        case FETCH_APPLICANTSTATUS_REQUEST:
            return { ...state, login: { loading: true, data: [], error: ''}};
        case FETCH_APPLICANTSTATUS_SUCCESS:
            return { 
                 ...state,
                loading: false,
                data: action.payload.data,
                recordsTotal: action.payload.recordsTotal,
                recordsFiltered: action.payload.recordsFiltered,
                currentPage: action.payload.currentPage,
                pageSize: action.payload.pageSize,
            };
        case FETCH_APPLICANTSTATUS_FAILURE:
            return { ...state, login: { loading: false, data: [], error: action.payload, success: false } };
        
        default: 
            return state;
    }
};

export default admissionReducer;