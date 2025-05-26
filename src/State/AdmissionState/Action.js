import {
    FETCH_APPLICATIONCOUNT_REQUEST, FETCH_APPLICATIONCOUNT_SUCCESS, FETCH_APPLICATIONCOUNT_FAILURE,
    FETCH_GENERATETABLE_REQUEST,FETCH_GENERATETABLE_SUCCESS,FETCH_GENERATETABLE_FAILURE,
    FETCH_STUDENTBYID_REQUEST,FETCH_STUDENTBYID_SUCCESS, FETCH_STUDENTBYID_FAILURE,
    FETCH_DOCUMENTTABLE_REQUEST, FETCH_DOCUMENTTABLE_SUCCESS, FETCH_DOCUMENTTABLE_FAILURE,
    FETCH_ADMISSIONSUBMITGPA_REQUEST,FETCH_ADMISSIONSUBMITGPA_SUCCESS,FETCH_ADMISSIONSUBMITGPA_FAILURE,
    FETCH_STUDENTGPA_REQUEST, FETCH_STUDENTGPA_SUCCESS, FETCH_STUDENTGPA_FAILURE,
} from './ActionType';

const baseUrl = import.meta.env.VITE_BASE_URL;


//Get Application Count 
export const fetchApplicationCountRequest = () => ({ type: FETCH_APPLICATIONCOUNT_REQUEST });
export const fetchApplicationCountSuccess = (data) => ({ type: FETCH_APPLICATIONCOUNT_SUCCESS, payload: data });
export const fetchApplicationCountFailure = (error) => ({type: FETCH_APPLICATIONCOUNT_FAILURE, payload: error });

export const fetchApplicationCountData = () => async(dispatch) => {
    dispatch(fetchApplicationCountRequest());
    try{
        const token = localStorage.getItem('token');
        const url = `${baseUrl}/admission/get-online-application-count`;

        const response = await fetch(url, {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
         },
        });
        const res = await response.json();
        if(res.success == false){
            throw new Error(res.message);
        }
        dispatch(fetchApplicationCountSuccess());
        return{ok: true, data: res};
    }
    catch(error){
        dispatch(fetchApplicationCountFailure(error.message));
        return { ok: false, error};
    }
};

//GenerateTable
export const fetchGenerateTableRequest = () => ({ type: FETCH_GENERATETABLE_REQUEST });
export const fetchGenerateTableSuccess = (payload) => ({ type: FETCH_GENERATETABLE_SUCCESS, payload });
export const fetchGenerateTableFailure = (error) => ({type: FETCH_GENERATETABLE_FAILURE, payload: error });

export const fetchGenerateTableData = ({ page, pageSize, search, status }) => async(dispatch) => {
    dispatch(fetchGenerateTableRequest());
    try{
        const token = localStorage.getItem('token');
        const url = `${baseUrl}/admission/generate-application-table?page=${page}&pageSize=${pageSize}&search=${search}&status=${status}`;
        
        const response = await fetch(url, {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
         },
        });
        console.log(response);
        const res = await response.json();
        console.log(res);
        if(res.success == false){
            throw new Error(res.message);
        }
        /* await new Promise(r => setTimeout(r, 500)); */
        dispatch(fetchGenerateTableSuccess(
            {
                data: res,
                total: res.length,
                page,
                pageSize,
            }
        ));
    }
    catch(error){
        dispatch(fetchGenerateTableFailure(error.message));
        return { ok: false, error};
    }
}; 

//get student by id
export const fetchStudentByIdRequest = () => ({ type: FETCH_STUDENTBYID_REQUEST });
export const fetchStudentByIdSuccess = (data) => ({ type: FETCH_STUDENTBYID_SUCCESS, payload: data });
export const fetchStudentByIdFailure = (error) => ({type: FETCH_STUDENTBYID_FAILURE, payload: error });

