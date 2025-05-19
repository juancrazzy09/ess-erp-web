import {
  FETCH_CAMPUS_REQUEST, FETCH_CAMPUS_SUCCESS, FETCH_CAMPUS_FAILURE,
  FETCH_LEVEL_REQUEST, FETCH_LEVEL_SUCCESS, FETCH_LEVEL_FAILURE,
  FETCH_DIVISION_REQUEST, FETCH_DIVISION_SUCCESS, FETCH_DIVISION_FAILURE,
  FETCH_STRAND_REQUEST, FETCH_STRAND_SUCCESS, FETCH_STRAND_FAILURE,
  FETCH_NATIONALITY_REQUEST, FETCH_NATIONALITY_SUCCESS, FETCH_NATIONALITY_FAILURE,
  FETCH_RELIGION_REQUEST,FETCH_RELIGION_SUCCESS, FETCH_RELIGION_FAILURE,
  FETCH_PROVINCE_REQUEST,FETCH_PROVINCE_SUCCESS, FETCH_PROVINCE_FAILURE,
  FETCH_MUNICIPALITY_REQUEST,FETCH_MUNICIPALITY_SUCCESS, FETCH_MUNICIPALITY_FAILURE,
  FETCH_BARANGAY_REQUEST,FETCH_BARANGAY_SUCCESS, FETCH_BARANGAY_FAILURE,
  FETCH_ONLINEAPPLICATIONFORM_REQUEST,FETCH_ONLINEAPPLICATIONFORM_SUCCESS, FETCH_ONLINEAPPLICATIONFORM_FAILURE,
} from './ActionType';

const baseUrl = import.meta.env.VITE_BASE_URL;

// Campus
export const fetchCampusRequest = () => ({ type: FETCH_CAMPUS_REQUEST });
export const fetchCampusSuccess = (data) => ({ type: FETCH_CAMPUS_SUCCESS, payload: data });
export const fetchCampusFailure = (error) => ({ type: FETCH_CAMPUS_FAILURE, payload: error });

export const fetchCampusData = () => async (dispatch) => {
  dispatch(fetchCampusRequest());
  try {
    const response = await fetch(`${baseUrl}/auth/get-campus-dropdown`);
    if (!response.ok) throw new Error(response.statusText);
    const data = await response.json();
    console.log(data);
    dispatch(fetchCampusSuccess(data));
  } catch (error) {
    dispatch(fetchCampusFailure(error.message));
  }
};

// Division
export const fetchDivisionRequest = () => ({ type: FETCH_DIVISION_REQUEST });
export const fetchDivisionSuccess = (data) => ({ type: FETCH_DIVISION_SUCCESS, payload: data });
export const fetchDivisionFailure = (error) => ({ type: FETCH_DIVISION_FAILURE, payload: error });

export const fetchDivisionData = () => async (dispatch) => {
  dispatch(fetchDivisionRequest());
  try {
    const response = await fetch(`${baseUrl}/auth/get-division-dropdown`);
    if (!response.ok) throw new Error(response.statusText);
    const data = await response.json();
    console.log(data);
    dispatch(fetchDivisionSuccess(data));
  } catch (error) {
    dispatch(fetchDivisionFailure(error.message));
  }
};


// Level
export const fetchLevelRequest = () => ({ type: FETCH_LEVEL_REQUEST });
export const fetchLevelSuccess = (data) => ({ type: FETCH_LEVEL_SUCCESS, payload: data });
export const fetchLevelFailure = (error) => ({ type: FETCH_LEVEL_FAILURE, payload: error });

export const fetchLevelData = (DivId = '') => async (dispatch) => {
  dispatch(fetchLevelRequest());
  try {
    // append DivId param dynamically
    const url = `${baseUrl}/auth/get-level-dropdown?DivId=${encodeURIComponent(DivId)}`;
    const response = await fetch(url);
    if (!response.ok) throw new Error(response.statusText);
    const data = await response.json();
    console.log(data);
    dispatch(fetchLevelSuccess(data));
  } catch (error) {
    dispatch(fetchLevelFailure(error.message));
  }
};


// Strand
export const fetchStrandRequest = () => ({ type: FETCH_STRAND_REQUEST });
export const fetchStrandSuccess = (data) => ({ type: FETCH_STRAND_SUCCESS, payload: data });
export const fetchStrandFailure = (error) => ({ type: FETCH_STRAND_FAILURE, payload: error });

export const fetchStrandData = (LevelId = '') => async (dispatch) => {
  dispatch(fetchStrandRequest());
  try {

    const url = `${baseUrl}/auth/get-strand-dropdown?LevelId=${encodeURIComponent(LevelId)}`;
    const response = await fetch(url);
    if (!response.ok) throw new Error(response.statusText);
    const data = await response.json();
    console.log(data);
    dispatch(fetchStrandSuccess(data));
  } catch (error) {
    dispatch(fetchStrandFailure(error.message));
  }
};

