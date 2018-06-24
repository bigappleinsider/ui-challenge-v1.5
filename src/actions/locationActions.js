import axios from 'axios';
import { API_ENDPOINT } from '../constants/api';

export const RECEIVE_PERSONAL_LOCATION = 'RECEIVE_PERSONAL_LOCATION';
export const RECEIVE_WEBSITE_LOCATION = 'RECEIVE_WEBSITE_LOCATION';
export const PERSONAL_LOADING = 'PERSONAL_LOADING';
export const WEBSITE_LOADING = 'WEBSITE_LOADING';
export const RESET_LOCATION = 'RESET_LOCATION';


export const fetchPersonalLocation = () => async dispatch => {
  dispatch({
    type: PERSONAL_LOADING,
  });

  const { data } = await axios.get(`${API_ENDPOINT}/json/`);
  return dispatch({
    type: RECEIVE_PERSONAL_LOCATION,
    payload: data
  });
}

export const fetchWebsiteLocation = (website) => async dispatch => {
  dispatch({
    type: WEBSITE_LOADING,
  });

  const { data } = await axios.get(`${API_ENDPOINT}/json/${website}`);
  return dispatch({
    type: RECEIVE_WEBSITE_LOCATION,
    payload: data
  });
}

export const resetLocation = () => dispatch => {
  return dispatch({
    type: RESET_LOCATION
  });
}