import { getYoutubeVideos } from '../utils/client'

export const UPDATE_QUERY = 'UPDATE_QUERY'
export const REQUEST_RESULTS = 'REQUEST_RESULTS'
export const RECEIVE_RESULTS = 'RECEIVE_RESULTS'

function updateQuery(query) {
  return {
    type: UPDATE_QUERY,
    query
  }
}

function requestResults(query) {
  return {
    type: REQUEST_RESULTS,
    query
  }
}

function receiveResults(query, json) {
  return {
    type: RECEIVE_RESULTS,
    query,
    results: json,
    receivedAt: Date.now()
  }
}

export function fetchResults(query) {
  return function (dispatch) {
    dispatch(updateQuery(query))
    dispatch(requestResults(query))
  return getYoutubeVideos(query)
    .then(response => response.data.items)
    .then(json => dispatch(receiveResults(query, json)))
  }
}

/*
export function fetchResultsSuccess(error) {
  return {
    type: 'FETCH_RESULTS_SUCCESS',
    payload: error
  };
}

export function fetchResultsError(error) {
  return {
    type: 'FETCH_RESULTS_FAILURE',
    payload: error
  };
}
*/