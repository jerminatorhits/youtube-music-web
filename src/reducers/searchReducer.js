const searchReducer = (state = {
		results: [],
		fetching: false,
		fetched: false,
		error: null
	}, action) => {

		switch (action.type) {
			case "FETCH_RESULT":
				return {
					...state,
					fetching: true
				}
			case "FETCH_RESULT_REJECTED":
				return {
					...state,
					fetching: false,
					error: action.payload
				}
			case "FETCH_RESULT_FULFILLED":
				return {
					...state,
					fetching: false,
					fetched: true,
					results: action.payload,
				}
			default:
				return state
		}
}

export default searchReducer