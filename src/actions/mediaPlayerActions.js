export const MOUNT_PLAYER = 'MOUNT_PLAYER';
export const PLAYING = 'PLAYING';
export const NOT_PLAYING = 'NOT_PLAYING';
export const TOGGLE_PLAY = 'TOGGLE_PLAY';
export const ADD_VIDEO = 'ADD_VIDEO';
export const DELETE_VIDEO = 'DELETE_VIDEO';
export const PLAY_SELECTED = 'PLAY_SELECTED';
export const PLAY_NEXT = 'PLAY_NEXT';
export const REFRESH_VIDEO = 'REFRESH_VIDEO';
export const INCREMENT_INDEX = 'INCREMENT_INDEX';
export const NULLIFY_VIDEO = 'NULLIFY_VIDEO';
export const REINSTATE_VIDEO = 'REINSTATE_VIDEO';
export const SHUFFLE_ON = 'SHUFFLE_ON';
export const SHUFFLE_OFF = 'SHUFFLE_OFF';
export const TOGGLE_REPEAT = 'TOGGLE_REPEAT';

export function mountPlayer(event) {
  return {
    type: MOUNT_PLAYER,
    payload: event.target
  }
}

export function playing() {
  return {
    type: PLAYING
  }
}

export function notPlaying() {
  return {
    type: NOT_PLAYING
  }
}

export function addVideo(video) {
  return {
    type: ADD_VIDEO,
    payload: video
  }
}

export function deleteVideo(index) {
  return {
    type: DELETE_VIDEO,
    payload: index
  }
}

export function playSelected(itemID) {
  return {
    type: PLAY_SELECTED,
    payload: itemID
  }
}

export function playNext(repeat, shuffle) {
  return {
    type: PLAY_NEXT,
    payload: {
      repeat,
      shuffle,
    }
  }
}

export function incrementIndex() {
  return {
    type: INCREMENT_INDEX
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

export function shuffleOn() {
  return {
    type: SHUFFLE_ON
  }
}

export function shuffleOff() {
  return {
    type: SHUFFLE_OFF
  }
}

export function toggleRepeat() {
  return {
    type: TOGGLE_REPEAT
  }
}

/*
function refreshVideo() {
  nullifyVideo();
  reinstateVideo();
}
*/
