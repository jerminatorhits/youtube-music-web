const initialState = {
  currentIndex: null,
  currentVideo: null,
  isPlaying: false,
  videos: []
}

const mediaPlayerReducer = (state=initialState, action) => {
  switch (action.type) {
    case "TOGGLE_PLAY":
      return {
        ...state,
        isPlaying: action.payload
      }
    case "ADD_VIDEO":
      return {
        ...state,
        videos: [...state.videos, action.payload]
      }
    case "DELETE_VIDEO":
      const index = state.videos.indexOf(action.payload);
      if (index !== -1) {
        return {
          items: [
            ...state.videos.slice(0, index),
            ...state.videos.slice(index + 1)
          ]
        }
      }
      else {
        return state
      }
    case "PLAY_SELECTED":
      return {
        ...state,
        currentIndex: action.payload,
        currentVideo: state.videos[action.payload]
      }
    case "PLAY_NEXT":
      const currentIndex = state.currentIndex;
      const videos = state.videos;
      if (currentIndex === videos.length - 1) {
        return {
          ...state,
          currentIndex: null
        }
      }
      return {
        ...state,
        currentIndex: state.currentIndex + 1
      }
    case "NULLIFY_VIDEO":
      return {
        ...state,
        currentVideo: null
      }
    case "REINSTATE_VIDEO":
      return {
        ...state,
        currentVideo: state.videos[state.currentIndex]
      }
    default:
      return state
  }
}

export default mediaPlayerReducer