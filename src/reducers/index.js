import { combineReducers } from 'redux'
//import currentPlaylist from './currentPlaylist'
import search from './searchReducer'
import mediaPlayer from './mediaPlayerReducer'
//import visibilityFilter from './visibilityFilter'
 
export default combineReducers({
  search,
  mediaPlayer,
//  currentPlaylist,
//  visibilityFilter
})