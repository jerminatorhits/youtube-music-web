import { shuffle } from '../utils/playlistFunctions'

const initialState = {
  currentIndex: null,
  isPlaying: false,
  isShuffled: false,
  nextVideo: null,
  currentVideo: null,
  nextIndex: null,
  player: null,
  videos: [],
}

const mediaPlayerReducer = (state=initialState, action) => {
  switch (action.type) {
    case "MOUNT_PLAYER":
      return {
        ...state,
        player: action.payload
      }
    case "PLAYING":
      return {
        ...state,
        isPlaying: true
      }
    case "NOT_PLAYING":
      return {
        ...state,
        isPlaying: false
      }
    case "ADD_VIDEO":
      return {
        ...state,
        videos: [...state.videos, action.payload]
      }
    case "DELETE_VIDEO":
      const index = action.payload;
      if (index !== -1) {
        return {
          ...state,
          videos: [
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
      const currentVideo = state.currentVideo;
      const videos = state.videos;
      if (currentIndex === videos.length - 1) {
        return {
          ...state,
          currentIndex: null,
          currentVideo: null
        }
      }
      const nextIndex = currentIndex + 1;
      const nextVideo = videos[nextIndex];
      return {
        ...state,
        currentIndex: nextIndex,
        currentVideo: nextVideo
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
    case "INCREMENT_INDEX":
      return {
        ...state,
        currentIndex: state.currentIndex + 1,
        nextIndex: state.currentIndex + 2,
      }
    case "SHUFFLE_ON":
      return {
        ...state,
        isShuffled: true,
        shuffledVideos: shuffle(state.videos)
      }
    case "SHUFFLE_OFF":
      return {
        ...state,
        isShuffled: false,
        shuffledVideos: state.videos
      }
    default:
      return state
  }
}

export default mediaPlayerReducer