export const fetchStudentByIdData = (StudentId = '') => async(dispatch) => {
    dispatch(fetchStudentByIdRequest());
    try{
        const token = localStorage.getItem('token');
        const url = `${baseUrl}/admission/get-student-id?StudentId=${encodeURIComponent(StudentId)}`;

        const response = await fetch(url, {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
         },
        });
        const res = await response.json();
        console.log(res);
        if(res.success == false){
            throw new Error(res.message);
        }
        dispatch(fetchStudentByIdSuccess(res));
        return{ok: true, data: res};
    }
    catch(error){
        dispatch(fetchStudentByIdFailure(error.message));
        return { ok: false, error};
    }
};
//Insert GPA Grade in admission
export const fetchAdmissionSubmitGPARequest = () => ({ type: FETCH_ADMISSIONSUBMITGPA_REQUEST });
export const fetchAdmissionSubmitGPASuccess = (data) => ({ type: FETCH_ADMISSIONSUBMITGPA_SUCCESS, payload: data});
export const fetchAdmissionSubmitGPAFailure = (error) => ({ type: FETCH_ADMISSIONSUBMITGPA_FAILURE, payload: error});

export const fetchAdmissionSubmitGPAData = (gradeData) => async(dispatch) => {
    dispatch(fetchAdmissionSubmitGPARequest());
    try{
        console.log(gradeData);
        const token = localStorage.getItem('token');
        const url = `${baseUrl}/admission/insert-admission-gpa`;

        const response = await fetch(url, {
          method: 'POST',
          headers: {
              'Authorization': `Bearer ${token}`,
             'Content-Type': 'application/json' 
            },
        body: JSON.stringify(gradeData),
        });

        const res = await response.json();
        console.log(res);
        if(res.success == false){
            throw new Error(res.message);
        }
        dispatch(fetchAdmissionSubmitGPASuccess(res));
        return{ ok: true, data: res};
    }
    catch(error)
    {
        dispatch(fetchAdmissionSubmitGPAFailure(error.message));
        return { ok: false, error };
    }
};

//Insert GPA Grade in admission
export const fetchStudentGPARequest = () => ({ type: FETCH_STUDENTGPA_REQUEST });
export const fetchStudentGPASuccess = (data) => ({ type: FETCH_STUDENTGPA_SUCCESS, payload: data});
export const fetchStudentGPAFailure = (error) => ({ type: FETCH_STUDENTGPA_FAILURE, payload: error});

export const fetchStudentGPAData = (StudentId = '') => async(dispatch) => {
    dispatch(fetchStudentGPARequest());
    try{
        
        const token = localStorage.getItem('token');
        const url = `${baseUrl}/admission/get-student-gpa?StudentId=${StudentId}`;

        const response = await fetch(url, {
          method: 'POST',
          headers: {
              'Authorization': `Bearer ${token}`,
             'Content-Type': 'application/json' 
            },
        });

        const res = await response.json();
        console.log(res);
        if(res.success == false){
            throw new Error(res.message);
        }
        dispatch(fetchStudentGPASuccess(res));
        return{ ok: true, data: res};
    }
    catch(error)
    {
        dispatch(fetchStudentGPAFailure(error.message));
        return { ok: false, error };
    }
};

//get docs submitted table 
export const fetchDocumentTableRequest = () => ({ type: FETCH_DOCUMENTTABLE_REQUEST });
export const fetchDocumentTableSuccess = (data) => ({ type: FETCH_DOCUMENTTABLE_SUCCESS, payload: data});
export const fetchDocumentTableFailure = (error) => ({ type: FETCH_DOCUMENTTABLE_FAILURE, payload: error});

export const fetchDocumenttableData = (student_Id = '') => async(dispatch) => {
    dispatch(fetchDocumentTableRequest());
    try{
        const token = localStorage.getItem('token');
        const url = `${baseUrl}/admission/get-student-docs-id?StudentId=${encodeURIComponent(student_Id)}`;

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        });

        const res = await response.json();
        console.log(res);
        if(res.success == false){
            throw new Error(res.message);
        }
        dispatch(fetchDocumentTableSuccess(res));
        return{ ok: true, data: res};
    }
    catch(error)
    {
        dispatch(fetchDocumentTableFailure(error.message));
        return { ok: false, error };
    }
};