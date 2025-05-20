import {
    FETCH_APPLICANTSTATUS_REQUEST, FETCH_APPLICANTSTATUS_SUCCESS, FETCH_APPLICANTSTATUS_FAILURE,
} from './ActionType';

const baseUrl = import.meta.env.VITE_BASE_URL;

//Login
export const fetchApplicantStatusRequest = () => ({ type: FETCH_APPLICANTSTATUS_REQUEST });
export const fetchApplicantStatusSuccess = (data) => ({ type: FETCH_APPLICANTSTATUS_SUCCESS, payload: data });
export const fetchApplicantStatusFailure = (error) => ({type: FETCH_APPLICANTSTATUS_FAILURE, payload: error });

export const fetchApplicantStatusData = (formData) => async(dispatch) => {
    dispatch(fetchApplicantStatusRequest());
    try{
        const token = localStorage.getItem('token');
        const url = `${baseUrl}/admission/get-online-application`;

        const response = await fetch(url, {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
         },
        body: JSON.stringify(formData),
        });
        const res = await response.json();
        if(res.success == false){
            throw new Error(res.message);
        }
        dispatch(fetchApplicantStatusSuccess(
            {
                data: res.data,
                recordsTotal: res.recordsTotal,
                recordsFiltered: res.recordsFiltered,
                currentPage: pageNumber,
                pageSize,
            }
        ));
        return{ok: true, data: res};
    }
    catch(error){
        dispatch(fetchApplicantStatusFailure(error.message));
        return { ok: false, error};
    }
};