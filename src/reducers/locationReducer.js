import {
  RECEIVE_PERSONAL_LOCATION,
  RECEIVE_WEBSITE_LOCATION,
  PERSONAL_LOADING,
  WEBSITE_LOADING,
  RESET_LOCATION,
} from '../actions/locationActions';

const initialState = {
  websiteLocation: {},
  isWebsiteLoading : false,
  personalLocation: {},
  isPersonalLoading: false,
};

const reducer = (state = initialState, action) => {
  const { payload, type } = action;

  switch (type) {
    case RESET_LOCATION:
      return {
        ...state,
        personalLocation: {}
      };
    case RECEIVE_PERSONAL_LOCATION:
      return {
        ...state,
        personalLocation: payload,
        isPersonalLoading: false,
      };
    case PERSONAL_LOADING:
      return {
        ...state,
        isPersonalLoading: true,
      };
    case RECEIVE_WEBSITE_LOCATION:
      return {
        ...state,
        websiteLocation: payload,
        isWebsiteLoading: false,
      };
    case WEBSITE_LOADING:
      return {
        ...state,
        isWebsiteLoading: true,
      };
      
    default:
      return state;
  }
};

export default reducer;