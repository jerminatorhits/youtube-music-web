export const TOGGLE_PLAY = 'TOGGLE_PLAY'
export const ADD_VIDEO = 'ADD_VIDEO'
export const DELETE_VIDEO = 'DELETE_VIDEO'
export const PLAY_SELECTED = 'PLAY_SELECTED'
export const PLAY_NEXT = 'PLAY_NEXT'
export const REFRESH_VIDEO = 'REFRESH_VIDEO'
export const NULLIFY_VIDEO = 'NULLIFY_VIDEO'
export const REINSTATE_VIDEO = 'REINSTATE_VIDEO'

export function togglePlay() {
  return {
    type: TOGGLE_PLAY
  }
}

export function addVideo(video) {
  return {
    type: ADD_VIDEO,
    payload: video 
  }
}

export function deleteVideo(video) {
  return {
    type: DELETE_VIDEO,
    payload: video
  }
}

export function playSelected(itemID) {
  //refreshVideo();
  return {
    type: PLAY_SELECTED,
    payload: itemID
  }
}

export function playNext() {
  //refreshVideo();
  return {
    type: PLAY_NEXT
  }
}

export function nullifyVideo() {
  return {
    type: NULLIFY_VIDEO
  }
}

export function reinstateVideo() {
  return {
    type: REINSTATE_VIDEO
  }
}
/*
function refreshVideo() {
  nullifyVideo();
  reinstateVideo();
}
*/