//Nationality
export const fetchNationalityRequest = () => ({ type: FETCH_NATIONALITY_REQUEST });
export const fetchNationalitySuccess = (data) => ({ type: FETCH_NATIONALITY_SUCCESS, payload: data });
export const fetchNationalityFailure = (error) => ({ type: FETCH_NATIONALITY_FAILURE, payload: error });

export const fetchNationalityData = () => async (dispatch) => {
  dispatch(fetchNationalityRequest());
  try {
    const response = await fetch(`${baseUrl}/auth/get-nationality-dropdown`);
    if (!response.ok) throw new Error(response.statusText);
    const data = await response.json();
    console.log(data);
    dispatch(fetchNationalitySuccess(data));
  } catch (error) {
    dispatch(fetchNationalityFailure(error.message));
  }
};


//Nationality
export const fetchReligionRequest = () => ({ type: FETCH_RELIGION_REQUEST });
export const fetchReligionSuccess = (data) => ({ type: FETCH_RELIGION_SUCCESS, payload: data });
export const fetchReligionFailure = (error) => ({ type: FETCH_RELIGION_FAILURE, payload: error });

export const fetchReligionData = () => async (dispatch) => {
  dispatch(fetchReligionRequest());
  try {
    const response = await fetch(`${baseUrl}/auth/get-religion-dropdown`);
    if (!response.ok) throw new Error(response.statusText);
    const data = await response.json();
    console.log(data);
    dispatch(fetchReligionSuccess(data));
  } catch (error) {
    dispatch(fetchReligionFailure(error.message));
  }
};

//Province
export const fetchProvinceRequest = () => ({ type: FETCH_PROVINCE_REQUEST });
export const fetchProvinceSuccess = (data) => ({ type: FETCH_PROVINCE_SUCCESS, payload: data });
export const fetchProvinceFailure = (error) => ({ type: FETCH_PROVINCE_FAILURE, payload: error });

export const fetchProvinceData = () => async (dispatch) => {
  dispatch(fetchProvinceRequest());
  try {
    const response = await fetch(`${baseUrl}/auth/get-province-dropdown`);
    if (!response.ok) throw new Error(response.statusText);
    const data = await response.json();
    console.log(data);
    dispatch(fetchProvinceSuccess(data));
  } catch (error) {
    dispatch(fetchProvinceFailure(error.message));
  }
};

//Municipality
export const fetchMunicipalityRequest = () => ({ type: FETCH_MUNICIPALITY_REQUEST });
export const fetchMunicipalitySuccess = (data) => ({ type: FETCH_MUNICIPALITY_SUCCESS, payload: data });
export const fetchMunicipalityFailure = (error) => ({ type: FETCH_MUNICIPALITY_FAILURE, payload: error });

export const fetchMunicipalityData = (ProvinceId = '') => async (dispatch) => {
  dispatch(fetchMunicipalityRequest());
  try {
    const url = `${baseUrl}/auth/get-municipality-dropdown?ProvinceId=${encodeURIComponent(ProvinceId)}`;
    const response = await fetch(url);
    if (!response.ok) throw new Error(response.statusText);
    const data = await response.json();
    console.log(data);
    dispatch(fetchMunicipalitySuccess(data));
  } catch (error) {
    dispatch(fetchMunicipalityFailure(error.message));
  }
};


//Brgy
export const fetchBarangayRequest = () => ({ type: FETCH_BARANGAY_REQUEST });
export const fetchBarangaySuccess = (data) => ({ type: FETCH_BARANGAY_SUCCESS, payload: data });
export const fetchBarangayFailure = (error) => ({ type: FETCH_BARANGAY_FAILURE, payload: error });

export const fetchBarangayData = (MunicipalityId = '') => async (dispatch) => {
  dispatch(fetchBarangayRequest());
  try {
    const url = `${baseUrl}/auth/get-barangay-dropdown?MunicipalityId=${encodeURIComponent(MunicipalityId)}`;
    const response = await fetch(url);
    if (!response.ok) throw new Error(response.statusText);
    const data = await response.json();
    console.log(data);
    dispatch(fetchBarangaySuccess(data));
  } catch (error) {
    dispatch(fetchBarangayFailure(error.message));
  }
};


//Submit online application form
export const fetchOnlineApplicationFormRequest = () => ({ type: FETCH_ONLINEAPPLICATIONFORM_REQUEST });
export const fetchOnlineApplicationFormSuccess = (data) => ({ type: FETCH_ONLINEAPPLICATIONFORM_SUCCESS, payload: data });
export const fetchOnlineApplicationFormFailure = (error) => ({ type: FETCH_ONLINEAPPLICATIONFORM_FAILURE, payload: error });

export const fetchOnlineApplicationFormData = (formData) => async (dispatch) => {
  dispatch(fetchOnlineApplicationFormRequest());

  try {
    const url = `${baseUrl}/admission/student-online-application`;

    const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json(); 
    dispatch(fetchOnlineApplicationFormSuccess(result));
  } catch (error) {
    dispatch(fetchOnlineApplicationFormFailure(error.message));
  }
};