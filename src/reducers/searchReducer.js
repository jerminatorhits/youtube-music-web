const initialState = {
	query: "",
	results: [],
	resultsFetching: false,
	resultsFetched: false,
	resultsError: null
}

const searchReducer = (state=initialState, action) => {
	switch (action.type) {
		case "UPDATE_QUERY":
			return {
				...state,
				query: action.query
			}
		case 'REQUEST_RESULTS':
	    return {
	      ...state,
	      resultsFetching: true
	    }
    case 'RECEIVE_RESULTS':
      return {
        ...state,
        resultsFetching: false,
        results: action.results
      }
		case "FETCH_RESULTS_PENDING":
			return {
				...state,
				resultsFetching: true
			}
		case "FETCH_RESULTS_REJECTED":
			return {
				...state,
				resultsFetching: false,
				resultsError: action.payload
			}
		case "FETCH_RESULTS_FULFILLED":
			return {
				...state,
				resultsFetching: false,
				resultsFetched: true,
				results: action.payload
			}
		default:
			return state
	}
}

export default searchReducer