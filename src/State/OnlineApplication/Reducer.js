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

const initialDropdownState = {
  loading: false,
  data: [],
  error: ''
};

const initialState = {
  campus: { ...initialDropdownState },
  level: { ...initialDropdownState },
  division: { ...initialDropdownState },
  strand: {...initialDropdownState},
  nationality: {...initialDropdownState},
  religion: {...initialDropdownState},
  province: {...initialDropdownState},
  municipality: {...initialDropdownState},
  barangay: {...initialDropdownState},
  onlineApplicationFormPost: {
    loading: false,
    data: null,
    error: null,
    success: false,
  },
};

const dropdownReducer = (state = initialState, action) => {
  switch(action.type) {
    // Campus
    case FETCH_CAMPUS_REQUEST:
      return { ...state, campus: { loading: true, data: [], error: '' } };
    case FETCH_CAMPUS_SUCCESS:
      return { ...state, campus: { loading: false, data: action.payload, error: '' } };
    case FETCH_CAMPUS_FAILURE:
      return { ...state, campus: { loading: false, data: [], error: action.payload } };

    // Division
    case FETCH_DIVISION_REQUEST:
      return { ...state, division: { loading: true, data: [], error: '' } };
    case FETCH_DIVISION_SUCCESS:
      return { ...state, division: { loading: false, data: action.payload, error: '' } };
    case FETCH_DIVISION_FAILURE:
      return { ...state, division: { loading: false, data: [], error: action.payload } };

    // Level
    case FETCH_LEVEL_REQUEST:
      return { ...state, level: { loading: true, data: [], error: '' } };
    case FETCH_LEVEL_SUCCESS:
      return { ...state, level: { loading: false, data: action.payload, error: '' } };
    case FETCH_LEVEL_FAILURE:
      return { ...state, level: { loading: false, data: [], error: action.payload } };

    //Strand
    case FETCH_STRAND_REQUEST:
      return { ...state, strand: { loading: true, data: [], error: '' } };
    case FETCH_STRAND_SUCCESS:
      return { ...state, strand: { loading: false, data: action.payload, error: '' } };
    case FETCH_STRAND_FAILURE:
      return { ...state, strand: { loading: false, data: [], error: action.payload } };

       //Strand
    case FETCH_NATIONALITY_REQUEST:
      return { ...state, nationality: { loading: true, data: [], error: '' } };
    case FETCH_NATIONALITY_SUCCESS:
      return { ...state, nationality: { loading: false, data: action.payload, error: '' } };
    case FETCH_NATIONALITY_FAILURE:
      return { ...state, nationality: { loading: false, data: [], error: action.payload } };

       //Strand
    case FETCH_RELIGION_REQUEST:
      return { ...state, religion: { loading: true, data: [], error: '' } };
    case FETCH_RELIGION_SUCCESS:
      return { ...state, religion: { loading: false, data: action.payload, error: '' } };
    case FETCH_RELIGION_FAILURE:
      return { ...state, religion: { loading: false, data: [], error: action.payload } };

    //Province
    case FETCH_PROVINCE_REQUEST:
      return { ...state, province: { loading: true, data: [], error: '' } };
    case FETCH_PROVINCE_SUCCESS:
      return { ...state, province: { loading: false, data: action.payload, error: '' } };
    case FETCH_PROVINCE_FAILURE:
      return { ...state, province: { loading: false, data: [], error: action.payload } };
 

    //Municipality
    case FETCH_MUNICIPALITY_REQUEST:
      return { ...state, municipality: { loading: true, data: [], error: '' } };
    case FETCH_MUNICIPALITY_SUCCESS:
      return { ...state, municipality: { loading: false, data: action.payload, error: '' } };
    case FETCH_MUNICIPALITY_FAILURE:
      return { ...state, municipality: { loading: false, data: [], error: action.payload } };
    
    //Barangay
    case FETCH_BARANGAY_REQUEST:
      return { ...state, barangay: { loading: true, data: [], error: '' } };
    case FETCH_BARANGAY_SUCCESS:
      return { ...state, barangay: { loading: false, data: action.payload, error: '' } };
    case FETCH_BARANGAY_FAILURE:
      return { ...state, barangay: { loading: false, data: [], error: action.payload } };
    
    //Submit Online Application Form
    case FETCH_ONLINEAPPLICATIONFORM_REQUEST:
      return { ...state, onlineApplicationFormPost: { loading: true, data: [], error: '', success: false } };
    case FETCH_ONLINEAPPLICATIONFORM_SUCCESS:
      return { ...state, onlineApplicationFormPost: { loading: false, data: action.payload, error: '', success: true } };
    case FETCH_ONLINEAPPLICATIONFORM_FAILURE:
      return { ...state, onlineApplicationFormPost: { loading: false, data: [], error: action.payload, success: false } };

    default:
      return state;
  }
};

export default dropdownReducer;
